import { TrendingUp, Clock, Target, Shield } from 'lucide-react';

const metrics = [
  {
    icon: Clock,
    value: '60%',
    label: 'Faster Ticket Triage',
    description: 'Average reduction in time-to-assign',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Platform Uptime',
    description: 'Enterprise-grade reliability',
  },
  {
    icon: Target,
    value: '85%',
    label: 'Auto-Routing Accuracy',
    description: 'First-attempt correct assignment',
  },
  {
    icon: Shield,
    value: '0',
    label: 'Data Exposure',
    description: 'All data stays in ServiceNow',
  },
];

export const Metrics = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Results That <span className="text-secondary">Matter</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            AutoMSP delivers measurable improvements from day one
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-secondary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                <metric.icon className="w-7 h-7 text-secondary" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {metric.value}
              </div>
              
              <div className="font-semibold mb-2">{metric.label}</div>
              
              <p className="text-sm text-primary-foreground/60">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
