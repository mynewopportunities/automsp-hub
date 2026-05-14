import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search,
  MessageCircle, 
  FileText, 
  Video,
  Mail,
  Phone,
  Clock,
  BookOpen,
  HelpCircle,
  Zap,
  Settings,
  Shield
} from 'lucide-react';
import { useState } from 'react';

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team during business hours.',
    availability: 'Mon-Fri, 9AM-6PM EST',
    action: 'Start Chat',
    primary: true
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message and we\'ll respond within 24 hours.',
    availability: 'support@automsp.us',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with a support specialist for urgent issues.',
    availability: '+1 346 200 3801',
    action: 'Call Now'
  }
];

const helpCategories = [
  {
    icon: Zap,
    title: 'Getting Started',
    description: 'Setup guides, onboarding, and first steps with AutoMSP.',
    articles: 12
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Configure workflows, integrations, and automation rules.',
    articles: 24
  },
  {
    icon: BookOpen,
    title: 'Best Practices',
    description: 'Tips and strategies to maximize your automation ROI.',
    articles: 18
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Security settings, compliance features, and audit logs.',
    articles: 9
  },
  {
    icon: HelpCircle,
    title: 'Troubleshooting',
    description: 'Common issues and how to resolve them quickly.',
    articles: 31
  },
  {
    icon: FileText,
    title: 'API Documentation',
    description: 'Technical documentation for developers and integrations.',
    articles: 15
  }
];

const faqs = [
  {
    question: 'How do I integrate AutoMSP with my ServiceNow instance?',
    answer: 'AutoMSP connects to ServiceNow via our certified integration. Simply provide your instance URL and API credentials in the settings, and our setup wizard will guide you through the rest. Most integrations are complete within 15 minutes.'
  },
  {
    question: 'What happens if the AI makes a mistake in ticket routing?',
    answer: 'Our AI learns from corrections. When a technician reroutes a ticket, the system learns from that decision to improve future routing. You can also set up manual approval workflows for high-priority tickets.'
  },
  {
    question: 'Is my data secure with AutoMSP?',
    answer: 'Yes. We are SOC 2 Type II compliant and HIPAA ready. All data is encrypted in transit and at rest. We never train our AI models on your specific ticket data without explicit consent.'
  },
  {
    question: 'Can I customize the automation rules?',
    answer: 'Absolutely. Our visual workflow designer lets you create custom automation rules without any coding. You can set conditions, actions, and exceptions based on your specific business requirements.'
  },
  {
    question: 'What kind of support is included with my plan?',
    answer: 'All plans include email support and access to our knowledge base. Professional and Enterprise plans include priority support, live chat, and phone support. Enterprise customers also get a dedicated success manager.'
  }
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Helmet>
        <title>Support Center | AutoMSP Help & Documentation</title>
        <meta name="description" content="Get help with AutoMSP. Access our knowledge base, contact support, or find answers to common questions about MSP automation and ServiceNow integration." />
        <link rel="canonical" href="https://automsp.us/support" />
        <meta property="og:title" content="Support Center | AutoMSP" />
        <meta property="og:description" content="Knowledge base, FAQs, and support for AutoMSP." />
        <meta property="og:url" content="https://automsp.us/support" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(f => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer }
          }))
        })}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  How Can We Help?
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Search our knowledge base or get in touch with our support team.
                </p>
                
                {/* Search */}
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-base"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Contact Support
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {supportChannels.map((channel, index) => (
                    <Card key={index} className={`border-border hover:border-primary/30 transition-colors ${channel.primary ? 'ring-2 ring-primary' : ''}`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${channel.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                          <channel.icon className={`w-7 h-7 ${channel.primary ? '' : 'text-primary'}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {channel.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {channel.description}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                          <Clock className="w-3 h-3" />
                          {channel.availability}
                        </div>
                        <Button variant={channel.primary ? 'hero' : 'outline'} className="w-full">
                          {channel.action}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Help Categories */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Browse Help Topics
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {helpCategories.map((category, index) => (
                    <Card key={index} className="border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {category.description}
                        </p>
                        <div className="text-xs text-primary font-medium">
                          {category.articles} articles
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Resources CTA */}
          <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need More Resources?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Explore our library of guides, webinars, and documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/resources">
                      <FileText className="w-4 h-4 mr-2" />
                      View Resources
                    </Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="lg">
                    <Link to="/resources/webinars">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Webinars
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Support;
