import { Sparkles } from 'lucide-react';

const phases = [
  {
    period: 'H2 2023',
    items: [
      'IT Service Management',
      'Customer Service Management',
      'Industry Products',
      'Field Service Management',
      'HR Service Delivery',
      'Creator',
    ],
  },
  {
    period: 'H1 2024',
    items: [
      'IT Operations Management',
      'Strategic Portfolio Management',
    ],
  },
  {
    period: 'H2 2024',
    items: [
      'Security Operations',
      'Contract Lifecycle Management',
      'Procurement',
      'Supplier Operations',
    ],
  },
];

export const NowAssistRoadmap = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,40%,8%)] to-[hsl(200,50%,10%)]">
      {/* Sunset gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-transparent via-orange-500/30 to-secondary/20 blur-xl" />
      </div>
      
      {/* Green wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-50">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="text-primary">Now Assist</span>
              <span className="text-white"> Roadmap</span>
            </h2>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, phaseIndex) => (
            <div key={phase.period} className="space-y-4">
              {phase.items.map((item, itemIndex) => (
                <div
                  key={item}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary/80 to-[hsl(180,60%,45%)] text-primary-foreground font-semibold text-center text-sm md:text-base shadow-md hover:shadow-glow-green transition-shadow"
                >
                  {item}
                </div>
              ))}
              <p className="text-center text-muted-foreground uppercase tracking-widest text-sm mt-6">
                {phase.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
