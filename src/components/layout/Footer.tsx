import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:pr-8">
            <FadeIn>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21c-2.8 0-5.8-1.5-6.8-4.4a8 8 0 0 1-.2-5.6C6.1 8 8.1 6.5 12 6c3.9.5 5.9 2 6.9 4.9a8 8 0 0 1-.1 5.6C17.7 19.5 14.8 21 12 21z"/><path d="M12 21v-7"/><path d="M12 6V3"/>
                </svg>
                <span className="font-display font-bold text-xl text-white">D Care Dental</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Advanced dental care for every smile in Chennai. We combine technology, experience, and compassion to deliver the best results.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.1}>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">About</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Clinic', href: '/about' },
                  { name: 'Our Doctors', href: '/doctors' },
                  { name: 'Technology', href: '/about' },
                  { name: 'Patient Journey', href: '/about' },
                  { name: 'Reviews', href: '/reviews' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm hover:underline underline-offset-4 decoration-primary">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-4">
                {[
                  { name: 'General Dentistry', href: '/services' },
                  { name: 'Orthodontics', href: '/services' },
                  { name: 'Dental Implants', href: '/services' },
                  { name: 'Pediatric Dentistry', href: '/services' },
                  { name: 'Cosmetic Dentistry', href: '/services' },
                  { name: 'Root Canal', href: '/services' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm hover:underline underline-offset-4 decoration-primary">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.3}>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal + Contact</h4>
              <ul className="space-y-4 mb-6">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Use</a></li>
              </ul>
              <div className="space-y-2 text-white/60 text-sm">
                <p>11, Veeraraghavan St, NCBS Colony, Nanganallur, Chennai, Tamil Nadu 600061</p>
                <p>+91 98847 18819</p>
                <p>info@dcaredental.com</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 relative z-10 bg-[#0B172D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>11, Veeraraghavan St, NCBS Colony, Nanganallur, Chennai – 600061 • +91 98847 18819 • info@dcaredental.com</p>
          <p>© {new Date().getFullYear()} D Care Dental Clinic. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-16 md:bottom-12 z-0 font-display font-black text-white/[0.03] select-none text-[15vw] leading-none whitespace-nowrap overflow-hidden text-center pointer-events-none tracking-tighter mix-blend-overlay">
        D CARE DENTAL
      </div>
    </footer>
  );
}
