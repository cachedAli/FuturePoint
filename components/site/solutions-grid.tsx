"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SolutionCard {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
}

const cards: SolutionCard[] = [
  {
    title: "Networks & Infrastructure",
    description:
      "Secure, modern network foundations for hybrid and distributed organizations.",
    tags: ["SD-WAN", "Wireless", "Network Automation"],
    href: "/solutions/networks-infrastructure",
    image: "/networkInfra.jpg",
    imageAlt:
      "Engineer configuring enterprise server and network infrastructure in a data center",
  },
  {
    title: "Cybersecurity",
    description:
      "Layered security designed to detect, protect and respond to evolving threats.",
    tags: ["SASE", "EDR", "SIEM"],
    href: "/solutions/cybersecurity",
    image: "/cybersecurity.jpg",
    imageAlt:
      "Security operations analyst monitoring threats on a SOC workstation",
  },
  {
    title: "Managed Services",
    description:
      "24x7 monitoring, support and operations for always-on IT environments.",
    tags: ["NOC", "SOC", "Virtual CISO"],
    href: "/solutions/managed-services",
    image: "/managedServices.jpg",
    imageAlt:
      "IT operations team monitoring managed infrastructure from a control room",
  },
  {
    title: "Data Center & Storage",
    description: "Resilient infrastructure for mission-critical workloads.",
    tags: ["HCI", "Backup & Recovery", "Virtualization"],
    href: "/solutions/data-center-storage",
    image: "/dataCenter.jpg",
    imageAlt:
      "Large enterprise data center with rows of server racks and storage systems",
  },
];

export function SolutionsGrid() {
  const reduce = useReducedMotion();

  const headerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const headerItem: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.6, ease: EASE } },
  };

  const gridContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.15 } },
  };
  const cardItem: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.7, ease: EASE } },
  };

  const cardHover: Variants = {
    rest: { y: 0 },
    hover: { y: reduce ? 0 : -4 },
  };
  const imageHover: Variants = {
    rest: { scale: 1 },
    hover: { scale: reduce ? 1 : 1.03 },
  };
  const arrowHover: Variants = {
    rest: { x: 0 },
    hover: { x: reduce ? 0 : 6 },
  };
  const accentHover: Variants = {
    rest: { opacity: 0, scaleX: reduce ? 1 : 0 },
    hover: { opacity: 1, scaleX: 1 },
  };

  return (
    <section className="bg-offwhite py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <motion.span
            variants={headerItem}
            className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-lime"
          >
            Solutions
          </motion.span>
          <motion.h2
            variants={headerItem}
            className="section-title mt-5 text-charcoal"
          >
            Technology built for complex IT environments.
          </motion.h2>
          <motion.p
            variants={headerItem}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Future Point integrates networks, cybersecurity, managed services and
            infrastructure to build secure, resilient IT environments for complex
            organizations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:mt-20"
        >
          {cards.map((card) => (
            <motion.div
              key={card.href}
              variants={cardItem}
            >
              <Link
                href={card.href}
                aria-label={`Explore ${card.title} solution`}
                className="group block h-full"
              >
                <motion.div
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  variants={cardHover}
                  transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                  className="flex h-full flex-col overflow-hidden rounded-[16px] border border-charcoal/12 transition-colors duration-500 group-hover:border-charcoal/25"
                >
                  <motion.div
                    initial={{ clipPath: reduce ? "inset(0%)" : "inset(8% 8% 8% 8%)", opacity: reduce ? 1 : 0 }}
                    whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: reduce ? 0 : 0.65, ease: EASE }}
                    className="relative aspect-video w-full overflow-hidden bg-charcoal/5"
                  >
                    <motion.div variants={imageHover} transition={{ duration: reduce ? 0 : 0.7, ease: EASE }} className="absolute inset-0">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  <div className="flex flex-1 flex-col px-6 py-7 sm:px-7 sm:py-8">
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-charcoal sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 min-h-[3rem] max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {card.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-charcoal">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-charcoal/20 bg-charcoal/10 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-3 border-t border-charcoal/10 pt-5">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-lime">
                        Explore Solution
                      </span>
                      <motion.span
                        variants={arrowHover}
                        transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                        className="text-lime"
                      >
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </motion.span>
                      <motion.span
                        variants={accentHover}
                        transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                        className="ml-auto h-px w-10 origin-right bg-lime"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
