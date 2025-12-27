import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar9 from '@/assets/avatar-9.png';

const heroAvatars = [
  { src: avatar1, size: 'lg', top: '5%', right: '5%', delay: 0 },
  { src: avatar2, size: 'md', top: '15%', right: '25%', delay: 0.2 },
  { src: avatar3, size: 'sm', top: '35%', right: '8%', delay: 0.4 },
  { src: avatar6, size: 'md', top: '55%', right: '20%', delay: 0.6 },
  { src: avatar9, size: 'lg', top: '65%', right: '2%', delay: 0.8 },
];

// Particle component for animated background
const Particle = ({ delay, duration, size, left, top }: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
}) => (
  <div
    className="absolute rounded-full bg-primary/40 animate-pulse"
    style={{
      width: size,
      height: size,
      left,
      top,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px hsl(var(--primary) / 0.3)`,
    }}
  />
);

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 6,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));
};

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
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-[hsl(160,70%,45%)] to-primary opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500" />
      <div className={`relative rounded-full border-3 border-primary/60 overflow-hidden shadow-glow-green ${sizeClasses[size]}`}>
        <img src={src} alt="AI Team Member" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export const Hero = () => {
  const [particles] = useState(() => generateParticles(30));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,60%,6%)] via-[hsl(180,50%,8%)] to-[hsl(160,40%,6%)]" />
      
      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-secondary/15 via-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[hsl(160,60%,15%)]/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(120, 60%, 40%) 0%, transparent 70%)',
            top: '10%',
            right: '-10%',
            animation: 'pulse-slow 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(30, 80%, 50%) 0%, transparent 70%)',
            bottom: '10%',
            left: '-5%',
            animation: 'pulse-slow 10s ease-in-out infinite 2s',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(160, 70%, 45%) 0%, transparent 70%)',
            top: '40%',
            left: '20%',
            animation: 'pulse-slow 6s ease-in-out infinite 1s',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `linear-gradient(rgba(87,179,62,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(87,179,62,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Flowing green waves */}
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-64 opacity-40"
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(120, 60%, 35%)" />
            <stop offset="50%" stopColor="hsl(150, 70%, 45%)" />
            <stop offset="100%" stopColor="hsl(180, 60%, 40%)" />
          </linearGradient>
          <linearGradient id="heroWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(140, 60%, 40%)" />
            <stop offset="100%" stopColor="hsl(160, 70%, 50%)" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 Q200,40 400,90 T800,60 T1200,100 L1200,200 L0,200 Z"
          fill="url(#heroWaveGradient1)"
          opacity="0.6"
        >
          <animate 
            attributeName="d" 
            dur="8s" 
            repeatCount="indefinite"
            values="
              M0,80 Q200,40 400,90 T800,60 T1200,100 L1200,200 L0,200 Z;
              M0,90 Q200,60 400,70 T800,90 T1200,80 L1200,200 L0,200 Z;
              M0,80 Q200,40 400,90 T800,60 T1200,100 L1200,200 L0,200 Z
            "
          />
        </path>
        <path
          d="M0,120 Q300,80 600,110 T1200,90 L1200,200 L0,200 Z"
          fill="url(#heroWaveGradient2)"
          opacity="0.4"
        >
          <animate 
            attributeName="d" 
            dur="10s" 
            repeatCount="indefinite"
            values="
              M0,120 Q300,80 600,110 T1200,90 L1200,200 L0,200 Z;
              M0,100 Q300,120 600,90 T1200,110 L1200,200 L0,200 Z;
              M0,120 Q300,80 600,110 T1200,90 L1200,200 L0,200 Z
            "
          />
        </path>
        <path
          d="M0,150 Q400,130 800,160 T1200,140 L1200,200 L0,200 Z"
          fill="url(#heroWaveGradient1)"
          opacity="0.3"
        >
          <animate 
            attributeName="d" 
            dur="12s" 
            repeatCount="indefinite"
            values="
              M0,150 Q400,130 800,160 T1200,140 L1200,200 L0,200 Z;
              M0,140 Q400,160 800,130 T1200,150 L1200,200 L0,200 Z;
              M0,150 Q400,130 800,160 T1200,140 L1200,200 L0,200 Z
            "
          />
        </path>
      </svg>

      {/* Scanline effect for tech feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6 animate-fade-in-up shadow-glow-green">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-white/90 font-heading">
                Now integrating with ServiceNow AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200 font-heading">
              Intelligent Workflows for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-secondary">MSPs</span> on ServiceNow
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8 animate-fade-in-up animation-delay-400">
              AutoMSP automates ticket triage and routing, cutting SLA breaches and 
              manual workload without expensive consulting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-600">
              <Button variant="cta" size="lg" className="shadow-glow-green">
                Book a 30-minute Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Play className="w-5 h-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-white/60 animate-fade-in-up animation-delay-800">
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
              className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
              viewBox="0 0 400 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="connectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(120, 60%, 45%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(160, 70%, 50%)" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M350,50 Q250,150 300,250 Q350,350 280,450 Q200,550 350,600"
                stroke="url(#connectGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
              >
                <animate 
                  attributeName="d" 
                  dur="6s" 
                  repeatCount="indefinite"
                  values="
                    M350,50 Q250,150 300,250 Q350,350 280,450 Q200,550 350,600;
                    M350,50 Q280,150 320,250 Q380,350 300,450 Q220,550 350,600;
                    M350,50 Q250,150 300,250 Q350,350 280,450 Q200,550 350,600
                  "
                />
              </path>
            </svg>

            {/* Floating particles around avatars */}
            <div className="absolute top-[20%] right-[40%] w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute top-[45%] right-[35%] w-2 h-2 rounded-full bg-secondary animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            <div className="absolute top-[70%] right-[45%] w-4 h-4 rounded-full bg-primary/60 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};
