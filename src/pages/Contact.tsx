import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactOptions = [
  {
    icon: Calendar,
    title: 'Book a Demo',
    description: 'See AutoMSP in action with a personalized walkthrough',
    cta: 'Schedule Now',
    type: 'demo',
  },
  {
    icon: MessageSquare,
    title: 'Talk to Sales',
    description: 'Get answers to your questions about pricing and features',
    cta: 'Contact Sales',
    type: 'sales',
  },
  {
    icon: Users,
    title: 'Become a Partner',
    description: 'Explore partnership opportunities for ServiceNow consultants',
    cta: 'Partner With Us',
    type: 'partner',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    type: 'demo',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      message: '',
      type: 'demo',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Talk
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your MSP operations? Choose how you'd like to connect with us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setFormData({ ...formData, type: option.type })}
                  className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                    formData.type === option.type
                      ? 'border-secondary bg-secondary/5 shadow-lg'
                      : 'border-border bg-card hover:border-secondary/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    formData.type === option.type ? 'bg-secondary/20' : 'bg-muted'
                  }`}>
                    <option.icon className={`w-6 h-6 ${
                      formData.type === option.type ? 'text-secondary' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme MSP"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                        Your Role
                      </label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Technical Director"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your ServiceNow setup and what you're looking to achieve..."
                    />
                  </div>

                  <Button variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:hello@automsp.ai" className="text-secondary hover:underline">
                        hello@automsp.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:+18005551234" className="text-secondary hover:underline">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p className="text-muted-foreground">
                        San Francisco, CA<br />
                        London, UK
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ teaser */}
                <div className="mt-12 p-6 rounded-2xl bg-muted/50">
                  <h3 className="font-semibold text-foreground mb-2">Have questions?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check out our documentation and FAQ for quick answers to common questions.
                  </p>
                  <Button variant="outline" size="sm">
                    Visit Support Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
