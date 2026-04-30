import { FadeIn } from '@/components/ui/FadeIn';
import { StatCounter } from '@/components/ui/StatCounter';

export default function About() {
  const stats = [
    { label: 'Specialists', value: 12, suffix: '+' },
    { label: 'Procedures', value: 40, suffix: '+' },
    { label: 'Years Exp.', value: 15, suffix: '+' },
    { label: 'Satisfaction', value: 99, suffix: '%' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div className="relative">
            <FadeIn>
              <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">
                About Our Clinic
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark leading-tight">
                Expertise You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Trust</span>
              </h2>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                Our multidisciplinary team brings together experienced specialists across general dentistry, orthodontics, implantology, and cosmetic care — all under one roof in the heart of Chennai.
              </p>
              
              <div className="flex items-center gap-4">
                <a href="#team" className="inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Meet Our Doctors
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-semibold text-dark hover:bg-gray-50 transition-colors">
                  Explore Services
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Image & Stats Grid */}
          <div className="relative mt-10 lg:mt-0">
            <FadeIn direction="left">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:w-4/5 lg:ml-auto">
                <img 
                  src="/dentist_consultation_1777552685997.png" 
                  alt="Doctor performing procedure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
              </div>

              {/* Overlapping Stats Grid */}
              <div className="absolute -bottom-10 -left-4 md:-left-12 lg:left-0 grid grid-cols-2 gap-4 w-full max-w-sm">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-5 hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                       <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-dark/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
