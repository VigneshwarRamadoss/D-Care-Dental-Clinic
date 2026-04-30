import { FadeIn } from '@/components/ui/FadeIn';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Auto play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  const reviews = [
    {
      id: 1,
      text: "Dr. Srividya and her team are exceptional. My implant procedure was completely painless and the results look completely natural. Best clinic in Chennai.",
      author: "Ramesh K.",
      initial: "R",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      id: 2,
      text: "My daughter was terrified of dentists. The pediatric team here changed everything — she now actually looks forward to her appointments!",
      author: "Priya M.",
      initial: "P",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      text: "Got my smile makeover done here. The digital planning process was impressive and the final result exceeded my expectations.",
      author: "Arun T.",
      initial: "A",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      text: "Extremely professional doctors and a very hygienic clinic. The transparent pricing and clear explanations made me feel completely at ease.",
      author: "Sneha V.",
      initial: "S",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="reviews" className="section-padding bg-dark text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              Patient Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Smiles Reimagined
            </h2>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm leading-none mb-1">4.8/5 on Google</span>
                <span className="text-white/60 text-xs leading-none">Based on 500+ reviews</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn className="hidden md:flex gap-3">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-sm",
                canScrollPrev ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-dark" : "bg-transparent border-white/10 text-white/30 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-sm",
                canScrollNext ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-dark" : "bg-transparent border-white/10 text-white/30 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0" direction="none">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6 items-stretch">
              {reviews.map((review) => (
                <div key={review.id} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6 py-4">
                  <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/10 shadow-2xl h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-500">
                    {/* Oversized Quote Watermark */}
                    <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    
                    <div className="flex gap-1.5 mb-6 relative z-10">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-10 flex-1 relative z-10 font-medium">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10 mt-auto">
                      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg bg-gradient-to-br", review.gradient)}>
                        {review.initial}
                      </div>
                      <div>
                        <div className="font-bold text-white text-base tracking-wide">{review.author}</div>
                        <div className="flex items-center gap-1.5 text-xs text-primary-300 font-medium text-white/60">
                          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Verified Patient
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
