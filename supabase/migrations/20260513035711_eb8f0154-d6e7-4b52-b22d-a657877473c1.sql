
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF auth.uid() IS NOT NULL
     AND auth.uid() <> _user_id
     AND NOT EXISTS (
       SELECT 1 FROM public.user_roles
       WHERE user_id = auth.uid() AND role = 'admin'
     )
  THEN
    RETURN false;
  END IF;

  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO anon, authenticated;

DROP POLICY IF EXISTS "Users can add messages to own tickets or staff can add to any" ON public.ticket_messages;

CREATE POLICY "Users can add messages to own tickets or staff can add to any"
ON public.ticket_messages
FOR INSERT
TO authenticated
WITH CHECK (
  (
    auth.uid() = user_id
    AND is_staff_reply = false
    AND EXISTS (
      SELECT 1 FROM public.support_tickets
      WHERE support_tickets.id = ticket_messages.ticket_id
        AND support_tickets.user_id = auth.uid()
    )
  )
  OR (
    auth.uid() = user_id
    AND (
      EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
      OR EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'moderator')
    )
  )
);

CREATE OR REPLACE FUNCTION public.enforce_staff_reply_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.is_staff_reply = true THEN
    IF NOT EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = NEW.user_id
        AND role IN ('admin', 'moderator')
    ) THEN
      RAISE EXCEPTION 'is_staff_reply can only be true for admin or moderator users';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enforce_staff_reply_role_trg ON public.ticket_messages;
CREATE TRIGGER enforce_staff_reply_role_trg
BEFORE INSERT OR UPDATE ON public.ticket_messages
FOR EACH ROW EXECUTE FUNCTION public.enforce_staff_reply_role();

DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Users can view public documents or their own" ON public.documents;

CREATE POLICY "Users can view their own documents or admins view public"
ON public.documents
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
  OR (is_public = true AND public.has_role(auth.uid(), 'admin'))
);
