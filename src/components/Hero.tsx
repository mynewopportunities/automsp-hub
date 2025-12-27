import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap, Play } from 'lucide-react';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';

const heroAvatars = [
  { src: avatar1, size: 'lg', top: '5%', right: '5%', delay: 0 },
  { src: avatar2, size: 'md', top: '15%', right: '25%', delay: 0.2 },
  { src: avatar3, size: 'sm', top: '35%', right: '8%', delay: 0.4 },
  { src: avatar6, size: 'md', top: '55%', right: '20%', delay: 0.6 },
  { src: avatar9, size: 'lg', top: '65%', right: '2%', delay: 0.8 },
];

const FloatingAvatar = ({ src, size, top, right, delay }: { 
  src: string; 
  size: 'sm' | 'md' | 'lg'; 
  top: string; 
  right: string;
  delay: number;
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16 md:w-20 md:h-20',
    md: 'w-20 h-20 md:w-28 md:h-28',
    lg: 'w-24 h-24 md:w-36 md:h-36',
  };

  return (
    <div 
      className="absolute group animate-fade-in"
      style={{ 
        top, 
        right, 
        animationDelay: `${delay}s`,
        animation: `float 6s ease-in-out infinite ${delay}s`
      }}
    >
      {/* Outer glow ring */}
      <div className={`absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-[hsl(160,70%,45%)] to-primary opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500`} />
      
      {/* Avatar container */}
      <div className={`relative rounded-full border-3 border-primary/60 overflow-hidden shadow-glow-green ${sizeClasses[size]}`}>
        <img 
          src={src} 
          alt="AI Team Member" 
          className="w-full h-full object-cover"
        />
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="decoration-blob w-[600px] h-[600px] bg-primary top-0 -right-48 animate-pulse-slow" />
        <div className="decoration-blob w-[400px] h-[400px] bg-secondary bottom-20 -left-32 animate-pulse-slow animation-delay-400" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Flowing green wave SVG */}
        <svg 
          className="absolute bottom-0 left-0 right-0 w-full h-48 opacity-30"
          viewBox="0 0 1200 200" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(120, 60%, 35%)" />
              <stop offset="50%" stopColor="hsl(150, 70%, 45%)" />
              <stop offset="100%" stopColor="hsl(180, 60%, 40%)" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q200,50 400,100 T800,80 T1200,120 L1200,200 L0,200 Z"
            fill="url(#heroWaveGradient)"
            className="animate-pulse"
          />
          <path
            d="M0,140 Q300,90 600,130 T1200,100 L1200,200 L0,200 Z"
            fill="url(#heroWaveGradient)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary-foreground/90 font-heading">
                Now integrating with ServiceNow AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200 font-heading">
              Intelligent Workflows for{' '}
              <span className="text-secondary">MSPs</span> on ServiceNow
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 animate-fade-in-up animation-delay-400">
              AutoMSP automates ticket triage and routing, cutting SLA breaches and 
              manual workload without expensive consulting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-600">
              <Button variant="cta" size="lg">
                Book a 30-minute Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Play className="w-5 h-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-primary-foreground/60 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">SOC 2 Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">60% Faster Triage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-primary/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">SN</span>
                </div>
                <span className="text-sm font-medium">Native ServiceNow</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Avatar Collage */}
          <div className="relative h-[500px] md:h-[600px] hidden lg:block">
            {/* Floating avatars */}
            {heroAvatars.map((avatar, index) => (
              <FloatingAvatar
                key={index}
                src={avatar.src}
                size={avatar.size as 'sm' | 'md' | 'lg'}
                top={avatar.top}
                right={avatar.right}
                delay={avatar.delay}
              />
            ))}

            {/* Connecting wave lines */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              viewBox="0 0 400 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="connectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(120, 60%, 45%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(160, 70%, 50%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M350,50 Q250,150 300,250 Q350,350 280,450 Q200,550 350,600"
                stroke="url(#connectGradient)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M380,100 Q300,200 350,300 Q400,400 320,500"
                stroke="url(#connectGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
            </svg>

            {/* Floating decorative dots */}
            <div className="absolute top-[20%] right-[40%] w-3 h-3 rounded-full bg-primary/60 animate-pulse" />
            <div className="absolute top-[45%] right-[35%] w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[70%] right-[45%] w-4 h-4 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
};
