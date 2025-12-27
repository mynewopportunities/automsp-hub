import { Shield, Lock, FileCheck, Server } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'SOC 2 Ready',
    description: 'Controls mapped and implemented for Type II certification',
  },
  {
    icon: Lock,
    title: 'HIPAA Compliant',
    description: 'Built with healthcare MSP requirements in mind',
  },
  {
    icon: Server,
    title: 'Data Sovereignty',
    description: 'Your data never leaves your ServiceNow environment',
  },
  {
    icon: FileCheck,
    title: 'Audit Trail',
    description: 'Complete logging of all AI decisions and actions',
  },
];

export const Security = () => {
  return (
    <section className="py-20 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Enterprise Security
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security & Compliance Built In
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              AutoMSP is designed from the ground up to meet the stringent security requirements of enterprise MSPs. We don't just check boxes—we build security into every layer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-card rounded-2xl border border-border p-8 shadow-lg">
              {/* Security badge visual */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-secondary" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-secondary-foreground text-xs font-bold">✓</span>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="space-y-3">
                {['SOC 2 Type II (In Progress)', 'HIPAA BAA Available', 'GDPR Compliant', 'ISO 27001 Aligned'].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-secondary text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
