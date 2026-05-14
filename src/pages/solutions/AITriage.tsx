import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  Clock, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Natural Language Understanding',
    description: 'Our AI understands ticket context, urgency, and technical complexity using advanced NLP models trained on millions of IT support tickets.'
  },
  {
    icon: Target,
    title: 'Smart Categorization',
    description: 'Automatically classify tickets by type, priority, and required expertise with 95%+ accuracy, eliminating manual sorting.'
  },
  {
    icon: Zap,
    title: 'Instant Routing',
    description: 'Route tickets to the right technician or team in seconds, not hours. Match based on skills, availability, and workload.'
  },
  {
    icon: Clock,
    title: 'Priority Prediction',
    description: 'AI predicts true priority based on business impact, SLA requirements, and historical patterns—not just user-assigned urgency.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'The system improves with every ticket, learning from technician corrections and resolution patterns.'
  },
  {
    icon: Shield,
    title: 'Escalation Prevention',
    description: 'Identify potential escalations before they happen and proactively assign senior resources.'
  }
];

const benefits = [
  '65% reduction in ticket triage time',
  '40% faster first response times',
  '25% improvement in first-call resolution',
  '90% reduction in mis-routed tickets',
  'Consistent 24/7 triage coverage',
  'Reduced technician burnout'
];

const AITriage = () => {
  return (
    <>
      <Helmet>
        <title>AI Ticket Triage for ServiceNow MSPs | AutoMSP</title>
        <meta name="description" content="Automate ticket triage with AI. Reduce response times by 65% with intelligent categorization, priority prediction, and smart routing for ServiceNow MSPs." />
        <link rel="canonical" href="https://automsp.us/solutions/ai-triage" />
        <meta property="og:title" content="AI Ticket Triage for ServiceNow MSPs | AutoMSP" />
        <meta property="og:description" content="Automate ticket triage with AI. 65% faster response, smart routing, native ServiceNow integration." />
        <meta property="og:url" content="https://automsp.us/solutions/ai-triage" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "AutoMSP AI Ticket Triage",
          description: "AI-powered ticket triage, categorization, and routing for ServiceNow MSPs.",
          brand: { "@type": "Brand", name: "AutoMSP" },
          url: "https://automsp.us/solutions/ai-triage"
        })}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  AI-Powered Automation
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  AI Ticket Triage That{' '}
                  <span className="text-primary">Actually Works</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Stop wasting hours manually sorting tickets. Our AI understands context, predicts priority, and routes to the right technician—automatically.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact">Get a Demo</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Intelligent Triage, Zero Manual Effort
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our AI analyzes every ticket in real-time, making decisions in milliseconds that would take humans minutes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <Card key={index} className="border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Results You Can Measure
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    MSPs using AutoMSP's AI triage see immediate improvements in operational efficiency and customer satisfaction.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">65%</div>
                    <div className="text-xl font-semibold text-foreground mb-4">
                      Faster Triage Time
                    </div>
                    <p className="text-muted-foreground">
                      Average improvement seen within the first 30 days of deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Automate Your Ticket Triage?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  See how AutoMSP can transform your ServiceNow operations in a personalized demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact">Schedule Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="lg">
                    <a href="https://automspuskg.lovable.app" target="_blank" rel="noopener noreferrer">
                      Try Live Demo
                    </a>
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

export default AITriage;
