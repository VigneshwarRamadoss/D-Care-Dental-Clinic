import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({ children, delay = 0, className, direction = 'up' }: FadeInProps) {
  const directionOffset = 40;
  
  let initialY = 0;
  let initialX = 0;
  
  if (direction === 'up') initialY = directionOffset;
  if (direction === 'down') initialY = -directionOffset;
  if (direction === 'left') initialX = directionOffset;
  if (direction === 'right') initialX = -directionOffset;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
