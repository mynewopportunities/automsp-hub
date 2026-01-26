import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Download, Clock, ArrowRight } from 'lucide-react';

const whitepapers = [
  {
    id: 1,
    title: 'The Complete Guide to ServiceNow AI Integration',
    description: 'A comprehensive 40-page guide covering everything from initial setup to advanced AI workflows in ServiceNow. Learn best practices for ticket triage, automated resolution, and predictive analytics.',
    pages: '40 pages',
    category: 'Technical Guide',
    date: 'January 2025'
  },
  {
    id: 2,
    title: 'MSP Automation ROI Calculator & Analysis',
    description: 'Data-driven analysis of automation ROI for MSPs. Includes case studies, benchmarks, and a framework for calculating your potential savings with AI automation.',
    pages: '25 pages',
    category: 'Business Analysis',
    date: 'December 2024'
  },
  {
    id: 3,
    title: 'SLA Compliance in the Age of AI',
    description: 'How AI is transforming SLA management for MSPs. Covers predictive breach prevention, automated escalation, and compliance reporting strategies.',
    pages: '32 pages',
    category: 'Best Practices',
    date: 'November 2024'
  },
  {
    id: 4,
    title: 'Building a Scalable MSP: From 500 to 5000 Endpoints',
    description: 'Strategic guide for MSPs looking to scale operations without proportionally increasing headcount. Automation strategies, technology stack recommendations, and organizational models.',
    pages: '35 pages',
    category: 'Growth Strategy',
    date: 'October 2024'
  },
  {
    id: 5,
    title: 'Security Best Practices for AI-Powered MSPs',
    description: 'Comprehensive security framework for implementing AI in managed services. Covers data protection, access controls, and compliance considerations.',
    pages: '28 pages',
    category: 'Security',
    date: 'September 2024'
  },
  {
    id: 6,
    title: 'The Future of IT Service Management: 2025 and Beyond',
    description: 'Industry trends analysis and predictions for ITSM. Explores emerging technologies, changing customer expectations, and strategic positioning for MSPs.',
    pages: '22 pages',
    category: 'Industry Report',
    date: 'August 2024'
  }
];

const Whitepapers = () => {
  return (
    <>
      <Helmet>
        <title>MSP Whitepapers & Technical Guides | AutoMSP Resources</title>
        <meta name="description" content="Download free whitepapers on MSP automation, ServiceNow AI integration, SLA compliance, and IT service management best practices." />
        <link rel="canonical" href="https://automsp.us/resources/whitepapers" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <FileText className="w-4 h-4" />
                  Expert Resources
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Whitepapers & Guides
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  In-depth research and practical guides to help you maximize the value of AI automation for your MSP.
                </p>
              </div>
            </div>
          </section>

          {/* Whitepapers Grid */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {whitepapers.map((paper) => (
                  <Card key={paper.id} className="border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                          {paper.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{paper.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                        {paper.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                        {paper.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {paper.pages}
                        </div>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get New Research First
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Subscribe to receive new whitepapers and research reports directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="h-12"
                  />
                  <Button variant="hero" size="lg">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Explore More Resources
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link to="/resources">All Resources</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/resources/webinars">Webinars</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/resources/case-studies">Case Studies</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/resources/blog">Blog</Link>
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

export default Whitepapers;
