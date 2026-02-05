 import { useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { Header } from '@/components/Header';
 import { Footer } from '@/components/Footer';
 import { useAdminRole } from '@/hooks/useAdminRole';
 import { useContactSubmissions } from '@/hooks/useContactSubmissions';
 import { Input } from '@/components/ui/input';
 import { Badge } from '@/components/ui/badge';
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
 import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
 import { Skeleton } from '@/components/ui/skeleton';
 import { Search, Mail, Phone, Building, Clock, AlertCircle } from 'lucide-react';
 import { format } from 'date-fns';
 
 const statusOptions = [
   { value: 'new', label: 'New', color: 'bg-blue-500' },
   { value: 'in_progress', label: 'In Progress', color: 'bg-yellow-500' },
   { value: 'resolved', label: 'Resolved', color: 'bg-green-500' },
   { value: 'closed', label: 'Closed', color: 'bg-muted' },
 ];
 
 const priorityColors: Record<string, string> = {
   low: 'bg-muted text-muted-foreground',
   medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
   high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
 };
 
 const Submissions = () => {
   const navigate = useNavigate();
   const { isAdmin, loading: roleLoading } = useAdminRole();
   const { submissions, loading, searchQuery, setSearchQuery, updateStatus } = useContactSubmissions();
 
   useEffect(() => {
     if (!roleLoading && !isAdmin) {
       navigate('/auth');
     }
   }, [isAdmin, roleLoading, navigate]);
 
   if (roleLoading) {
     return (
       <div className="min-h-screen flex items-center justify-center bg-background">
         <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
       </div>
     );
   }
 
   if (!isAdmin) {
     return null;
   }
 
   return (
     <div className="min-h-screen flex flex-col bg-background">
       <Header />
       <main className="flex-1 container py-8">
         <div className="mb-8">
           <h1 className="text-3xl font-heading font-bold mb-2">Contact Submissions</h1>
           <p className="text-muted-foreground">Review and manage incoming contact form submissions.</p>
         </div>
 
         {/* Search */}
         <div className="relative mb-6 max-w-md">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input
             placeholder="Search by name, email, company, or message..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="pl-10"
           />
         </div>
 
         {/* Submissions List */}
         {loading ? (
           <div className="space-y-4">
             {[...Array(3)].map((_, i) => (
               <Skeleton key={i} className="h-48 w-full" />
             ))}
           </div>
         ) : submissions.length === 0 ? (
           <Card>
             <CardContent className="py-12 text-center">
               <AlertCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
               <p className="text-muted-foreground">
                 {searchQuery ? 'No submissions match your search.' : 'No contact submissions yet.'}
               </p>
             </CardContent>
           </Card>
         ) : (
           <div className="space-y-4">
             {submissions.map((submission) => (
               <Card key={submission.id} className="overflow-hidden">
                 <CardHeader className="pb-2">
                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                     <div>
                       <CardTitle className="text-lg">{submission.name}</CardTitle>
                       <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                         <span className="flex items-center gap-1">
                           <Mail className="w-3.5 h-3.5" />
                           <a href={`mailto:${submission.email}`} className="hover:underline">
                             {submission.email}
                           </a>
                         </span>
                         {submission.phone && (
                           <span className="flex items-center gap-1">
                             <Phone className="w-3.5 h-3.5" />
                             {submission.phone}
                           </span>
                         )}
                         {submission.company && (
                           <span className="flex items-center gap-1">
                             <Building className="w-3.5 h-3.5" />
                             {submission.company}
                           </span>
                         )}
                       </div>
                     </div>
                     <div className="flex items-center gap-2">
                       <Badge className={priorityColors[submission.priority] || ''}>
                         {submission.priority}
                       </Badge>
                       <Select
                         value={submission.status}
                         onValueChange={(value) => updateStatus(submission.id, value)}
                       >
                         <SelectTrigger className="w-[140px] h-8">
                           <SelectValue />
                         </SelectTrigger>
                         <SelectContent>
                           {statusOptions.map((opt) => (
                             <SelectItem key={opt.value} value={opt.value}>
                               <span className="flex items-center gap-2">
                                 <span className={`w-2 h-2 rounded-full ${opt.color}`} />
                                 {opt.label}
                               </span>
                             </SelectItem>
                           ))}
                         </SelectContent>
                       </Select>
                     </div>
                   </div>
                 </CardHeader>
                 <CardContent>
                   <div className="mb-2">
                     <span className="font-medium">Subject:</span>{' '}
                     <span className="capitalize">{submission.subject.replace('_', ' ')}</span>
                   </div>
                   <p className="text-sm text-foreground/80 whitespace-pre-wrap bg-muted/50 p-3 rounded-md">
                     {submission.message}
                   </p>
                   <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                     <Clock className="w-3 h-3" />
                     {format(new Date(submission.created_at), 'MMM d, yyyy h:mm a')}
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
         )}
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Submissions;