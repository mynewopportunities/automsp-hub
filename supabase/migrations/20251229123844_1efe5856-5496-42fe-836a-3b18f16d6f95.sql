-- Drop the existing restrictive SELECT policy for support_tickets
DROP POLICY IF EXISTS "Users can view their own tickets" ON public.support_tickets;

-- Create new SELECT policy that allows users to view their own tickets OR staff to view all
CREATE POLICY "Users can view own tickets or staff can view all"
ON public.support_tickets
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id OR
  public.has_role(auth.uid(), 'admin') OR
  public.has_role(auth.uid(), 'moderator')
);

-- Drop the existing restrictive UPDATE policy for support_tickets
DROP POLICY IF EXISTS "Users can update their own tickets" ON public.support_tickets;

-- Create new UPDATE policy that allows users to update their own tickets OR staff to update all
CREATE POLICY "Users can update own tickets or staff can update all"
ON public.support_tickets
FOR UPDATE
TO authenticated
USING (
  auth.uid() = user_id OR
  public.has_role(auth.uid(), 'admin') OR
  public.has_role(auth.uid(), 'moderator')
);

-- Drop the existing restrictive SELECT policy for ticket_messages
DROP POLICY IF EXISTS "Users can view messages for their tickets" ON public.ticket_messages;

-- Create new SELECT policy for ticket_messages that allows staff to view all
CREATE POLICY "Users can view own ticket messages or staff can view all"
ON public.ticket_messages
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM support_tickets
    WHERE support_tickets.id = ticket_messages.ticket_id
    AND support_tickets.user_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
  OR public.has_role(auth.uid(), 'moderator')
);

-- Drop the existing restrictive INSERT policy for ticket_messages
DROP POLICY IF EXISTS "Users can add messages to their tickets" ON public.ticket_messages;

-- Create new INSERT policy for ticket_messages that allows staff to add messages
CREATE POLICY "Users can add messages to own tickets or staff can add to any"
ON public.ticket_messages
FOR INSERT
TO authenticated
WITH CHECK (
  (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM support_tickets
      WHERE support_tickets.id = ticket_messages.ticket_id
      AND support_tickets.user_id = auth.uid()
    )
  )
  OR (
    (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'))
    AND auth.uid() = user_id
  )
);