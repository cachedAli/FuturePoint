"use client";

import { motion, useReducedMotion } from "framer-motion";
import { partnerCategories } from "@/data/partners";
import { siteContent } from "@/data/site-content";

const logoMap: Record<string, string | null> = {
  Cisco: "/partners/cisco.svg",
  H3C: null,
  F5: "/partners/f5.svg",
  Fortinet: "/partners/fortinet.svg",
  "Palo Alto Networks": "/partners/palo-alto-networks.svg",
  "Trend Micro": "/partners/trend-micro.svg",
  CrowdStrike: null,
  Forcepoint: null,
  BeyondTrust: null,
  Dahua: null,
  "Dell Technologies": "/partners/dell-technologies.svg",
  Nutanix: "/partners/nutanix.svg",
  Commvault: null,
  Sangfor: null,
  IBM: "/partners/ibm.svg",
};

const sectionEase = [0.22, 1, 0.36, 1] as const;

export function PartnerGrid() {
  const reduce = useReducedMotion();
  const { eyebrow, heading, body } = siteContent.technologyEcosystem;

  const sectionVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const fadeUp = (y: number) => ({
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: sectionEase },
    },
  });

  const categoryVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: sectionEase },
    },
  };

  return (
    <section className="relative overflow-hidden bg-offwhite py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp(12)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-lime"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp(20)}
            className="mt-5 max-w-[18ch] text-[clamp(2rem,3.6vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={fadeUp(14)}
            className="mt-5 max-w-[58ch] text-base leading-7 text-muted-foreground"
          >
            {body}
          </motion.p>

          <motion.div
            variants={fadeUp(24)}
            className="mt-14 overflow-hidden rounded-[20px] border border-border bg-offwhite transition-colors duration-300 hover:border-charcoal-light"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-9">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                Our Technology Partners
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                15 Partners
              </span>
            </div>

            <motion.div
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {partnerCategories.map((group, idx) => (
                <motion.div
                  key={group.name}
                  variants={categoryVariants}
                  className={`grid gap-7 px-6 py-9 sm:px-9 lg:grid-cols-[280px_1fr] ${
                    idx < partnerCategories.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-semibold tabular-nums text-lime">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                        {group.name}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-[34ch] text-sm leading-6 text-muted-foreground">
                      {group.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-10 gap-y-7 sm:gap-x-14">
                    {group.partners.map((name) => {
                      const logo = logoMap[name];
                      return (
                        <div
                          key={name}
                          className="group relative inline-flex cursor-default items-center pb-1.5"
                        >
                          {logo ? (
                            <img
                              src={logo}
                              alt={name}
                              className="h-8 w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 ease-out group-hover:-translate-y-px group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
                            />
                          ) : (
                            <span className="text-sm font-semibold uppercase tracking-[0.06em] text-charcoal/55 transition-all duration-300 ease-out group-hover:-translate-y-px group-hover:text-charcoal">
                              {name}
                            </span>
                          )}
                          <span className="absolute -bottom-0 left-0 h-px w-0 bg-lime transition-all duration-300 ease-out group-hover:w-full" />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
