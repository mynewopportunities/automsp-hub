
-- 1. Harden has_role: ignore _user_id, always check auth.uid()
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN false;
  END IF;

  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = _role
  );
END;
$$;

-- Lock down EXECUTE so only authenticated callers can invoke it
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;

REVOKE EXECUTE ON FUNCTION public.enforce_staff_reply_role() FROM PUBLIC, anon, authenticated;

-- 2. Add CHECK constraints on support_tickets
ALTER TABLE public.support_tickets
  ADD CONSTRAINT check_subject_length CHECK (char_length(subject) BETWEEN 3 AND 200),
  ADD CONSTRAINT check_description_length CHECK (char_length(description) BETWEEN 5 AND 5000),
  ADD CONSTRAINT check_priority_valid CHECK (priority IN ('low','medium','high')),
  ADD CONSTRAINT check_status_valid CHECK (status IN ('open','in_progress','resolved','closed'));

-- 3. Add CHECK constraints on ticket_messages
ALTER TABLE public.ticket_messages
  ADD CONSTRAINT check_message_length CHECK (char_length(message) BETWEEN 1 AND 5000);

-- 4. Add CHECK constraints on documents
ALTER TABLE public.documents
  ADD CONSTRAINT check_title_length CHECK (char_length(title) BETWEEN 1 AND 200),
  ADD CONSTRAINT check_description_length CHECK (description IS NULL OR char_length(description) <= 2000);

-- 5. Restrict document upload extensions
DROP POLICY IF EXISTS "Users can upload their own documents" ON storage.objects;
CREATE POLICY "Users can upload their own documents"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'documents'
  AND auth.uid() IS NOT NULL
  AND (storage.foldername(name))[1] = auth.uid()::text
  AND lower(storage.extension(name)) IN ('pdf','doc','docx','txt','md','xlsx','xls','ppt','pptx','csv')
);
