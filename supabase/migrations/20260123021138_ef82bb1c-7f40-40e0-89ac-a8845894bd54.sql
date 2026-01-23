-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Users can upload their own documents" ON public.documents;

-- Create updated INSERT policy that forces is_public = false for regular users
-- Only admins can set is_public = true
CREATE POLICY "Users can upload their own documents"
ON public.documents
FOR INSERT
WITH CHECK (
  auth.uid() = user_id 
  AND (
    is_public = false 
    OR has_role(auth.uid(), 'admin')
  )
);