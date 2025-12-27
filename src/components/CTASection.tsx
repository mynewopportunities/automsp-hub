import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="decoration-blob w-[600px] h-[600px] bg-primary -top-48 -right-48" />
        <div className="decoration-blob w-[400px] h-[400px] bg-secondary -bottom-32 -left-32 opacity-30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="relative max-w-4xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12 lg:p-16 text-center shadow-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold mb-6 font-heading">
              <Sparkles className="w-4 h-4" />
              Start your free assessment
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
              Ready to Transform Your <span className="text-primary">MSP Operations</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a personalized demo and see how AutoMSP can reduce your ticket triage time by 60% while improving SLA compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl">
                Book Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Talk to Sales
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 font-heading">What you'll get in your 30-minute demo:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {['Live product walkthrough', 'ROI assessment', 'Integration roadmap', 'Pricing discussion'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-foreground font-medium">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};