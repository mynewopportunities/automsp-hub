-- Remove the redundant SELECT policy since the ALL policy already covers SELECT operations
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;