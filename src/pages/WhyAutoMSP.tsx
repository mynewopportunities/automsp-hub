import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, XCircle, Zap, Shield, DollarSign, Clock } from 'lucide-react';

const comparisons = [
  {
    feature: 'Time to Value',
    automsp: 'Days',
    servicenow: 'Months',
    consulting: 'Months',
    highlight: true,
  },
  {
    feature: 'ServiceNow Native',
    automsp: true,
    servicenow: true,
    consulting: true,
    highlight: false,
  },
  {
    feature: 'MSP-Specific AI Models',
    automsp: true,
    servicenow: false,
    consulting: false,
    highlight: true,
  },
  {
    feature: 'No Code Changes Required',
    automsp: true,
    servicenow: false,
    consulting: false,
    highlight: false,
  },
  {
    feature: 'Predictable Pricing',
    automsp: true,
    servicenow: false,
    consulting: false,
    highlight: true,
  },
  {
    feature: 'Continuous Learning',
    automsp: true,
    servicenow: true,
    consulting: false,
    highlight: false,
  },
  {
    feature: 'Dedicated MSP Support',
    automsp: true,
    servicenow: false,
    consulting: true,
    highlight: false,
  },
];

const differentiators = [
  {
    icon: Zap,
    title: 'Purpose-Built for MSPs',
    description: 'Not a generic AI tool. AutoMSP is trained specifically on managed services workflows, ticket patterns, and SLA requirements.',
  },
  {
    icon: Clock,
    title: 'Deploy in Days, Not Months',
    description: 'No custom development or ServiceNow consulting required. Our OAuth integration gets you running fast.',
  },
  {
    icon: Shield,
    title: 'Data Never Leaves ServiceNow',
    description: 'Unlike cloud AI tools, your data stays in your environment. We process, you own.',
  },
  {
    icon: DollarSign,
    title: 'Transparent, Predictable Pricing',
    description: 'No surprise consulting fees or per-ticket charges. Simple subscription that scales with your business.',
  },
];

const WhyAutoMSP = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Why Choose <span className="text-secondary">AutoMSP</span>?
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                See how AutoMSP compares to ServiceNow's native AI, traditional consulting, and other automation tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Book a Comparison Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="lg">
                  Download One-Pager
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built Different
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AutoMSP isn't just another AI add-on. It's purpose-built for how MSPs actually work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Feature Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How AutoMSP stacks up against the alternatives
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 p-4 bg-muted/50 border-b border-border font-semibold text-sm">
                  <div className="text-muted-foreground">Feature</div>
                  <div className="text-center text-secondary">AutoMSP</div>
                  <div className="text-center text-muted-foreground">ServiceNow AI</div>
                  <div className="text-center text-muted-foreground">Consulting</div>
                </div>

                {/* Table Rows */}
                {comparisons.map((row) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 gap-4 p-4 border-b border-border last:border-0 ${
                      row.highlight ? 'bg-secondary/5' : ''
                    }`}
                  >
                    <div className="text-foreground font-medium text-sm">{row.feature}</div>
                    <div className="flex justify-center">
                      {typeof row.automsp === 'boolean' ? (
                        row.automsp ? (
                          <CheckCircle2 className="w-5 h-5 text-secondary" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/50" />
                        )
                      ) : (
                        <span className="text-sm font-semibold text-secondary">{row.automsp}</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {typeof row.servicenow === 'boolean' ? (
                        row.servicenow ? (
                          <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/50" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.servicenow}</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {typeof row.consulting === 'boolean' ? (
                        row.consulting ? (
                          <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/50" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.consulting}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See the Difference for Yourself
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Schedule a 30-minute call and we'll walk you through a side-by-side comparison with your current setup.
              </p>
              <Button variant="hero" size="xl">
                Book Your Comparison Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyAutoMSP;
