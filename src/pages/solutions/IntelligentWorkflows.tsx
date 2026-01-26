import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  Bot, 
  GitBranch, 
  Repeat, 
  Settings,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const workflows = [
  {
    icon: Bot,
    title: 'Automated Ticket Resolution',
    description: 'Common issues like password resets, permission requests, and software installations are resolved automatically without human intervention.'
  },
  {
    icon: GitBranch,
    title: 'Dynamic Escalation Paths',
    description: 'AI determines the optimal escalation path based on issue complexity, technician expertise, and current workload distribution.'
  },
  {
    icon: Repeat,
    title: 'Self-Healing Workflows',
    description: 'Workflows that detect and recover from failures automatically, ensuring continuous operation without manual intervention.'
  },
  {
    icon: Settings,
    title: 'Custom Automation Rules',
    description: 'Build custom automation rules with a visual workflow designer. No coding required—just drag, drop, and deploy.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Maintenance',
    description: 'AI predicts potential issues before they become tickets, enabling proactive maintenance and reducing incident volume.'
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Responses',
    description: 'Generate contextual response suggestions for technicians, reducing resolution time and ensuring consistent communication.'
  }
];

const useCases = [
  {
    title: 'Password Reset Automation',
    description: 'Automatically verify user identity and reset passwords across Active Directory, Office 365, and other systems.',
    savings: '15 min → 30 sec'
  },
  {
    title: 'Software Deployment',
    description: 'Auto-approve and deploy approved software requests without technician involvement.',
    savings: '2 hours → 5 min'
  },
  {
    title: 'Onboarding Workflows',
    description: 'Automated provisioning of accounts, permissions, and hardware for new employees.',
    savings: '1 day → 1 hour'
  },
  {
    title: 'Alert Correlation',
    description: 'Correlate related alerts into single incidents, reducing noise and duplicate tickets.',
    savings: '80% reduction'
  }
];

const IntelligentWorkflows = () => {
  return (
    <>
      <Helmet>
        <title>Intelligent Workflows for ServiceNow | MSP Automation | AutoMSP</title>
        <meta name="description" content="Build intelligent, self-healing workflows for your MSP. Automate ticket resolution, escalations, and routine tasks with AI-powered ServiceNow automation." />
        <link rel="canonical" href="https://automsp.us/solutions/intelligent-workflows" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/5 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                  <Workflow className="w-4 h-4" />
                  Workflow Automation
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Workflows That{' '}
                  <span className="text-secondary">Think for Themselves</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Build intelligent automation that adapts, learns, and self-corrects. Free your team from repetitive tasks and focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/contact">See It In Action</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/resources">View Resources</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Types */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Automation That Scales With You
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From simple task automation to complex multi-step workflows, AutoMSP handles it all.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {workflows.map((workflow, index) => (
                  <Card key={index} className="border-border hover:border-secondary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                        <workflow.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {workflow.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {workflow.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Real-World Impact
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how intelligent workflows transform everyday MSP operations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {useCase.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{useCase.savings}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Integration Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Native ServiceNow Integration
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  AutoMSP integrates seamlessly with your existing ServiceNow instance. No rip-and-replace required—enhance what you already have.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-muted/50">
                    <div className="text-3xl font-bold text-foreground mb-2">5 min</div>
                    <div className="text-sm text-muted-foreground">Average setup time</div>
                  </div>
                  <div className="p-6 rounded-xl bg-muted/50">
                    <div className="text-3xl font-bold text-foreground mb-2">Zero</div>
                    <div className="text-sm text-muted-foreground">Code changes required</div>
                  </div>
                  <div className="p-6 rounded-xl bg-muted/50">
                    <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">API compatibility</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Automating Today
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8">
                  Join MSPs who've eliminated hours of manual work with intelligent workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                    <Link to="/contact">Request Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                    <Link to="/pricing">See Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IntelligentWorkflows;
