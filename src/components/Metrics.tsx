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
    <section className="py-20 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="decoration-blob w-[500px] h-[500px] bg-primary top-0 left-1/4" />
        <div className="decoration-blob w-[400px] h-[400px] bg-secondary bottom-0 right-1/4 opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title text-primary mb-4 block">Our Results</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Results That <span className="text-primary">Matter</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            AutoMSP delivers measurable improvements from day one
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className={`text-5xl md:text-6xl font-bold mb-2 font-heading ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                {metric.value}
              </div>
              
              <div className="font-semibold mb-2 font-heading">{metric.label}</div>
              
              <p className="text-sm text-background/60">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};