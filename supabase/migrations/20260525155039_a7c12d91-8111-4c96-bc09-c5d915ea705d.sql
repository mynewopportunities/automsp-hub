
-- 1) Tighten documents UPDATE policy
DROP POLICY IF EXISTS "Users can update their own document metadata" ON public.documents;

CREATE POLICY "Users can update their own document metadata"
ON public.documents
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (
  auth.uid() = user_id
  AND (is_public = false OR public.has_role(auth.uid(), 'admin'::app_role))
);

-- 2) Fix has_role to honor _user_id parameter, with caller guard
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  _caller uuid := auth.uid();
BEGIN
  IF _caller IS NULL THEN
    RETURN false;
  END IF;

  -- Non-admin callers can only check their own roles
  IF _user_id IS DISTINCT FROM _caller THEN
    IF NOT EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = _caller AND role = 'admin'::app_role
    ) THEN
      RETURN false;
    END IF;
  END IF;

  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
END;
$function$;
