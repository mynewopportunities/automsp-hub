import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, FileText, Clock, CheckCircle } from 'lucide-react';
import type { Profile } from '@/pages/Portal';

interface PortalDashboardProps {
  profile: Profile | null;
}

export const PortalDashboard = ({ profile }: PortalDashboardProps) => {
  const [stats, setStats] = useState({
    openTickets: 0,
    closedTickets: 0,
    documents: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!profile?.id) return;

      const [openRes, closedRes, docsRes] = await Promise.all([
        supabase
          .from('support_tickets')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', profile.id)
          .eq('status', 'open'),
        supabase
          .from('support_tickets')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', profile.id)
          .eq('status', 'closed'),
        supabase
          .from('documents')
          .select('id', { count: 'exact', head: true })
          .or(`user_id.eq.${profile.id},is_public.eq.true`),
      ]);

      setStats({
        openTickets: openRes.count || 0,
        closedTickets: closedRes.count || 0,
        documents: docsRes.count || 0,
      });
    };

    fetchStats();
  }, [profile?.id]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold">
          Welcome back, {profile?.full_name || 'Customer'}!
        </h2>
        <p className="text-muted-foreground">
          Here's an overview of your account activity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.openTickets}</div>
            <p className="text-xs text-muted-foreground">Awaiting response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Tickets</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.closedTickets}</div>
            <p className="text-xs text-muted-foreground">Successfully closed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
            <Ticket className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.openTickets + stats.closedTickets}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.documents}</div>
            <p className="text-xs text-muted-foreground">Available files</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks you can perform</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <Ticket className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold">Create Ticket</h3>
            <p className="text-sm text-muted-foreground">Submit a new support request</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <FileText className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold">View Documents</h3>
            <p className="text-sm text-muted-foreground">Access shared resources</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <Clock className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold">Check Status</h3>
            <p className="text-sm text-muted-foreground">View ticket updates</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
