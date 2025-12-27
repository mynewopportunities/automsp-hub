const partnerLogos = [
  { name: 'NVIDIA', icon: '⊡' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'watsonx', icon: 'W' },
];

const benefits = [
  'HIGH PERFORMANCE',
  'FAST INNOVATION',
  'ACCURATE MODELS',
  'DATA PRIVACY',
];

const byoModels = [
  'OpenAI',
  'Microsoft',
  'Google',
  'watsonx',
  'Aleph Alpha',
];

export const GenAIModels = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-[hsl(200,50%,8%)] via-[hsl(200,45%,12%)] to-[hsl(200,50%,8%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left - Flexibility Statement */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              ServiceNow AI Architecture is Open
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              <span className="text-primary">This means</span><br />
              <span className="text-primary">flexibility</span><br />
              <span className="text-white">for our</span><br />
              <span className="text-white">customers</span>
            </h2>
          </div>

          {/* Center - GenAI Models Card */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold mb-1">ServiceNow</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">GenAI models</h3>
            </div>
            
            <div className="bg-[hsl(210,40%,12%)] rounded-xl p-6 border border-border/30">
              <div className="text-center mb-4">
                <p className="text-muted-foreground text-sm">servicenow.</p>
                <h4 className="text-2xl font-bold">
                  <span className="text-primary">GenAI</span>
                  <span className="text-white"> models</span>
                </h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs mb-3">Best of general purpose and domain-specific</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">ServiceNow Developed Models</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    {partnerLogos.map((logo) => (
                      <div key={logo.name} className="flex items-center gap-1 text-white text-xs">
                        <span>{logo.icon}</span>
                        <span>{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-white text-xs font-semibold mb-3">Why it matters</p>
                  <div className="space-y-1">
                    {benefits.map((benefit) => (
                      <p key={benefit} className="text-primary text-[10px] uppercase tracking-wider">{benefit}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Bring Your Own */}
          <div className="text-right">
            <p className="text-primary italic text-lg mb-4">Bring your own</p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">GenAI models</h3>
            
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded">
                OR
              </div>
            </div>
            
            <div className="space-y-3">
              {byoModels.map((model) => (
                <div key={model} className="flex items-center justify-end gap-2 text-white">
                  <span className="text-primary text-lg">◆</span>
                  <span className="font-semibold">{model}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
