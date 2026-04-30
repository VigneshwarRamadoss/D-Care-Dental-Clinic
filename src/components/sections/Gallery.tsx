import { useState, useRef } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowLeftRight, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImg: string;
  afterImg: string;
  name: string;
  treatment: string;
}

function BeforeAfterCard({ beforeImg, afterImg, name, treatment }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div className="flex flex-col gap-3">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden cursor-ew-resize select-none border border-gray-100 shadow-sm"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-dark/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
          After
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            <ArrowLeftRight className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-dark">{name}</h4>
        <p className="text-sm text-primary font-medium">{treatment}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const gallery = [
    {
      id: 1,
      beforeImg: 'https://images.unsplash.com/photo-1598256989414-b52cd1d6d8ee?q=80&w=800&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
      name: 'Priya',
      treatment: 'Smile Makeover + Veneers'
    },
    {
      id: 2,
      beforeImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop',
      name: 'Ramesh',
      treatment: 'Full Mouth Implants'
    },
    {
      id: 3,
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
      name: 'Karthik',
      treatment: 'Invisalign Treatment'
    },
    {
      id: 4,
      beforeImg: 'https://images.unsplash.com/photo-1594824436951-7f12674268f1?q=80&w=800&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
      name: 'Anitha',
      treatment: 'Teeth Whitening'
    }
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Patients. Real Results.</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Drag the slider to see the transformations.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, i) => (
            <FadeIn key={item.id} delay={0.1 * i}>
              <BeforeAfterCard {...item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:text-dark transition-colors">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
