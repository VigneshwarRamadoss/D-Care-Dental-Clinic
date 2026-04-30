import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asMotion?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asMotion = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-[var(--radius-button)]";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-md",
      secondary: "bg-secondary text-primary hover:bg-secondary/80",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-accent/10 text-dark",
      white: "bg-white text-primary hover:bg-white/90 shadow-md",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      icon: "h-11 w-11",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asMotion) {
      return (
        <motion.button
          ref={ref as any}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
          {...(props as any)}
        />
      );
    }

    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);
Button.displayName = 'Button';
