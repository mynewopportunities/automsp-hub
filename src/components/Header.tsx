import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import automspLogo from '@/assets/automsp-logo.jpg';

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
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={automspLogo} 
            alt="AutoMSP.us Logo" 
            className="h-16 md:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-1 px-5 py-3 text-base font-semibold transition-colors rounded-md font-heading ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-5 h-5" />}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="lg" className="font-heading text-base">
            Customer Login
          </Button>
          <Button variant="cta" size="lg" className="text-base px-8">
            Book a Demo
          </Button>
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