-- Drop the existing SELECT policy
DROP POLICY IF EXISTS "Users can view own ticket messages or staff can view all" ON public.ticket_messages;

-- Create updated SELECT policy with explicit authentication requirement
CREATE POLICY "Users can view own ticket messages or staff can view all"
ON public.ticket_messages
FOR SELECT
USING (
  auth.uid() IS NOT NULL
  AND (
    EXISTS (
      SELECT 1 FROM support_tickets
      WHERE support_tickets.id = ticket_messages.ticket_id
      AND support_tickets.user_id = auth.uid()
    )
    OR has_role(auth.uid(), 'admin')
    OR has_role(auth.uid(), 'moderator')
  )
);