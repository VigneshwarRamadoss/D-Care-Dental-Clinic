import { FadeIn } from '@/components/ui/FadeIn';
import { StatCounter } from '@/components/ui/StatCounter';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Orthodontics',
      description: 'Modern braces and clear aligners for balanced, healthy smiles.',
      img: '/orthodontics_service_1777553246747.png',
      badge: 'Top Popular',
    },
    {
      id: 2,
      title: 'Implantology',
      description: 'Advanced dental implants and full-mouth restorations with precise digital planning.',
      img: '/implant_service_1777553261220.png',
    },
    {
      id: 3,
      title: 'Digital Dentistry',
      description: '3D diagnostics, digital scanning, and precision-guided treatment planning.',
      img: '/digital_dentistry_service_1777553276475.png',
    },
    {
      id: 4,
      title: 'Root Canal',
      description: 'Painless endodontic therapy to save damaged or infected teeth.',
      img: '/root_canal_service_1777553290239.png',
    },
    {
      id: 5,
      title: 'Smile Makeover',
      description: 'Complete cosmetic transformation — veneers, whitening, and contouring.',
      img: '/smile_makeover_service_1777553305810.png',
    },
    {
      id: 6,
      title: 'Pediatric Care',
      description: 'Gentle, child-friendly dental care from the first tooth.',
      img: '/pediatric_service_1777553321017.png',
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-dark leading-tight">
              Comprehensive Dental Solutions
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar block */}
          <div className="lg:col-span-4 sticky top-32">
            <FadeIn>
              <div className="bg-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                    <StatCounter value={5000} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] mb-10">
                    Successful Procedures
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {['Preventive Care', 'Teeth Whitening', 'Pediatric Dentistry', 'Oral Surgery'].map((item) => (
                      <div key={item} className="group bg-white/5 hover:bg-primary/20 transition-all duration-300 border border-white/10 rounded-2xl px-5 py-4 text-sm font-semibold cursor-pointer flex items-center justify-between">
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <FadeIn key={service.id} delay={0.1 * (index % 4)}>
                  <div className="group relative bg-white border border-gray-100 rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col overflow-hidden">
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 text-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-y-4 group-hover:translate-y-0 duration-300 group-hover:bg-primary group-hover:text-white z-10 shadow-lg">
                      <ArrowRight className="w-4 h-4 -rotate-45" />
                    </div>
                    
                    <div className="relative mb-6 w-full h-40 overflow-hidden rounded-2xl shadow-inner">
                      <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      {service.badge && (
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                          {service.badge}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn>
              <div className="mt-12 text-center lg:text-left">
                <a href="#booking" className="inline-flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors border-b-2 border-dark hover:border-primary pb-1">
                  View All Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>
    </section>
  );
}
