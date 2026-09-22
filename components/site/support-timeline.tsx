"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SupportTier } from "@/data/solutions";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SupportTimeline({ tiers }: { tiers: SupportTier[] }) {
  const reduce = useReducedMotion();

  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {tiers.map((t, i) => (
        <motion.li
          key={t.title}
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduce ? 0 : 0.5,
            ease: EASE,
            delay: reduce ? 0 : i * 0.08,
          }}
          className="relative rounded-[16px] border border-charcoal/12 bg-offwhite p-6"
        >
          <h4 className="text-[15px] font-semibold text-charcoal">
            {t.title}
          </h4>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {t.text}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
