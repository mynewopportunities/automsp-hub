 import { useState, useEffect, useCallback } from 'react';
 import { supabase } from '@/integrations/supabase/client';
 import { toast } from 'sonner';
 
 export interface ContactSubmission {
   id: string;
   name: string;
   email: string;
   phone: string | null;
   company: string | null;
   subject: string;
   priority: string;
   message: string;
   status: string;
   created_at: string;
 }
 
 export const useContactSubmissions = () => {
   const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
   const [loading, setLoading] = useState(true);
   const [searchQuery, setSearchQuery] = useState('');
 
   const fetchSubmissions = useCallback(async () => {
     setLoading(true);
     const { data, error } = await supabase
       .from('contact_submissions')
       .select('*')
       .order('created_at', { ascending: false });
 
     if (error) {
       console.error('Error fetching submissions:', error);
       toast.error('Failed to load submissions');
     } else {
       setSubmissions(data || []);
     }
     setLoading(false);
   }, []);
 
   useEffect(() => {
     fetchSubmissions();
   }, [fetchSubmissions]);
 
   const updateStatus = async (id: string, newStatus: string) => {
     const { error } = await supabase
       .from('contact_submissions')
       .update({ status: newStatus })
       .eq('id', id);
 
     if (error) {
       console.error('Error updating status:', error);
       toast.error('Failed to update status');
       return false;
     }
 
     setSubmissions(prev =>
       prev.map(s => (s.id === id ? { ...s, status: newStatus } : s))
     );
     toast.success('Status updated');
     return true;
   };
 
   const filteredSubmissions = submissions.filter(s => {
     if (!searchQuery) return true;
     const q = searchQuery.toLowerCase();
     return (
       s.name.toLowerCase().includes(q) ||
       s.email.toLowerCase().includes(q) ||
       (s.company?.toLowerCase().includes(q) ?? false) ||
       s.subject.toLowerCase().includes(q) ||
       s.message.toLowerCase().includes(q)
     );
   });
 
   return {
     submissions: filteredSubmissions,
     loading,
     searchQuery,
     setSearchQuery,
     updateStatus,
     refetch: fetchSubmissions,
   };
 };