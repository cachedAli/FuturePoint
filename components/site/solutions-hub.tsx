"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutions, hubContent, type Solution } from "@/data/solutions";
import { partnerLogos } from "@/data/partners";
import { PartnerLogoGrid } from "./partner-logo-grid";
import { Reveal } from "./reveal";
import { FinalCta } from "./final-cta";

const EASE = [0.22, 1, 0.36, 1] as const;

function SolutionCard({ s, index }: { s: Solution; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.6, ease: EASE, delay: reduce ? 0 : index * 0.08 }}
    >
      <Link href={`/solutions/${s.slug}`} className="group block">
        <motion.div
          layoutId={`sol-hero-${s.slug}`}
          className="relative aspect-video overflow-hidden rounded-[16px]"
        >
          <img
            src={s.heroImage}
            alt={s.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>

        <h3 className="mt-5 text-xl font-semibold text-charcoal">{s.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {s.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-charcoal/20 bg-charcoal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-charcoal"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition-colors duration-200 group-hover:text-lime">
          Explore Solution
          <ArrowRight className="size-4 text-charcoal transition-colors group-hover:text-lime" />
        </span>
      </Link>
    </motion.div>
  );
}

export function SolutionsHub() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-offwhite">
      {/* HERO */}
      <section className="px-5 pb-16 pt-[120px] sm:px-8 sm:pb-24 lg:px-12 lg:pt-[140px]">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
          className="mx-auto max-w-[1440px]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            {hubContent.eyebrow}
          </p>
          <h1 className="page-title mt-5 max-w-[18ch] text-charcoal">
            {hubContent.headline}
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-7 text-muted-foreground">
            {hubContent.intro}
          </p>
        </motion.div>
      </section>

      {/* 4-CARD GRID */}
      <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <SolutionCard key={s.slug} s={s} index={i} />
          ))}
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM STRIP */}
      <section className="bg-offwhite px-5 py-16 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-[1440px]">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            Technology Ecosystem
          </p>
          <p className="mx-auto mt-3 max-w-[60ch] text-center text-base leading-7 text-muted-foreground">
            A curated stack of best-in-class platforms, delivered and supported by
            one accountable partner.
          </p>
          <div className="mt-12">
            <PartnerLogoGrid names={partnerLogos} count={16} />
          </div>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <FinalCta heading="Talk to a Solutions Expert" />
    </div>
  );
}
