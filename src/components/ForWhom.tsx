import { Building2, Server, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const personas = [
  {
    icon: Building2,
    title: 'MSP Owners',
    description: 'Increase margins and reduce SLA penalties with AI that handles ticket routing automatically.',
    cta: 'See Business Impact',
  },
  {
    icon: Server,
    title: 'Technical Directors',
    description: 'Native ServiceNow integration means no architecture changes. Deploy in days, not months.',
    cta: 'View Technical Details',
  },
  {
    icon: Users,
    title: 'Service Delivery Teams',
    description: 'Let AI handle the repetitive triage so your team can focus on solving real problems.',
    cta: 'Learn More',
  },
  {
    icon: Briefcase,
    title: 'ServiceNow Partners',
    description: 'Add AI automation to your service offerings and differentiate your practice.',
    cta: 'Partner With Us',
  },
];

export const ForWhom = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for MSP Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're running the business or managing the tickets, AutoMSP has you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <persona.icon className="w-7 h-7 text-secondary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">{persona.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{persona.description}</p>
              
              <Button variant="link" className="justify-start p-0 h-auto text-secondary hover:text-secondary/80">
                {persona.cta} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
