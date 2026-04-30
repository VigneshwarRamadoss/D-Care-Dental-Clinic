import { FadeIn } from './FadeIn';
import { OptimizedImage } from './OptimizedImage';

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function PageHeader({ title, description, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px] z-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeIn>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-40"></div>
    </div>
  );
}
