import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, BarChart3, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    id: 'ai-triage',
    icon: Brain,
    title: 'AI Ticket Triage',
    description: 'Automatically categorize, prioritize, and route every incoming ticket using advanced natural language processing.',
    features: [
      'Instant ticket categorization',
      'Priority prediction based on content',
      'Historical pattern learning',
      'Multi-language support',
    ],
    metric: '60% faster',
    metricLabel: 'triage time',
  },
  {
    id: 'intelligent-workflows',
    icon: Zap,
    title: 'Intelligent Workflows',
    description: 'Build smart automation rules that adapt to your business logic and ServiceNow configuration.',
    features: [
      'No-code workflow builder',
      'Conditional routing logic',
      'SLA-aware escalations',
      'Integration with ServiceNow modules',
    ],
    metric: '85%',
    metricLabel: 'auto-routing accuracy',
  },
  {
    id: 'compliance-sla',
    icon: BarChart3,
    title: 'Compliance & SLA Intelligence',
    description: 'Real-time dashboards and predictive analytics to keep your SLA commitments on track.',
    features: [
      'SLA breach prediction',
      'Compliance reporting',
      'Trend analysis',
      'Executive dashboards',
    ],
    metric: '99.2%',
    metricLabel: 'SLA compliance',
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Built for ServiceNow
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Solutions for MSP Excellence
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Choose where AI delivers the fastest ROI for your managed services operations.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                      <solution.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-secondary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="accent">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 to-transparent rounded-2xl blur-xl" />
                      <div className="relative bg-card rounded-2xl border border-border p-8 shadow-lg">
                        <div className="text-center">
                          <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">
                            {solution.metric}
                          </div>
                          <div className="text-muted-foreground">{solution.metricLabel}</div>
                        </div>
                        <div className="mt-8 h-32 bg-muted/50 rounded-xl flex items-end justify-around p-4 gap-2">
                          {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <div
                              key={i}
                              className="w-full bg-gradient-to-t from-secondary to-secondary/50 rounded-t"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See AutoMSP in Action?
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Book a personalized demo and discover which solutions are right for your MSP.
            </p>
            <Button variant="hero" size="xl">
              Schedule Your Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
