const innovations = [
  {
    highlight: 'Improve customer experience and agent productivity',
    text: 'using Now Assist',
  },
  {
    highlight: 'Optimize the customer service agent experience',
    text: 'for the contact center',
  },
  {
    highlight: 'Transform the lead-to-order process',
    text: 'in the front office',
  },
];

export const CustomerServiceInnovations = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,45%,10%)] via-[hsl(200,50%,12%)] to-[hsl(200,40%,8%)]" />
      
      {/* Orange glow effect top-left */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-secondary/30 to-transparent blur-3xl" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[hsl(220,40%,30%)] opacity-60" />
      <div className="absolute bottom-20 right-20 w-6 h-6 rounded-full bg-primary opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Innovations in
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              <span className="text-primary">customer</span><br />
              <span className="text-primary">service</span>
            </h2>
          </div>

          {/* Right - Innovation Cards */}
          <div className="space-y-4">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="px-6 py-4 rounded-lg bg-gradient-to-r from-[hsl(180,40%,20%)] to-[hsl(180,50%,25%)] border border-primary/30 hover:border-primary/60 transition-colors"
              >
                <p className="text-base md:text-lg">
                  <span className="text-primary font-semibold">{innovation.highlight}</span>
                  <span className="text-white"> {innovation.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
