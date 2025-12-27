import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-cta/20 to-secondary/20 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12 lg:p-16 text-center shadow-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta-foreground border border-cta/20 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-cta" />
              Start your free assessment
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Transform Your MSP Operations?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a personalized demo and see how AutoMSP can reduce your ticket triage time by 60% while improving SLA compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Book Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Talk to Sales
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">What you'll get in your 30-minute demo:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Live product walkthrough
                </span>
                <span className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  ROI assessment
                </span>
                <span className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Integration roadmap
                </span>
                <span className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Pricing discussion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
