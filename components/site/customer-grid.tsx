"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  customers,
  customerFilters,
  type Customer,
  type CustomerCategory,
} from "@/data/customers";
import { siteContent } from "@/data/site-content";

const EASE = [0.22, 1, 0.36, 1] as const;

type Filter = "All" | CustomerCategory;

export function CustomerGrid() {
  const reduce = useReducedMotion();
  const { eyebrow, heading, body, cta } = siteContent.customersPreview;
  const [active, setActive] = useState<Filter>("All");

  const featured = customers.filter((c) => c.featured);
  const totalCount = customers.length;
  const moreCount = totalCount - featured.length;

  const filtered =
    active === "All"
      ? featured
      : featured.filter((c) => c.category === active);

  return (
    <section className="relative mx-0 my-3 overflow-hidden rounded-none bg-[#0d0d0c] px-5 py-10 sm:mx-4 sm:my-4 sm:rounded-[24px] sm:px-12 sm:py-16 lg:mx-6">
      <div className="hero-motif" aria-hidden="true">
        <div className="hero-motif__dots" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#97C459]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[2rem] font-semibold leading-tight text-white">
            {heading}
          </h2>
          <p className="mt-3 text-sm text-[#85837a]">{body}</p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {customerFilters.map((f) => {
            const isActive = f === active;
            const base =
              "cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] transition-colors duration-200";
            const activeCls = "border-[#97C459] bg-[#97C459] text-[#0d0d0c]";
            const inactiveCls = "border-[#333] text-[#85837a] hover:text-white";

            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`${base} ${isActive ? activeCls : inactiveCls}`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <motion.div
          className="mt-8 grid overflow-hidden rounded-[16px] border border-[#1a1a18]"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                layout
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 6 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: -6 }}
                transition={{
                  duration: reduce ? 0.2 : 0.35,
                  ease: EASE,
                  delay: reduce ? 0 : Math.min(i * 0.03, 0.3),
                }}
                className={`group relative flex min-h-[112px] items-center justify-center p-6 transition-[background-color,box-shadow] duration-[280ms] ease-out group-hover:bg-[#1c1c19] group-hover:shadow-[inset_0_0_0_1px_rgba(151,196,89,0.25)] group-hover:duration-200 ${
                  c.unverified
                    ? "border border-dashed border-[#2a2a26]"
                    : "border-b border-r border-[#1a1a18] bg-[#131311]"
                }`}
              >
                {c.unverified ? (
                  <span className="rounded border border-dashed border-[#3a3a35] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5a5a55]">
                    Logo pending
                  </span>
                ) : (
                  <LogoCell name={c.name} logo={c.logoFile} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8">
          <Link
            href={cta.href}
            className="group inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#85837a] transition-colors hover:text-white"
          >
            <span className="font-semibold text-[#97C459]">
              +{moreCount} more clients
            </span>
            <span>
              across banking, telecom, public sector and enterprise
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-[#97C459]">
              {cta.label}
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LogoCell({ name, logo }: { name: string; logo: string | null }) {
  const [errored, setErrored] = useState(false);
  const showLogo = logo && !errored;

  if (showLogo) {
    return (
      <img
        src={logo}
        alt={name}
        onError={() => setErrored(true)}
        className="max-h-10 w-auto max-w-[130px] object-contain"
      />
    );
  }

  return (
    <span className="text-center text-sm font-semibold uppercase leading-tight tracking-[0.04em] text-[#85837a]">
      {name}
    </span>
  );
}
