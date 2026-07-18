import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numeric, { duration: 1.8, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, numeric, count]);

  return (
    <motion.p ref={ref} className="font-display text-6xl text-[#d9b464] sm:text-7xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.p>
  );
}
