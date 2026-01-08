-- Drop the existing policy that might allow anonymous access
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;

-- Create a new policy that explicitly requires authentication AND owns the profile
CREATE POLICY "Users can view their own profile" 
ON profiles 
FOR SELECT 
USING (auth.uid() IS NOT NULL AND auth.uid() = id);