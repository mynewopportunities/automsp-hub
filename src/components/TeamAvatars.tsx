import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const teamMembers = [
  { src: avatar1, name: 'Marcus Chen', role: 'Helpdesk Manager', department: 'IT Support' },
  { src: avatar2, name: 'Sarah Mitchell', role: 'L2 Support Engineer', department: 'IT Support' },
  { src: avatar3, name: 'James Rodriguez', role: 'Network Administrator', department: 'Operations' },
  { src: avatar4, name: 'Maya Patel', role: 'Operations Director', department: 'Operations' },
  { src: avatar5, name: 'Kevin Thompson', role: 'Solutions Architect', department: 'Operations' },
  { src: avatar6, name: 'Emily Watson', role: 'Marketing Manager', department: 'Sales & Marketing' },
  { src: avatar7, name: 'David Kim', role: 'Sales Director', department: 'Sales & Marketing' },
  { src: avatar8, name: 'Rachel Green', role: 'Customer Success Lead', department: 'Sales & Marketing' },
  { src: avatar9, name: 'Michael Brooks', role: 'Technical Support Lead', department: 'IT Support' },
];

const departmentColors: Record<string, string> = {
  'IT Support': 'from-blue-500 to-cyan-400',
  'Operations': 'from-primary to-emerald-400',
  'Sales & Marketing': 'from-purple-500 to-pink-400',
};

export const TeamAvatars = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[hsl(200,50%,8%)] to-[hsl(200,45%,12%)]">
      {/* Animated wave background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-40">
        <svg viewBox="0 0 1200 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            d="M0,60 Q150,20 300,50 T600,40 T900,60 T1200,30 L1200,100 L0,100 Z"
            fill="url(#avatarWaveGradient)"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="avatarWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(120, 60%, 35%)" />
              <stop offset="50%" stopColor="hsl(150, 60%, 40%)" />
              <stop offset="100%" stopColor="hsl(180, 60%, 35%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            <span className="text-white">Meet Our</span>{' '}
            <span className="text-primary">Expert</span>{' '}
            <span className="text-white">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real IT professionals powering exceptional service across Helpdesk, Operations, and Sales & Marketing.
          </p>
        </div>

        {/* Team Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group relative p-4">
                  {/* Glowing ring based on department */}
                  <div
                    className={`absolute inset-4 rounded-full bg-gradient-to-r ${departmentColors[member.department]} blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                  />
                  
                  {/* Avatar container */}
                  <div className="relative rounded-full border-4 border-primary/30 overflow-hidden shadow-lg group-hover:border-primary/60 group-hover:shadow-xl transition-all duration-300 w-40 h-40 md:w-48 md:h-48 mx-auto">
                    <img
                      src={member.src}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info card */}
                  <div className="mt-6 text-center">
                    <p className="text-white font-semibold text-lg">{member.name}</p>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${departmentColors[member.department]} text-white`}>
                      {member.department}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-primary/20 border-primary/40 text-white hover:bg-primary/40" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-primary/20 border-primary/40 text-white hover:bg-primary/40" />
        </Carousel>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-secondary/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};
