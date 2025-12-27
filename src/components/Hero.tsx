import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Now integrating with ServiceNow's AI capabilities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Intelligent Workflows for{' '}
            <span className="text-secondary">MSPs</span> on ServiceNow
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            AutoMSP automates ticket triage and routing, cutting SLA breaches and 
            manual workload without expensive consulting.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl">
              Book a 30-minute Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-primary-foreground/60 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">60% Faster Triage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-secondary/20 flex items-center justify-center">
                <span className="text-xs font-bold text-secondary">SN</span>
              </div>
              <span className="text-sm font-medium">Native ServiceNow</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview (Abstract representation) */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 rounded-2xl blur-xl" />
            
            {/* Dashboard mockup */}
            <div className="relative glass-dark p-6 rounded-2xl shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-cta/70" />
                  <div className="w-3 h-3 rounded-full bg-secondary/70" />
                </div>
                <div className="flex-1 h-8 bg-primary-foreground/5 rounded-lg" />
              </div>
              
              {/* Content grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Sidebar */}
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-10 rounded-lg ${i === 1 ? 'bg-secondary/30' : 'bg-primary-foreground/5'}`}
                    />
                  ))}
                </div>
                
                {/* Main content */}
                <div className="col-span-2 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {['Tickets Triaged', 'SLA Saved', 'Auto-Routed'].map((label, i) => (
                      <div key={label} className="bg-primary-foreground/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary mb-1">
                          {i === 0 ? '1,247' : i === 1 ? '99.2%' : '856'}
                        </div>
                        <div className="text-xs text-primary-foreground/50">{label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-32 bg-primary-foreground/5 rounded-lg flex items-end justify-around p-4 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-secondary/60 to-secondary/30 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
