import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function StatCounter({ value, suffix = "", prefix = "", duration = 2 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(Math.floor(latest))}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
