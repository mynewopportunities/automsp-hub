import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Loader2, LayoutDashboard, Ticket, FileText, User, LogOut } from 'lucide-react';
import logo from '@/assets/automsp-logo.png';
import { PortalDashboard } from '@/components/portal/PortalDashboard';
import { PortalTickets } from '@/components/portal/PortalTickets';
import { PortalDocuments } from '@/components/portal/PortalDocuments';
import { PortalProfile } from '@/components/portal/PortalProfile';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  company_name: string | null;
  phone: string | null;
  bio: string | null;
  avatar_url: string | null;
}

const Portal = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        toast.error('Failed to load profile');
        setLoadingProfile(false);
        return;
      }

      // If profile has an avatar_url that's a storage path (not a full URL), get a signed URL
      if (data?.avatar_url && !data.avatar_url.startsWith('http')) {
        const { data: signedUrlData } = await supabase.storage
          .from('avatars')
          .createSignedUrl(data.avatar_url, 60 * 60 * 24); // 24 hour expiry
        
        if (signedUrlData?.signedUrl) {
          data.avatar_url = signedUrlData.signedUrl;
        }
      }

      setProfile(data);
      setLoadingProfile(false);
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
    navigate('/');
  };

  if (loading || loadingProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Customer Portal | AutoMSP</title>
        <meta name="description" content="Manage your support tickets, documents, and profile in the AutoMSP customer portal." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="AutoMSP" className="h-10 w-auto" />
              <span className="text-lg font-heading font-semibold">Customer Portal</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden md:block">
                {profile?.full_name || user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
              <TabsTrigger value="dashboard" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="tickets" className="gap-2">
                <Ticket className="w-4 h-4" />
                <span className="hidden sm:inline">Tickets</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Documents</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <PortalDashboard profile={profile} />
            </TabsContent>

            <TabsContent value="tickets">
              <PortalTickets userId={user?.id || ''} />
            </TabsContent>

            <TabsContent value="documents">
              <PortalDocuments userId={user?.id || ''} />
            </TabsContent>

            <TabsContent value="profile">
              <PortalProfile profile={profile} setProfile={setProfile} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </HelmetProvider>
  );
};

export default Portal;
