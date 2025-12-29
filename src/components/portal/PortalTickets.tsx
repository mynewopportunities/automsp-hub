import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Plus, Loader2, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { z } from 'zod';

// Validation schema for ticket data
const ticketSchema = z.object({
  subject: z.string().trim().min(5, 'Subject must be at least 5 characters').max(200, 'Subject must be less than 200 characters'),
  description: z.string().trim().min(20, 'Description must be at least 20 characters').max(5000, 'Description must be less than 5000 characters'),
  priority: z.enum(['low', 'medium', 'high']),
});

interface Ticket {
  id: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface PortalTicketsProps {
  userId: string;
}

export const PortalTickets = ({ userId }: PortalTicketsProps) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [newTicket, setNewTicket] = useState({
    subject: '',
    description: '',
    priority: 'medium',
  });

  const fetchTickets = async () => {
    const { data, error } = await supabase
      .from('support_tickets')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Failed to load tickets');
    } else {
      setTickets(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (userId) {
      fetchTickets();
    }
  }, [userId]);

  const handleCreateTicket = async () => {
    // Validate ticket data
    const result = ticketSchema.safeParse(newTicket);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error('Please fix the validation errors');
      return;
    }

    setErrors({});
    setCreating(true);

    const validatedData = result.data;
    const { error } = await supabase.from('support_tickets').insert({
      user_id: userId,
      subject: validatedData.subject,
      description: validatedData.description,
      priority: validatedData.priority,
    });

    setCreating(false);

    if (error) {
      toast.error('Failed to create ticket');
    } else {
      toast.success('Ticket created successfully');
      setNewTicket({ subject: '', description: '', priority: 'medium' });
      setErrors({});
      setDialogOpen(false);
      fetchTickets();
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-500';
      case 'in_progress': return 'bg-orange-500';
      case 'closed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold">Support Tickets</h2>
          <p className="text-muted-foreground">Manage your support requests</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription>
                Describe your issue and we'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of the issue (min 5 characters)"
                  maxLength={200}
                  value={newTicket.subject}
                  onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                  className={errors.subject ? 'border-destructive' : ''}
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                <p className="text-xs text-muted-foreground">{newTicket.subject.length}/200 characters</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={newTicket.priority}
                  onValueChange={(value) => setNewTicket({ ...newTicket, priority: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide details about your issue (min 20 characters)..."
                  rows={5}
                  maxLength={5000}
                  value={newTicket.description}
                  onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                  className={errors.description ? 'border-destructive' : ''}
                />
                {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
                <p className="text-xs text-muted-foreground">{newTicket.description.length}/5000 characters</p>
              </div>
              <Button onClick={handleCreateTicket} className="w-full" disabled={creating}>
                {creating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Submit Ticket
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {tickets.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MessageSquare className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg">No tickets yet</h3>
            <p className="text-muted-foreground text-center">
              Create your first support ticket to get help from our team.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Card key={ticket.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{ticket.subject}</CardTitle>
                    <CardDescription>
                      Created {format(new Date(ticket.created_at), 'MMM d, yyyy h:mm a')}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className={`${getPriorityColor(ticket.priority)} text-white`}>
                      {ticket.priority}
                    </Badge>
                    <Badge variant="secondary" className={`${getStatusColor(ticket.status)} text-white`}>
                      {ticket.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{ticket.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
