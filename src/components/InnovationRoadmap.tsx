import { Sparkles } from 'lucide-react';

const milestones = [
  { title: 'Code Generation', date: 'SEP 2023', position: 15 },
  { title: 'Flow Generation', date: 'NOV 2023', position: 30 },
  { title: 'Playbook Generation\nApp Generation\nCatalog Generation', date: 'MAY 2024', position: 50, current: true },
  { title: 'Analytics Generation', date: 'AUG 2024', position: 70 },
  { title: 'Spoke Generation', date: 'NOV 2024', position: 90 },
];

export const InnovationRoadmap = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[hsl(200,50%,8%)] to-[hsl(200,50%,12%)] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
            Generation
          </h2>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-[hsl(160,70%,45%)] text-primary-foreground font-semibold">
            Innovation roadmap
          </div>
        </div>

        {/* Roadmap Line */}
        <div className="relative h-64 md:h-80">
          {/* Gradient Line */}
          <div className="absolute bottom-20 left-0 right-0 h-3 bg-gradient-to-r from-primary via-[hsl(160,70%,50%)] to-[hsl(180,70%,50%)] rounded-full shadow-glow-green" />
          
          {/* "We Are Here" Marker */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">We Are Here</span>
            <div className="w-0.5 h-8 bg-muted-foreground" />
          </div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="absolute"
              style={{ left: `${milestone.position}%`, bottom: '5rem' }}
            >
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full ${milestone.current ? 'bg-white' : 'bg-foreground/60'} -translate-x-1/2`} />
              
              {/* Content - alternating above/below */}
              <div className={`absolute ${index % 2 === 0 ? '-top-24' : 'top-8'} -translate-x-1/2 text-center w-32`}>
                <div className={`text-sm font-bold whitespace-pre-line ${milestone.current ? 'text-primary' : 'text-white'}`}>
                  {milestone.title}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                  {milestone.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
