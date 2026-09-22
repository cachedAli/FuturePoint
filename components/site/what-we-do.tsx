"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/data/site-content";

export function WhatWeDo() {
  const reduce = useReducedMotion();
  const { whatWeDo } = siteContent;

  return (
    <section className="bg-offwhite py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-lime">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-charcoal sm:text-4xl lg:text-5xl">
              {whatWeDo.heading}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
              {whatWeDo.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: "easeOut" }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] border border-charcoal/10"
          >
            <Image
              src="/whatWeDo.jpg"
              alt="Future Point engineers deploying integrated IT infrastructure across networks, cybersecurity, data center and managed services"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
