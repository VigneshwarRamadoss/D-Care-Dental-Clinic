import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pb-16 md:pb-24 overflow-hidden bg-secondary/30 transition-all duration-300 pt-32 md:pt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 lg:pr-8">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary mb-6 uppercase">
                Smile & Dental Care
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-bold text-dark mb-6">
                Advanced Dentistry for <span className="text-primary">Every Smile</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl lg:mb-12">
                Complete care for your smile &mdash; prevention, restoration, and aesthetic treatments all in one place. Trusted by Chennai families for over a decade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asMotion className="w-full sm:w-auto gap-2" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                  Schedule Appointment <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-6 relative">
            <FadeIn delay={0.3} direction="none" className="relative grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              
              <div className="col-span-1 border-4 border-white shadow-soft rounded-[var(--radius-card)] overflow-hidden relative group">
                <OptimizedImage 
                  src="/modern_clinic_interior_1777552669692.png" 
                  alt="Modern Clinic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                    Our Clinic
                  </span>
                </div>
              </div>

              <div className="col-span-1 grid grid-rows-2 gap-4">
                <div className="border-4 border-white shadow-soft rounded-[var(--radius-card)] overflow-hidden relative group">
                  <OptimizedImage 
                    src="/dentist_consultation_1777552685997.png" 
                    alt="Consultation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                      Expert Care
                    </span>
                  </div>
                </div>
                
                <div className="border-4 border-white shadow-soft rounded-[var(--radius-card)] overflow-hidden relative group">
                  <OptimizedImage 
                    src="/dental_technology_high_res_1777552703388.png" 
                    alt="Dental Tech" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                      Advanced Tech
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-lift z-30 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="text-sm font-semibold pr-2">
                  <span className="text-primary">+20k</span> Patients
                </div>
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
