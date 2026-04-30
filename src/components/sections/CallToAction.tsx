import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { StatCounter } from '@/components/ui/StatCounter';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
          alt="Clinic Interior" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-white leading-[1.1] mb-8">
                Modern Dentistry.<br /> <span className="font-bold">Human Care.</span>
              </h2>
              
            </FadeIn>
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:items-end">
            <FadeIn delay={0.2} direction="left">
              <div className="bg-white rounded-[var(--radius-card)] p-8 max-w-sm w-full shadow-lift relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/50 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-primary font-bold mb-2">
                    <StatCounter value={12000} suffix="+" />
                  </div>
                  <div className="text-sm font-bold text-dark uppercase tracking-wider mb-4">Happy Smiles Restored</div>
                  <p className="text-muted text-sm mb-8 leading-relaxed">
                    Advanced treatments tailored to your needs &mdash; always delivered with comfort and precision.
                  </p>
                  <Button size="lg" className="w-full gap-2" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                    Schedule Appointment <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
