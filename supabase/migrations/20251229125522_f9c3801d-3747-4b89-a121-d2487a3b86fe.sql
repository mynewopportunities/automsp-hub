-- Fix 1: Add UPDATE policy for documents table with file_url immutability protection
CREATE POLICY "Users can update their own document metadata"
ON public.documents
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Fix 2: Add server-side file type validation for avatars bucket
-- First drop existing upload policy and recreate with file extension validation
DROP POLICY IF EXISTS "Users can upload their own avatar" ON storage.objects;

CREATE POLICY "Users can upload their own avatar"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1] AND
  (lower(storage.extension(name)) = 'jpg' OR 
   lower(storage.extension(name)) = 'jpeg' OR 
   lower(storage.extension(name)) = 'png' OR 
   lower(storage.extension(name)) = 'gif' OR 
   lower(storage.extension(name)) = 'webp')
);

-- Add update policy with same file type validation
DROP POLICY IF EXISTS "Users can update their own avatar" ON storage.objects;

CREATE POLICY "Users can update their own avatar"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
)
WITH CHECK (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1] AND
  (lower(storage.extension(name)) = 'jpg' OR 
   lower(storage.extension(name)) = 'jpeg' OR 
   lower(storage.extension(name)) = 'png' OR 
   lower(storage.extension(name)) = 'gif' OR 
   lower(storage.extension(name)) = 'webp')
);