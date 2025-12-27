import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Solutions', href: '/solutions', hasDropdown: true },
  { name: 'Why AutoMSP', href: '/why-automsp' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-md group-hover:shadow-glow-teal transition-all duration-300">
            <span className="text-secondary-foreground font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-foreground">
            Auto<span className="text-secondary">MSP</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Customer Login
          </Button>
          <Button variant="hero" size="default">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
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
        <div id="mobile-menu" className="lg:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg"
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
              <Button variant="hero" className="w-full">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
