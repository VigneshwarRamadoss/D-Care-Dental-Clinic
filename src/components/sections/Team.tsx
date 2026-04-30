import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Dr. Srividya',
      role: 'Chief Dental Surgeon & Implantologist',
      img: '/doctor_srividya_1777553591628.png',
    },
    {
      id: 2,
      name: 'Dr. Ramesh Kumar',
      role: 'Orthodontist',
      img: '/doctor_ramesh_1777553608672.png',
    },
    {
      id: 3,
      name: 'Dr. Priya Menon',
      role: 'Oral & Maxillofacial Surgeon',
      img: '/doctor_priya_1777553626597.png',
    },
    {
      id: 4,
      name: 'Dr. Arun Thomas',
      role: 'Pediatric Dentist',
      img: '/doctor_arun_1777553641209.png',
    },
  ];

  return (
    <section id="team" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">
              Dental Specialists
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark">
              Our Team of Experts
            </h2>
            <p className="text-lg text-muted">
              Our multidisciplinary team combines experience, precision, and a patient-centered approach to deliver comprehensive dental care in one trusted clinic.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {team.map((doc, index) => (
            <FadeIn key={doc.id} delay={0.1 * index}>
              <div className="group relative bg-white rounded-[2rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                
                <div className="relative mb-6 mx-auto w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-inner">
                  <img 
                    src={doc.img} 
                    alt={doc.name} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                  />
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a href="#booking" className="inline-block bg-white text-primary text-sm font-bold px-4 py-2 rounded-full hover:bg-dark hover:text-white transition-colors">
                        Book Consultation
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-muted font-medium">{doc.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <a href="#team" className="inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-4 text-sm font-semibold text-dark hover:bg-gray-200 transition-colors gap-2">
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
