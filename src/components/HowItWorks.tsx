import { Upload, Cpu, Send, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Connect Your ServiceNow',
    description: 'Secure OAuth integration with your existing ServiceNow instance. No data leaves your environment.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Learns Your Workflows',
    description: 'Our models analyze your historical tickets and routing patterns to understand your unique needs.',
  },
  {
    number: '03',
    icon: Send,
    title: 'Automatic Triage & Routing',
    description: 'Every new ticket is instantly categorized, prioritized, and routed to the right team.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-title mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Get Started in <span className="text-secondary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up and running in days, not months. No code changes to your ServiceNow instance required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 z-0" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              <div className="relative z-10 bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                {/* Step number */}
                <div className={`absolute -top-4 left-8 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg font-heading ${
                  index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mt-6 group-hover:scale-110 transition-transform duration-300 ${
                  index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <step.icon className={`w-10 h-10 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom feature */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Average deployment time: 5 business days</span>
          </div>
        </div>
      </div>
    </section>
  );
};