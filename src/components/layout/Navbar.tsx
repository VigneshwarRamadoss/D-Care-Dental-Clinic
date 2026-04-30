import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Doctors', href: '/doctors' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-40 transition-all duration-300 top-0',
        isScrolled ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className={cn("flex-shrink-0", !isHome && !isScrolled ? "text-white" : "text-primary")}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c-2.8 0-5.8-1.5-6.8-4.4a8 8 0 0 1-.2-5.6C6.1 8 8.1 6.5 12 6c3.9.5 5.9 2 6.9 4.9a8 8 0 0 1-.1 5.6C17.7 19.5 14.8 21 12 21z"/><path d="M12 21v-7"/><path d="M12 6V3"/>
              </svg>
            </div>
            <span className={cn(
              "font-display font-bold text-xl hidden sm:block",
              !isHome && !isScrolled ? "text-white" : "text-dark"
            )}>
              D Care Dental Clinic
            </span>
            <span className={cn(
              "font-display font-bold text-xl sm:hidden",
              !isHome && !isScrolled ? "text-white" : "text-dark"
            )}>
              D Care Dental
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isWhiteText = !isHome && !isScrolled;
              
              let textClass = "";
              if (isWhiteText) {
                textClass = isActive ? "text-white font-bold" : "text-white/80 hover:text-white";
              } else {
                textClass = isActive ? "text-primary font-bold" : "text-dark/80 hover:text-primary";
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base font-medium transition-colors",
                    textClass
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button asMotion className="gap-2">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <button
            className={cn(
              "md:hidden p-2",
              !isHome && !isScrolled ? "text-white" : "text-dark"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-dark text-white flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-display font-medium transition-colors",
                  pathname === link.href ? "text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="p-6 pb-12 w-full">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full h-14 text-lg"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
