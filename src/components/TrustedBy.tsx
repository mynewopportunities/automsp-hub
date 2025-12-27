const logos = [
  { name: 'ServiceNow', width: 'w-32' },
  { name: 'Microsoft', width: 'w-28' },
  { name: 'AWS', width: 'w-16' },
  { name: 'NVIDIA', width: 'w-24' },
  { name: 'Azure', width: 'w-24' },
];

export const TrustedBy = () => {
  return (
    <section className="py-16 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by MSPs and Built for ServiceNow
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-8 bg-muted-foreground/20 rounded flex items-center justify-center`}
            >
              <span className="text-xs font-semibold text-muted-foreground/60">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
