import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export function OptimizedImage({ className, wrapperClassName, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-gray-100 w-full h-full", wrapperClassName)}>
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-300 z-0", 
          isLoaded || hasError ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-muted text-xs font-medium text-center p-4">
          Image currently unavailable
        </div>
      ) : (
        <img
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500 relative z-10",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </div>
  );
}
