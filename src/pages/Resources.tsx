import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, FileText, Video, Download, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'blog', label: 'Blog' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'whitepaper', label: 'Whitepapers' },
  { id: 'webinar', label: 'Webinars' },
];

const resources = [
  {
    id: 1,
    type: 'blog',
    title: 'The Future of AI in Managed Services: What MSPs Need to Know',
    excerpt: 'Explore how artificial intelligence is reshaping the managed services landscape and what it means for your business.',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    icon: BookOpen,
  },
  {
    id: 2,
    type: 'case-study',
    title: 'How TechFlow MSP Reduced Ticket Triage Time by 65%',
    excerpt: 'Learn how a mid-market MSP transformed their operations with AutoMSP in just 30 days.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    icon: FileText,
  },
  {
    id: 3,
    type: 'whitepaper',
    title: 'The Complete Guide to ServiceNow AI Integration',
    excerpt: 'A comprehensive guide to implementing AI automation in your ServiceNow environment.',
    date: 'Dec 10, 2024',
    readTime: '15 min read',
    icon: Download,
  },
  {
    id: 4,
    type: 'webinar',
    title: 'Live Demo: Intelligent Ticket Routing in Action',
    excerpt: 'Watch our team demonstrate real-time ticket triage and routing with AutoMSP.',
    date: 'Dec 5, 2024',
    readTime: '45 min',
    icon: Video,
  },
  {
    id: 5,
    type: 'blog',
    title: 'SLA Compliance: Why Most MSPs Are Leaving Money on the Table',
    excerpt: 'Discover the hidden costs of SLA breaches and how automation can help you retain clients.',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    icon: BookOpen,
  },
  {
    id: 6,
    type: 'case-study',
    title: 'From 1000 to 5000 Endpoints: Scaling Without Adding Staff',
    excerpt: 'A growth story about using AI to handle increased ticket volume efficiently.',
    date: 'Nov 20, 2024',
    readTime: '7 min read',
    icon: FileText,
  },
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Resources & Insights
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert content to help you get the most out of AI automation for your MSP.
              </p>
              
              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredResources.map((resource) => (
                <article
                  key={resource.id}
                  className="group bg-card rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Thumbnail placeholder */}
                  <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <resource.icon className="w-12 h-12 text-muted-foreground/50 group-hover:text-secondary transition-colors" />
                  </div>
                  
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-secondary/10 text-secondary capitalize">
                        {resource.type.replace('-', ' ')}
                      </span>
                      <span className="text-xs text-muted-foreground">{resource.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {resource.excerpt}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                      <Button variant="link" className="p-0 h-auto text-secondary">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No resources found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get the latest insights on AI automation and MSP best practices delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="hero" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
