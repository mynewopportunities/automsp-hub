import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const pricingTiers = {
  USD: {
    standard: { monthly: 299, yearly: 2990 },
    professional: { monthly: 599, yearly: 5990 },
    enterprise: { monthly: 999, yearly: 9990 },
  },
  INR: {
    standard: { monthly: 24999, yearly: 249990 },
    professional: { monthly: 49999, yearly: 499990 },
    enterprise: { monthly: 84999, yearly: 849990 },
  },
};

const tiers = [
  {
    name: 'Standard',
    description: 'Perfect for small MSPs getting started with AI automation.',
    features: [
      'Up to 500 tickets/month',
      'Basic AI ticket routing',
      'Email integration',
      'Standard support (48hr response)',
      '1 ServiceNow instance',
      'Basic analytics dashboard',
      'Knowledge base access',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Best for growing MSPs seeking comprehensive automation.',
    features: [
      'Up to 2,500 tickets/month',
      'Advanced AI ticket routing & resolution',
      'Email + Chat integrations',
      'Priority support (24hr response)',
      '3 ServiceNow instances',
      'Advanced analytics & reporting',
      'Custom workflow automation',
      'API access',
      'Dedicated onboarding',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Best Value',
  },
  {
    name: 'Enterprise',
    description: 'For large MSPs requiring unlimited scale and customization.',
    features: [
      'Unlimited tickets',
      'Full AI automation suite',
      'All integrations included',
      'Premium support (4hr response)',
      'Unlimited ServiceNow instances',
      'Custom AI model training',
      'White-label options',
      'Dedicated success manager',
      'SLA guarantees',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const formatPrice = (price: number) => {
    if (currency === 'INR') {
      return `₹${price.toLocaleString('en-IN')}`;
    }
    return `$${price.toLocaleString('en-US')}`;
  };

  const getPrice = (tierKey: 'standard' | 'professional' | 'enterprise') => {
    return pricingTiers[currency][tierKey][billingCycle];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your MSP's needs. All plans include our core AI-powered 
            ServiceNow automation. No hidden fees, cancel anytime.
          </p>

          {/* Currency & Billing Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Currency Toggle */}
            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
              <span className={`text-sm font-medium transition-colors ${currency === 'INR' ? 'text-primary' : 'text-muted-foreground'}`}>
                INR ₹
              </span>
              <Switch
                checked={currency === 'USD'}
                onCheckedChange={(checked) => setCurrency(checked ? 'USD' : 'INR')}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm font-medium transition-colors ${currency === 'USD' ? 'text-primary' : 'text-muted-foreground'}`}>
                USD $
              </span>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
              <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={billingCycle === 'yearly'}
                onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'text-primary' : 'text-muted-foreground'}`}>
                Yearly
                <span className="ml-1 text-xs text-green-600 font-semibold">(Save 17%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => {
              const tierKey = tier.name.toLowerCase() as 'standard' | 'professional' | 'enterprise';
              const price = getPrice(tierKey);

              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-gradient-to-b from-primary/10 to-primary/5 border-2 border-primary shadow-xl scale-105 z-10'
                      : 'bg-card border border-border hover:border-primary/50 hover:shadow-lg'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        <Zap className="w-4 h-4" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold font-heading mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-foreground">
                        {formatPrice(price)}
                      </span>
                      <span className="text-muted-foreground">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 font-medium">
                        Save {formatPrice(Math.round(price * 0.17))} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-primary' : 'text-green-600'}`} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlighted ? 'cta' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ or Contact Section */}
        <section className="container mx-auto px-4 mt-20 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-6">
              We offer tailored pricing for MSPs with unique requirements. 
              Contact our sales team to discuss your specific needs.
            </p>
            <Button variant="cta" size="lg">
              Talk to Sales
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
