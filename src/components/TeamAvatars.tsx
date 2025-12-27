import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';

const avatars = [
  { src: avatar1, name: 'Marcus', role: 'AI Specialist', size: 'lg', delay: 0 },
  { src: avatar2, name: 'Sarah', role: 'Support Lead', size: 'md', delay: 0.2 },
  { src: avatar3, name: 'James', role: 'Tech Engineer', size: 'lg', delay: 0.4 },
  { src: avatar4, name: 'Maya', role: 'Client Success', size: 'md', delay: 0.6 },
  { src: avatar5, name: 'Kevin', role: 'Solutions Architect', size: 'sm', delay: 0.8 },
];

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
            <span className="text-primary">AI-Powered</span>{' '}
            <span className="text-white">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our virtual agents work alongside your team to deliver exceptional MSP service around the clock.
          </p>
        </div>

        {/* Avatar Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${avatar.delay}s` }}
            >
              {/* Glowing ring */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary via-[hsl(160,70%,45%)] to-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 ${
                  avatar.size === 'lg' ? 'scale-105' : avatar.size === 'md' ? 'scale-110' : 'scale-115'
                }`}
              />
              
              {/* Circular frame with border */}
              <div
                className={`relative rounded-full border-4 border-primary/50 overflow-hidden shadow-glow-green group-hover:border-primary group-hover:shadow-xl transition-all duration-300 ${
                  avatar.size === 'lg'
                    ? 'w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52'
                    : avatar.size === 'md'
                    ? 'w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44'
                    : 'w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36'
                }`}
              >
                {/* Avatar image */}
                <img
                  src={avatar.src}
                  alt={`${avatar.name} - ${avatar.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Green glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Name and role tooltip */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center whitespace-nowrap">
                <p className="text-white font-semibold text-sm">{avatar.name}</p>
                <p className="text-primary text-xs">{avatar.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-secondary/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};
