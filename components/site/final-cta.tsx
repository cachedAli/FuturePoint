"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/site-content";

const EASE = [0.22, 1, 0.36, 1] as const;

function renderHeading(text: string, accent?: string) {
  const ws = text.split(" ");
  const accentWord = accent ?? ws[ws.length - 1];
  return ws.map((w, i) =>
    w === accentWord ? (
      <span key={i} className="text-lime whitespace-nowrap">
        {w}
      </span>
    ) : (
      <span key={i}>{w} </span>
    ),
  );
}

export function FinalCta({
  heading,
  highlight,
  body,
  cta,
  surfaceClassName = "bg-offwhite",
}: {
  heading?: string;
  highlight?: string;
  body?: string;
  cta?: { label: string; href: string };
  surfaceClassName?: string;
} = {}) {
  const reduce = useReducedMotion();
  const { eyebrow, heading: defaultHeading, body: defaultBody, cta: defaultCta } =
    siteContent.finalCta;
  const displayHeading = heading ?? defaultHeading;
  const displayBody = body ?? defaultBody;
  const displayCta = cta ?? defaultCta;

  const panelV = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: EASE,
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
        },
      };

  const itemV = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE },
        },
      };

  const patternV = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1.2, ease: EASE } },
      };

  const words = displayHeading.split(" ");

  return (
    <section className={`${surfaceClassName} px-0 py-12 sm:px-8 sm:py-16`}>
      <motion.div
        variants={panelV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-none bg-charcoal-deep px-8 py-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] sm:rounded-[24px] sm:px-12 sm:py-16 lg:px-16 lg:py-20"
      >
        {/* subtle brand dot-matrix, spreading across the card background */}
        <motion.div
          variants={patternV}
          className="hero-motif hero-motif--cta"
          aria-hidden="true"
        >
          <div className="hero-motif__dots" />
        </motion.div>

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.7fr_1fr]">
          {/* LEFT */}
          <div>
            <motion.p
              variants={itemV}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-lime"
            >
              {eyebrow}
            </motion.p>

            <motion.h2
              variants={itemV}
              className="mt-5 max-w-[760px] text-[clamp(2.25rem,5.5vw,3.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.03em] text-white"
            >
              {heading ? (
                renderHeading(displayHeading, highlight)
              ) : (
                <>
                  {words[0]} {words[1]} {words[2]}{" "}
                  <span className="text-lime whitespace-nowrap">{words[3]}</span>{" "}
                  {words[4]}
                </>
              )}
            </motion.h2>

            <motion.p
              variants={itemV}
              className="mt-6 max-w-[44ch] text-[15px] leading-7 text-silver"
            >
              {displayBody}
            </motion.p>
          </div>

          {/* RIGHT - single CTA only */}
          <div className="flex flex-col items-start">
            <motion.div variants={itemV}>
              <Link
                href={displayCta.href}
                className="group inline-flex items-center gap-2 rounded-md border border-lime bg-lime px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal-deep transition-all duration-300 hover:bg-transparent hover:text-lime"
              >
                {displayCta.label}
                <ArrowUpRight className="size-4 text-charcoal-deep transition-colors group-hover:text-lime" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
