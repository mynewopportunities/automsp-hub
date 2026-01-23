import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  Shield, 
  Users, 
  Heart, 
  Globe, 
  Scale, 
  MessageSquare,
  Laptop,
  Clock,
  Award,
  Handshake
} from 'lucide-react';

const policies = [
  {
    icon: Globe,
    title: 'Remote-First Environment',
    description: 'AutoMSP operates as a fully remote company. We believe that great work can happen anywhere, and we trust our team members to manage their time and deliverables effectively.',
    points: [
      'Work from any location that suits your productivity',
      'Flexible working hours with core overlap for collaboration',
      'Home office setup allowance provided',
      'Regular virtual team meetings and check-ins',
    ],
  },
  {
    icon: Users,
    title: 'Equal Opportunity Employment',
    description: 'We are committed to providing equal employment opportunities regardless of race, color, religion, gender, sexual orientation, national origin, age, disability, or any other protected status.',
    points: [
      'Merit-based hiring and promotion decisions',
      'Inclusive interview and onboarding processes',
      'Regular diversity and inclusion training',
      'Zero tolerance for discrimination or harassment',
    ],
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'We prioritize the physical and mental well-being of our team members, understanding that healthy employees are more engaged and productive.',
    points: [
      'Comprehensive health insurance coverage',
      'Mental health support and counseling resources',
      'Wellness stipend for fitness and health activities',
      'Encouraged time off for rest and recovery',
    ],
  },
  {
    icon: Scale,
    title: 'Work-Life Balance',
    description: 'We recognize that our team members have lives outside of work and encourage a healthy balance between professional and personal commitments.',
    points: [
      'Flexible scheduling to accommodate personal needs',
      'Generous paid time off policy',
      'Parental leave for new parents',
      'No expectation of after-hours availability',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Open Communication',
    description: 'Transparency and open dialogue are fundamental to our culture. We encourage honest feedback and constructive conversations at all levels.',
    points: [
      'Regular one-on-one meetings with managers',
      'Anonymous feedback channels available',
      'Quarterly all-hands meetings with leadership',
      'Open-door policy for concerns and suggestions',
    ],
  },
  {
    icon: Shield,
    title: 'Code of Conduct',
    description: 'All team members are expected to maintain the highest standards of professional and ethical behavior in all interactions.',
    points: [
      'Treat colleagues with respect and dignity',
      'Maintain confidentiality of company and client information',
      'Avoid conflicts of interest',
      'Report any violations or concerns promptly',
    ],
  },
  {
    icon: Laptop,
    title: 'Technology & Security',
    description: 'As a technology company, we take data security and responsible use of company resources seriously.',
    points: [
      'Secure handling of all company and client data',
      'Use of approved security tools and practices',
      'Regular security awareness training',
      'Responsible use of company-provided equipment',
    ],
  },
  {
    icon: Clock,
    title: 'Time Off & Leave',
    description: 'We offer comprehensive leave policies to ensure our team can take the time they need for personal matters.',
    points: [
      'Paid vacation days accrued annually',
      'Sick leave without requiring justification',
      'Public holidays observed',
      'Additional leave for special circumstances',
    ],
  },
  {
    icon: Award,
    title: 'Professional Development',
    description: 'We invest in our team members\' growth and encourage continuous learning and skill development.',
    points: [
      'Annual learning and development budget',
      'Conference attendance opportunities',
      'Internal knowledge sharing sessions',
      'Career progression pathways',
    ],
  },
  {
    icon: Handshake,
    title: 'Grievance Redressal',
    description: 'We provide clear channels for addressing workplace concerns and ensuring fair resolution of any issues.',
    points: [
      'Confidential reporting mechanisms',
      'Prompt investigation of all complaints',
      'Fair and unbiased resolution process',
      'Protection against retaliation',
    ],
  },
];

const WorkplacePolicy = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Workplace Policy | AutoMSP</title>
        <meta
          name="description"
          content="AutoMSP workplace policies covering remote work, equal opportunity, health & wellness, work-life balance, and professional conduct standards."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-40">
          {/* Hero Section */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Workplace Policy
                </h1>
                <p className="text-lg text-muted-foreground">
                  At AutoMSP, we are committed to creating a positive, inclusive, and productive work environment. These policies outline our expectations and the support we provide to all team members.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </section>

          {/* Policy Sections */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {policies.map((policy, index) => (
                  <div
                    key={policy.title}
                    className="bg-card rounded-2xl border border-border p-6 lg:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <policy.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                          {index + 1}. {policy.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {policy.description}
                        </p>
                        <ul className="space-y-2">
                          {policy.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Questions About Our Policies?
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our workplace policies or need clarification on any matter, please reach out to our HR team.
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us at{' '}
                  <a
                    href="mailto:support@automsp.store"
                    className="text-secondary hover:underline"
                  >
                    support@automsp.store
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default WorkplacePolicy;
