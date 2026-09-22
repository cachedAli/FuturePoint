"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Solution } from "@/data/solutions";

const EASE = [0.22, 1, 0.36, 1] as const;

export function BusinessOutcomes({ solution }: { solution: Solution }) {
  const reduce = useReducedMotion();
  const bo = solution.businessOutcomes;

  return (
    <div className="mx-auto max-w-[1440px]">
      <div>
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-lime"
        >
          Business outcomes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: EASE, delay: reduce ? 0 : 0.05 }}
          className="mt-4 max-w-[18ch] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white"
        >
          {bo.heading}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduce ? 0 : 0.45, ease: EASE, delay: reduce ? 0 : 0.1 }}
        className="mt-10 grid border-t border-white/15 sm:grid-cols-3"
      >
        {bo.outcomes.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduce ? 0 : 0.4,
              ease: EASE,
              delay: reduce ? 0 : 0.12 + i * 0.08,
            }}
            className="group border-b border-white/15 px-1 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[210px] sm:border-b-0 sm:px-6 sm:py-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-white/15"
          >
            <p className="text-xs font-semibold tabular-nums tracking-[0.16em] text-lime">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-7 text-xl font-semibold leading-tight text-white">
              {o.label}
            </h3>
            <p className="mt-4 max-w-[30ch] text-sm leading-6 text-silver">
              {o.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
