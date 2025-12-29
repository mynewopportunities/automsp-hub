import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Target, Users, Lightbulb, ArrowRight, Linkedin } from 'lucide-react';
import moizPhoto from '@/assets/moiz-photo.jpg';
import servicenowLogo from '@/assets/logos/servicenow.svg';
import microsoftLogo from '@/assets/logos/microsoft.svg';
import awsLogo from '@/assets/logos/aws.svg';
import nvidiaLogo from '@/assets/logos/nvidia.svg';

const partners = [
  { name: 'ServiceNow', logo: servicenowLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'NVIDIA', logo: nvidiaLogo },
];

const values = [
  {
    icon: Target,
    title: 'MSP-First',
    description: 'Everything we build is designed specifically for the unique challenges of managed service providers.',
  },
  {
    icon: Users,
    title: 'Customer Obsessed',
    description: 'We measure our success by the results our customers achieve, not by features shipped.',
  },
  {
    icon: Lightbulb,
    title: 'Continuously Learning',
    description: 'Just like our AI, we never stop learning and improving based on real-world feedback.',
  },
];

const team = [
  {
    name: 'Moiz Contractor',
    role: 'Founder',
    bio: 'ServiceNow Enthusiast with 15+ years in Enterprise IT.',
    image: moizPhoto,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Building the Future of MSP Operations
              </h1>
              <p className="text-lg text-primary-foreground/80">
                AutoMSP was founded by MSP veterans and AI experts who saw a better way to handle the growing complexity of managed services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    We believe MSPs shouldn't have to choose between delivering exceptional service and managing operational complexity.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our mission is to give every MSP access to enterprise-grade AI automation, enabling them to focus on what matters most: solving their customers' problems.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="text-5xl font-bold text-secondary mb-4">2023</div>
                  <div className="text-muted-foreground mb-6">Founded</div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">MSP Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">1M+</div>
                      <div className="text-sm text-muted-foreground">Tickets Processed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A blend of MSP expertise and cutting-edge AI knowledge.
              </p>
            </div>
            <div className="flex justify-center">
              {team.map((member) => (
                <div key={member.name} className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow max-w-sm">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <div className="text-sm text-secondary mb-2">{member.role}</div>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ecosystem Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We work closely with industry leaders to deliver the best possible experience for MSPs.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <img src={partner.logo} alt={partner.name} className="h-full w-auto max-w-[140px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We're always looking for talented people who share our passion for transforming MSP operations.
            </p>
            <Button variant="hero" size="xl">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
