"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedStatProps {
  target: number;
  suffix: string;
  suffixAccent?: string;
  label: string;
  className?: string;
  valueClassName?: string;
}

export function AnimatedStat({ target, suffix, suffixAccent, label, className, valueClassName }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value).toString());

  useEffect(() => {
    if (!inView) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(count, target, {
      duration: reducedMotion ? 0 : 1.6,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count, inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.65 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className ?? "flex min-h-[190px] flex-col border-t border-charcoal/15 px-5 py-7 sm:px-7 md:border-l md:border-t-0 md:first:border-l-0"}
    >
      <div className={valueClassName ?? "flex min-h-[88px] items-end whitespace-nowrap font-mono text-[clamp(2.5rem,4.7vw,4.8rem)] font-medium leading-none tracking-[-0.08em] text-charcoal"}>
        <motion.span>{rounded}</motion.span>
        {suffix ? <span>{suffix}</span> : null}
        {suffixAccent ? <span className="text-lime">{suffixAccent}</span> : null}
      </div>
      <p className="mt-5 min-h-[50px] max-w-[220px] text-xs font-medium uppercase leading-5 tracking-[0.08em] text-charcoal/55">{label}</p>
    </motion.div>
  );
}
