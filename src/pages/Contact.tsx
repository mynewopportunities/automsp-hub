import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us | AutoMSP - AI Automation for MSPs</title>
        <meta name="description" content="Get in touch with AutoMSP. Request a demo, talk to sales, or explore partnership opportunities for ServiceNow automation." />
      </Helmet>

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
                  Ready to transform your MSP operations? Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                {/* Form */}
                <ContactForm />

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Get in touch</h2>
                    <p className="text-muted-foreground">
                      We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a href="mailto:info@automsp.us" className="text-secondary hover:underline">
                          info@automsp.us
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <a href="tel:+13462003801" className="text-secondary hover:underline">
                          +1 346 200 3801
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
                          C1 - 1003, Burhani Centenary Park,<br />
                          Bhestan, Surat, Gujarat, India 395023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Contact;
