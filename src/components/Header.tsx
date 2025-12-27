import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import automspLogo from '@/assets/automsp-logo.png';

const navigation = [
  { name: 'Solutions', href: '/solutions', hasDropdown: true },
  { name: 'Why AutoMSP', href: '/why-automsp' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-card/95 backdrop-blur-xl shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between py-4 w-full" aria-label="Main navigation">
        {/* Logo - Far Left */}
        <Link to="/" className="flex items-center group pl-4 lg:pl-8">
          <img 
            src={automspLogo} 
            alt="AutoMSP.us Logo" 
            className="h-32 sm:h-36 lg:h-40 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Center Navigation + Right CTAs */}
        <div className="hidden lg:flex items-center gap-8 pr-4 lg:pr-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-base font-semibold transition-colors rounded-md font-heading ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="default" className="font-heading bg-green-600 text-white hover:bg-white hover:text-green-600 border border-transparent hover:border-green-600">
              Customer Login
            </Button>
            <Button variant="cta" size="default">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-muted text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-card border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center justify-between px-4 py-3 text-base font-semibold rounded-lg font-heading ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-5 h-5 text-muted-foreground" />}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full">
                Customer Login
              </Button>
              <Button variant="cta" className="w-full">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};