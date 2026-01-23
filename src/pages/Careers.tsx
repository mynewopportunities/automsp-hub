import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Globe,
  Cpu,
  TrendingUp,
  DollarSign,
  Users,
  Lightbulb,
  MapPin,
  Clock,
  Building2,
  ArrowRight,
  Briefcase,
  Mail,
} from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Remote-First Culture',
    description: "Work from anywhere in the world. We believe great talent isn't limited by geography.",
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description: 'Work with AI/ML, ServiceNow, and modern cloud technologies shaping the future of IT.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Annual learning budget, conference attendance, and clear career progression paths.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Equity participation, performance bonuses, and comprehensive health benefits.',
  },
  {
    icon: Users,
    title: 'Collaborative Team',
    description: 'Small team, big impact. Your contributions directly shape our product and company.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Dedicated time for experimentation and building the future of MSP automation.',
  },
];

const openPositions = [
  {
    title: 'ServiceNow Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and customize ServiceNow workflows, integrations, and automation solutions for MSP clients.',
  },
  {
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop machine learning models for ticket classification, predictive analytics, and intelligent automation.',
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable web applications using React, TypeScript, and modern cloud infrastructure.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Partner with MSP clients to ensure successful adoption and maximize value from our platform.',
  },
];

const Careers = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Careers at AutoMSP | Join Our Team</title>
        <meta
          name="description"
          content="Join AutoMSP and help build the future of MSP automation. Explore open positions in engineering, AI/ML, and customer success."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">We're Hiring</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Build the Future of MSP Automation
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Join a passionate team of MSP veterans and AI experts on a mission to transform how managed service providers operate. Help us build intelligent automation that makes a real difference.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <a href="#positions">
                    View Open Positions
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Work at AutoMSP */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Work at AutoMSP?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're building something meaningful, and we want you to be part of it.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Culture */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Our Culture
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      At AutoMSP, we live by three core values that guide everything we do:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">MSP-First</h4>
                          <p className="text-muted-foreground text-sm">
                            Everything we build is designed specifically for the unique challenges of managed service providers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Customer Obsessed</h4>
                          <p className="text-muted-foreground text-sm">
                            We measure our success by the results our customers achieve, not by features shipped.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-secondary font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Continuously Learning</h4>
                          <p className="text-muted-foreground text-sm">
                            Just like our AI, we never stop learning and improving based on real-world feedback.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">MVP</div>
                      <div className="text-muted-foreground mb-6">Development Stage</div>
                      <div className="grid grid-cols-2 gap-6 text-left">
                        <div>
                          <div className="text-2xl font-bold text-foreground">2023</div>
                          <div className="text-sm text-muted-foreground">Founded</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">100%</div>
                          <div className="text-sm text-muted-foreground">Remote Team</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="positions" className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join our team and help shape the future of MSP automation.
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {openPositions.map((position) => (
                  <div
                    key={position.title}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {position.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {position.description}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            {position.department}
                          </span>
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="inline-flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="accent" asChild>
                        <Link to="/contact">
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Don't See a Role CTA */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Don't See a Role That Fits?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're always looking for talented people who are passionate about MSP automation and AI. Send us your resume and tell us how you can contribute.
                </p>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Send General Application
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Join us in building the next generation of MSP automation. Your expertise can help thousands of MSPs deliver better service to their clients.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="#positions">
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Careers;
