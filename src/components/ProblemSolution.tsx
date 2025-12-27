import { AlertTriangle, Clock, DollarSign, ArrowRight, Zap, Brain, BarChart } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Manual Ticket Triage',
    description: 'Hours lost daily categorizing and routing tickets manually',
  },
  {
    icon: Clock,
    title: 'SLA Breaches',
    description: 'Critical tickets slip through, damaging client relationships',
  },
  {
    icon: DollarSign,
    title: 'High Operational Costs',
    description: 'Expensive consulting or internal teams for basic automation',
  },
];

const solutions = [
  {
    icon: Brain,
    title: 'AI-Powered Triage',
    description: 'Instant categorization and priority assignment for every ticket',
  },
  {
    icon: Zap,
    title: 'Intelligent Routing',
    description: 'Tickets reach the right team automatically, every time',
  },
  {
    icon: BarChart,
    title: 'Measurable ROI',
    description: 'Track time saved and SLA improvements in real-time',
  },
];

export const ProblemSolution = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stop Losing Time to Manual Processes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MSPs on ServiceNow face the same challenges. AutoMSP solves them with AI that works natively in your environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              The Problem
            </div>
            
            {problems.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-destructive/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow (desktop only) */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-secondary" />
            </div>
          </div>

          {/* Arrow (mobile) */}
          <div className="flex lg:hidden justify-center py-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center rotate-90">
              <ArrowRight className="w-6 h-6 text-secondary" />
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              The AutoMSP Solution
            </div>
            
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-secondary/30 hover:shadow-glow-teal/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
