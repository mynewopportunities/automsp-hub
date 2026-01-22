-- Add explicit SELECT policy for users to view only their own roles
-- This prevents role enumeration while allowing the has_role() function to work properly

CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);