-- Add database-level constraints for contact_submissions to enforce server-side validation
-- These constraints prevent attackers from bypassing client-side validation

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100);

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_email_length CHECK (char_length(email) <= 255);

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_phone_length CHECK (phone IS NULL OR char_length(phone) <= 20);

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_company_length CHECK (company IS NULL OR char_length(company) <= 100);

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_subject_not_empty CHECK (char_length(subject) >= 1);

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_message_length CHECK (char_length(message) >= 10 AND char_length(message) <= 2000);

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_priority_valid CHECK (priority IN ('low', 'medium', 'high'));

ALTER TABLE public.contact_submissions
ADD CONSTRAINT check_status_valid CHECK (status IN ('new', 'in_progress', 'resolved', 'closed'));