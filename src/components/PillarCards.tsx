import { Sparkles } from 'lucide-react';

const pillars = [
  { number: '1', title: 'Platform\ncore', accent: false },
  { number: '2', title: 'Service\nmanagement', accent: false },
  { number: '3', title: 'Employee\nexperience', accent: true },
  { number: '4', title: 'Customer\nservice', accent: true },
  { number: '5', title: 'Generative\nAI', accent: true, hasSparkle: true },
];

export const PillarCards = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,50%,12%)] to-[hsl(200,40%,8%)]">
      {/* Sunset background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-48 bg-gradient-to-b from-secondary/40 via-orange-500/30 to-transparent" />
      </div>
      
      {/* Green wave decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-40">
        <svg viewBox="0 0 1200 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path 
            d="M0,50 Q150,0 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z" 
            fill="url(#waveGradient)" 
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(120, 60%, 40%)" />
              <stop offset="50%" stopColor="hsl(150, 60%, 45%)" />
              <stop offset="100%" stopColor="hsl(180, 60%, 40%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card with dashed border */}
              <div className="border-2 border-dashed border-secondary/40 rounded-lg p-6 md:p-8 text-center hover:border-secondary/70 transition-colors">
                {/* Large number */}
                <div className={`text-5xl md:text-7xl font-bold mb-4 font-heading ${
                  pillar.accent ? 'text-primary' : 'text-secondary'
                }`}>
                  {pillar.number}
                  {pillar.hasSparkle && (
                    <Sparkles className="inline-block w-4 h-4 text-secondary ml-1 -mt-8" />
                  )}
                </div>
                
                {/* Title */}
                <div className="text-white font-semibold text-sm md:text-base whitespace-pre-line leading-tight">
                  {pillar.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
