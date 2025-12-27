export const IntelligentWorkflows = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background with sunset effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,40%,10%)] via-[hsl(30,50%,15%)] to-[hsl(200,50%,8%)]" />
      
      {/* Sunset glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-secondary/30 via-orange-500/20 to-transparent" />
      
      {/* Green wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1200 100" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,80 Q200,20 400,60 T800,40 T1200,70 L1200,100 L0,100 Z" 
            fill="url(#waveGrad2)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(120, 60%, 35%)" />
              <stop offset="100%" stopColor="hsl(160, 60%, 40%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-[hsl(160,70%,45%)] text-primary-foreground font-semibold mb-8">
            ServiceNow AI strategy
          </div>
          
          {/* Main heading */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading tracking-wide uppercase">
            Intelligent Workflows
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/80 italic">
            in the flow of work
          </p>
        </div>
      </div>
    </section>
  );
};
