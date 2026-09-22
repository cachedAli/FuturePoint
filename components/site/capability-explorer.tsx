"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import type { SolutionCapability } from "@/data/solutions";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CapabilityExplorer({
  capabilities,
  image,
}: {
  capabilities: SolutionCapability[];
  image: string;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const cap = capabilities[active];

  const enter = (y: number, delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: reduce ? 0 : 0.6, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <div className="mx-auto max-w-[1440px]">
      <motion.p
        {...enter(10)}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-lime"
      >
        Our Capabilities
      </motion.p>
      <motion.h2
        {...enter(15, 0.05)}
        className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-charcoal"
      >
        What we deliver
      </motion.h2>

      {/* DESKTOP - split index / active content */}
      <div className="mt-8 hidden lg:grid lg:grid-cols-[minmax(220px,0.27fr)_minmax(270px,0.33fr)_minmax(360px,0.4fr)] lg:gap-8 xl:gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
        >
          {capabilities.map((c, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={c.label}
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: reduce ? 0 : 0.5, ease: EASE },
                  },
                }}
                className={`group flex w-full cursor-pointer items-center gap-4 border-t border-charcoal/12 py-5 pl-4 pr-2 text-left transition-colors last:border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite ${
                  isActive ? "border-l-2 border-lime" : "border-l-2 border-transparent"
                }`}
              >
                <span
                  className={`text-xs font-semibold tabular-nums transition-colors ${
                    isActive
                      ? "text-lime"
                      : "text-charcoal/40 group-hover:text-charcoal/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-sm font-semibold uppercase tracking-[0.04em] transition-colors ${
                    isActive
                      ? "text-charcoal"
                      : "text-charcoal/55 group-hover:text-charcoal"
                  }`}
                >
                  {c.label}
                </span>
                {isActive && <ArrowRight className="size-4 shrink-0 text-lime" />}
              </motion.button>
            );
          })}
        </motion.div>

        <div className="relative self-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: reduce ? 0 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -10 }}
              transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
            >
              <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-[-0.01em] text-charcoal">
                {cap.label}
              </h3>
              {cap.summary && (
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {cap.summary}
                </p>
              )}
              <ul className="mt-7 overflow-hidden rounded-[12px] border border-charcoal/10 bg-offwhite">
                {cap.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 border-b border-charcoal/10 px-5 py-4 text-sm leading-6 text-charcoal/75 last:border-b-0"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: reduce ? 0 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -10 }}
              transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
              className="h-full"
            >
              <div className="h-full min-h-[420px] overflow-hidden rounded-[16px] bg-charcoal-deep shadow-[0_18px_45px_-30px_rgba(28,38,46,0.55)]">
                <img
                  src={cap.image ?? image}
                  alt={cap.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE - editorial accordion */}
      <div className="mt-6 lg:hidden">
        {capabilities.map((c, i) => {
          const isActive = i === active;
          return (
            <div key={c.label} className="border-t border-charcoal/12 last:border-b">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 pl-4 pr-1 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`text-xs font-semibold tabular-nums ${
                      isActive ? "text-lime" : "text-charcoal/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-semibold uppercase tracking-[0.04em] ${
                      isActive ? "text-charcoal" : "text-charcoal/60"
                    }`}
                  >
                    {c.label}
                  </span>
                </span>
                {isActive ? (
                  <Minus className="size-4 shrink-0 text-lime" />
                ) : (
                  <Plus className="size-4 shrink-0 text-charcoal/40" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-4">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-charcoal/5">
                        <img
                          src={c.image ?? image}
                          alt={c.label}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {c.summary && (
                        <p className="mt-5 max-w-[52ch] text-base leading-7 text-muted-foreground">
                          {c.summary}
                        </p>
                      )}
                      <ul className="mt-5">
                        {c.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 border-t border-charcoal/10 py-3.5 text-sm leading-6 text-charcoal/75"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
