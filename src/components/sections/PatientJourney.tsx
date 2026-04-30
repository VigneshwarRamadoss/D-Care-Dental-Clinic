import { FadeIn } from '@/components/ui/FadeIn';

export default function PatientJourney() {
  const steps = [
    {
      num: '01',
      title: 'Book Online',
      desc: 'Schedule via form or WhatsApp in 60 seconds.',
    },
    {
      num: '02',
      title: 'Free Consultation',
      desc: 'Meet our specialists, discuss your concerns.',
    },
    {
      num: '03',
      title: 'Custom Treatment Plan',
      desc: 'Transparent pricing, no hidden costs.',
    },
    {
      num: '04',
      title: 'Healthy, Confident Smile',
      desc: 'Ongoing aftercare and support.',
    },
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold">Your Path to a Perfect Smile</h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Dotted connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={step.num} delay={0.1 * index} className="text-center relative">
                <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-6 shadow-[0_0_0_8px_white]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-[250px] mx-auto">
                  {step.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
