import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function FAQ() {
  const [value, setValue] = useState('item-1');

  const faqs = [
    {
      id: 'item-1',
      q: 'How often should I visit the dentist?',
      a: 'We recommend visiting the dentist every six months for a routine check-up and professional cleaning. However, if you experience any pain or discomfort, you should contact us immediately.'
    },
    {
      id: 'item-2',
      q: 'Are dental treatments painful?',
      a: 'Modern dentistry is virtually painless. We use advanced local anesthesia and minimally invasive techniques to ensure your comfort during any procedure.'
    },
    {
      id: 'item-3',
      q: 'Do you offer dental implants?',
      a: 'Yes, our clinic specializes in implantology. We offer individual implants, implant-supported bridges, and full-mouth restorations using the latest 3D guided technology.'
    },
    {
      id: 'item-4',
      q: 'Do you treat children?',
      a: 'Absolutely. We have specialized pediatric dentists who provide gentle, child-friendly care in a welcoming environment to make your child\'s visit positive.'
    },
    {
      id: 'item-5',
      q: 'Is EMI or insurance accepted?',
      a: 'We accept major medical insurances and partner with financial institutions to offer flexible EMI options with 0% interest for extensive treatments.'
    },
    {
      id: 'item-6',
      q: 'How long does teeth whitening take?',
      a: 'In-office professional teeth whitening takes about 60 to 90 minutes and provides immediate results. We also offer take-home kits for gradual whitening.'
    },
    {
      id: 'item-7',
      q: 'What should I do in a dental emergency?',
      a: 'Contact us immediately. We keep priority slots open for emergencies like severe toothaches, knocked-out teeth, or broken restorations.'
    },
    {
      id: 'item-8',
      q: 'How is digital dentistry different from traditional?',
      a: 'Digital dentistry uses 3D scanners instead of messy impression material, allowing for more precise diagnoses, faster turnaround times, and more predictable outcomes.'
    }
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Text */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeIn>
               <div className="inline-block text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Clear Answers to Your Questions</h2>
              <p className="text-lg text-muted mb-8">
                Find answers to common questions about our clinic, treatments, and patient care here.
              </p>
              <Button asMotion className="mb-12">Learn More</Button>

              {/* Decorative Image */}
              <div className="relative rounded-[var(--radius-card)] overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1598256989414-b52cd1d6d8ee?q=80&w=600&auto=format&fit=crop" 
                  alt="Dental Care" 
                  className="w-full h-64 object-cover" 
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <Accordion.Root 
                type="single" 
                collapsible 
                value={value} 
                onValueChange={setValue}
                className="flex flex-col gap-4"
              >
                {faqs.map((faq) => (
                  <Accordion.Item 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-white border text-left border-gray-100 shadow-sm rounded-xl overflow-hidden transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left focus:outline-none group">
                        <span className={cn(
                          "font-bold text-lg pr-8 transition-colors",
                          value === faq.id ? "text-primary" : "text-dark group-hover:text-primary"
                        )}>
                          {faq.q}
                        </span>
                        <div className={cn(
                          "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 transition-all duration-300",
                          value === faq.id ? "bg-primary border-primary text-white rotate-45" : "bg-transparent text-muted group-hover:border-primary group-hover:text-primary"
                        )}>
                          <Plus className="w-4 h-4" />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden text-muted text-base leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="p-6 pt-0 border-l-2 border-primary ml-6 mb-4">
                        {faq.a}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
