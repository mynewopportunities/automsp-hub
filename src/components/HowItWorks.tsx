import { Upload, Cpu, Send, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Connect Your ServiceNow',
    description: 'Secure OAuth integration with your existing ServiceNow instance. No data leaves your environment.',
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Learns Your Workflows',
    description: 'Our models analyze your historical tickets and routing patterns to understand your unique needs.',
    color: 'from-cta/20 to-cta/5',
  },
  {
    number: '03',
    icon: Send,
    title: 'Automatic Triage & Routing',
    description: 'Every new ticket is instantly categorized, prioritized, and routed to the right team.',
    color: 'from-secondary/20 to-secondary/5',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Simple Setup
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How AutoMSP Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up and running in days, not months. No code changes to your ServiceNow instance required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative z-10 bg-card rounded-2xl p-8 border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-secondary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
