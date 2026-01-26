import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Video, Calendar, Clock, Play, Users } from 'lucide-react';

const upcomingWebinars = [
  {
    id: 1,
    title: 'Live Demo: Intelligent Ticket Routing in Action',
    description: 'Watch our team demonstrate real-time ticket triage and routing with AutoMSP. See how AI categorizes, prioritizes, and assigns tickets in seconds.',
    date: 'February 15, 2025',
    time: '2:00 PM EST',
    duration: '45 min',
    speakers: ['Sarah Chen, Product Lead', 'Mike Rodriguez, Solutions Engineer'],
    type: 'upcoming'
  },
  {
    id: 2,
    title: 'Scaling Your MSP: Automation Strategies for Growth',
    description: 'Learn proven strategies for handling 10x ticket volume without 10x staff. Real examples from MSPs who\'ve scaled efficiently with automation.',
    date: 'February 28, 2025',
    time: '1:00 PM EST',
    duration: '60 min',
    speakers: ['David Park, CEO', 'Jennifer Walsh, Customer Success'],
    type: 'upcoming'
  }
];

const pastWebinars = [
  {
    id: 3,
    title: 'SLA Compliance Masterclass: From Reactive to Proactive',
    description: 'Deep dive into AI-powered SLA management. Learn how to predict and prevent breaches before they impact your clients.',
    date: 'January 18, 2025',
    duration: '55 min',
    viewers: '1,250+',
    type: 'recorded'
  },
  {
    id: 4,
    title: 'ServiceNow + AI: Getting Started Guide',
    description: 'Step-by-step walkthrough of integrating AI automation with your existing ServiceNow instance. Perfect for teams just getting started.',
    date: 'January 4, 2025',
    duration: '50 min',
    viewers: '2,100+',
    type: 'recorded'
  },
  {
    id: 5,
    title: 'Building Custom Automation Workflows',
    description: 'Advanced session on creating custom automation rules and workflows. No coding required—just drag, drop, and deploy.',
    date: 'December 14, 2024',
    duration: '65 min',
    viewers: '890+',
    type: 'recorded'
  },
  {
    id: 6,
    title: 'ROI of MSP Automation: Real Numbers, Real Results',
    description: 'Customer panel discussion featuring MSPs who share their automation journey, challenges, and measurable results.',
    date: 'November 30, 2024',
    duration: '70 min',
    viewers: '1,800+',
    type: 'recorded'
  },
  {
    id: 7,
    title: 'Security in AI-Powered MSP Operations',
    description: 'Best practices for maintaining security and compliance while leveraging AI automation. Covers SOC 2, HIPAA, and GDPR considerations.',
    date: 'November 16, 2024',
    duration: '45 min',
    viewers: '950+',
    type: 'recorded'
  },
  {
    id: 8,
    title: 'Reducing Technician Burnout with Smart Automation',
    description: 'How AI handles repetitive tasks so your team can focus on complex, rewarding work. Includes real technician testimonials.',
    date: 'October 28, 2024',
    duration: '40 min',
    viewers: '1,400+',
    type: 'recorded'
  }
];

const Webinars = () => {
  return (
    <>
      <Helmet>
        <title>MSP Webinars & Training | ServiceNow Automation | AutoMSP</title>
        <meta name="description" content="Watch live and recorded webinars on MSP automation, ServiceNow AI integration, SLA compliance, and IT service management best practices." />
        <link rel="canonical" href="https://automsp.us/resources/webinars" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                  <Video className="w-4 h-4" />
                  Live & On-Demand
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Webinars & Training
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Learn from industry experts. Live sessions, demos, and on-demand content to help you master MSP automation.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Webinars */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Upcoming Live Sessions
                </h2>
                
                <div className="space-y-6">
                  {upcomingWebinars.map((webinar) => (
                    <Card key={webinar.id} className="border-border hover:border-secondary/30 transition-colors overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-48 bg-secondary/10 p-6 flex flex-col justify-center items-center text-center">
                            <Calendar className="w-8 h-8 text-secondary mb-2" />
                            <div className="font-semibold text-foreground">{webinar.date}</div>
                            <div className="text-sm text-muted-foreground">{webinar.time}</div>
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                                Live
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {webinar.duration}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {webinar.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {webinar.description}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="text-sm text-muted-foreground">
                                <span className="font-medium">Speakers:</span> {webinar.speakers.join(', ')}
                              </div>
                              <Button variant="cta">
                                Register Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Past Webinars */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  On-Demand Library
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastWebinars.map((webinar) => (
                    <Card key={webinar.id} className="border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground">
                            Recorded
                          </span>
                          <span className="text-xs text-muted-foreground">{webinar.date}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {webinar.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {webinar.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {webinar.viewers}
                            </span>
                          </div>
                          <Button variant="link" className="p-0 h-auto text-primary">
                            <Play className="w-4 h-4 mr-1" />
                            Watch
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Want a Personalized Demo?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Schedule a one-on-one session with our team to see how AutoMSP can work for your specific needs.
                </p>
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Webinars;
