import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  FileCheck,
  Bell,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BarChart
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Real-Time SLA Tracking',
    description: 'Monitor SLA compliance in real-time across all tickets. Visual dashboards show exactly where you stand at any moment.'
  },
  {
    icon: AlertTriangle,
    title: 'Proactive Breach Prevention',
    description: 'AI predicts potential SLA breaches before they happen, automatically escalating or reassigning tickets to prevent violations.'
  },
  {
    icon: Bell,
    title: 'Smart Alerting',
    description: 'Configurable alerts notify the right people at the right time. No more missed deadlines or surprise escalations.'
  },
  {
    icon: FileCheck,
    title: 'Automated Compliance Reports',
    description: 'Generate compliance reports automatically for audits, client reviews, and internal metrics. Export to PDF, Excel, or integrate with BI tools.'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Deep insights into SLA performance by client, technician, ticket type, and time period. Identify bottlenecks and optimize processes.'
  },
  {
    icon: TrendingUp,
    title: 'Trend Analysis',
    description: 'Historical trend analysis helps you understand patterns, predict busy periods, and staff accordingly.'
  }
];

const complianceStandards = [
  { name: 'SOC 2 Type II', description: 'Security, availability, and confidentiality controls' },
  { name: 'HIPAA', description: 'Healthcare data protection compliance' },
  { name: 'GDPR', description: 'European data privacy requirements' },
  { name: 'ISO 27001', description: 'Information security management' },
  { name: 'PCI DSS', description: 'Payment card data security' },
  { name: 'NIST', description: 'Cybersecurity framework alignment' }
];

const metrics = [
  { value: '99.7%', label: 'SLA Compliance Rate', description: 'Average across AutoMSP customers' },
  { value: '85%', label: 'Breach Reduction', description: 'Within first 90 days' },
  { value: '4 hours', label: 'Avg. Response Time', description: 'Down from 12+ hours' }
];

const ComplianceSLA = () => {
  return (
    <>
      <Helmet>
        <title>SLA Compliance & Management for MSPs | AutoMSP</title>
        <meta name="description" content="Achieve 99%+ SLA compliance with AI-powered monitoring and proactive breach prevention. Automated reporting for SOC 2, HIPAA, and GDPR compliance." />
        <link rel="canonical" href="https://automsp.us/solutions/compliance-sla" />
        <meta property="og:title" content="SLA Compliance & Management for MSPs | AutoMSP" />
        <meta property="og:description" content="99%+ SLA compliance with proactive breach prevention and automated audit reporting." />
        <meta property="og:url" content="https://automsp.us/solutions/compliance-sla" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "AutoMSP SLA Compliance",
          description: "Real-time SLA tracking, breach prevention, and automated compliance reporting for ServiceNow MSPs.",
          brand: { "@type": "Brand", name: "AutoMSP" },
          url: "https://automsp.us/solutions/compliance-sla"
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
                  <ShieldCheck className="w-4 h-4" />
                  Compliance & SLA Management
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Never Miss an SLA{' '}
                  <span className="text-primary">Again</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  AI-powered SLA monitoring that predicts and prevents breaches before they happen. Stay compliant, keep clients happy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/resources">Download Whitepaper</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="py-12 border-b border-border">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold text-foreground mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Complete SLA Visibility
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From real-time monitoring to predictive analytics, everything you need to maintain perfect SLA compliance.
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

          {/* Compliance Standards */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Built for Compliance
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    AutoMSP helps you meet and maintain compliance with major industry standards.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">{standard.name}</div>
                        <div className="text-sm text-muted-foreground">{standard.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Proactive, Not Reactive
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our AI doesn't just track SLAs—it prevents breaches before they happen.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Continuous Monitoring</h3>
                      <p className="text-muted-foreground">Every ticket is tracked against SLA thresholds in real-time, with automatic priority adjustments.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Predictive Analysis</h3>
                      <p className="text-muted-foreground">AI analyzes ticket complexity, technician workload, and historical data to predict potential breaches.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Automatic Intervention</h3>
                      <p className="text-muted-foreground">At-risk tickets are automatically escalated, reassigned, or flagged for immediate attention.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Compliance Reporting</h3>
                      <p className="text-muted-foreground">Generate audit-ready reports with a single click. Full history and evidence trail included.</p>
                    </div>
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
                  Achieve Perfect SLA Compliance
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Join MSPs who've eliminated SLA breaches and improved client retention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact">Schedule Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="lg">
                    <Link to="/pricing">View Pricing</Link>
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

export default ComplianceSLA;
