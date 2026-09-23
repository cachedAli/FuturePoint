"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AnimatedStat } from "@/components/site/animated-stat";
import {
  customers,
  engagements,
  engagementCategories,
  type EngagementCategory,
} from "@/data/customers";

const EASE = [0.22, 1, 0.36, 1] as const;
const INITIAL_ENGAGEMENTS = 8;

type Filter = "all" | EngagementCategory;

function filterFromQuery(value: string | null): Filter {
  return engagementCategories.some((category) => category.id === value)
    ? (value as EngagementCategory)
    : "all";
}

function FilterLabel({ category }: { category: EngagementCategory }) {
  return (
    engagementCategories.find((item) => item.id === category)?.label ?? category
  );
}

export function CustomersExperience() {
  const reduce = useReducedMotion();
  const searchParams = useSearchParams();
  const queryFilter = filterFromQuery(searchParams.get("category"));
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);
  const [showAll, setShowAll] = useState(false);
  const active = selectedFilter ?? queryFilter;

  const filtered = useMemo(
    () => engagements.filter((engagement) => active === "all" || engagement.category === active),
    [active],
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_ENGAGEMENTS);
  const trustedCustomers = customers.filter((customer) => !customer.unverified);
  const trustedCustomerGroups = [
    { label: "Banking & financial services", categories: ["Financial"] },
    { label: "Telecommunications", categories: ["Telecom"] },
    { label: "Government, public sector & education", categories: ["Public Sector"] },
    { label: "Enterprise & industrial", categories: ["Enterprise"] },
  ].map((group) => ({
    ...group,
    customers: trustedCustomers.filter((customer) => group.categories.includes(customer.category)),
  }));

  function selectFilter(filter: Filter) {
    setSelectedFilter(filter);
    setShowAll(false);
  }

  return (
    <>
      <section className="px-5 pb-10 pt-[120px] sm:px-8 sm:pb-12 lg:px-12 lg:pb-14 lg:pt-[140px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-lime"
            >
              Our experience
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: EASE, delay: reduce ? 0 : 0.06 }}
              className="page-title mt-5 text-charcoal"
            >
              <span className="block">Technology delivered</span>
              <span className="block">in the real world.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.55, ease: EASE, delay: reduce ? 0 : 0.12 }}
              className="mt-7 max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              From enterprise networking and cybersecurity to managed services and
              data center infrastructure, Future Point has delivered technology
              solutions across complex IT environments.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(200px,0.38fr)_minmax(0,1fr)] lg:gap-20">
            <AnimatedStat
              target={500}
              suffix=""
              suffixAccent="+"
              label="Projects delivered nationally & internationally"
              className="pt-5"
              valueClassName="flex items-end whitespace-nowrap text-[clamp(3.75rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.07em] text-charcoal"
            />
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: reduce ? 0 : 0.2 } },
              }}
              className="pt-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                Experience across
              </p>
              <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-10">
                {engagementCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={{
                      hidden: { opacity: 0, y: reduce ? 0 : 8 },
                      show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.4, ease: EASE } },
                    }}
                    className="border-b border-charcoal/10 last:border-b-0 sm:border-b-0"
                  >
                    <Link
                      href={category.href}
                      className="group flex items-center gap-4 py-3 text-[15px] font-semibold text-charcoal transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-offwhite"
                    >
                      <span className="text-[11px] font-semibold tracking-[0.14em] text-lime">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {category.solutionLabel}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12 lg:px-12 lg:pb-12 lg:pt-14">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Customer projects"
            heading="Technology we&apos;ve delivered for our customers."
            body="Selected Future Point projects showing the customer, technology delivered, and area of expertise."
          />

          <div className="mt-10 flex gap-6 overflow-x-auto sm:mt-12">
            {(["all", ...engagementCategories.map((category) => category.id)] as Filter[]).map((filter) => {
              const isActive = filter === active;
              const label = filter === "all" ? "All" : <FilterLabel category={filter} />;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => selectFilter(filter)}
                  className={`relative flex min-h-11 shrink-0 cursor-pointer items-center px-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-offwhite ${
                    isActive ? "text-charcoal" : "text-charcoal/50 hover:text-charcoal"
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                  {isActive && <motion.span layoutId="customer-project-filter" className="absolute inset-x-0 bottom-0 h-0.5 bg-lime" transition={{ duration: reduce ? 0 : 0.25, ease: EASE }} />}
                </button>
              );
            })}
          </div>

          <div className="mt-3 hidden grid-cols-[68px_minmax(0,1.1fr)_minmax(0,0.8fr)_160px] items-center gap-6 border-y border-charcoal/12 px-5 py-3 sm:grid">
            <p className="col-span-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
              Customer
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
              Technology / Project
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">
              Capability
            </p>
          </div>

          <motion.div layout className="border-t border-charcoal/12 sm:border-t-0">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((engagement, index) => {
                const category = engagementCategories.find((item) => item.id === engagement.category)!;
                return (
                  <motion.article
                    layout
                    key={`${engagement.category}-${engagement.customer}-${engagement.project}`}
                    initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                    transition={{ duration: reduce ? 0 : 0.4, ease: EASE, delay: reduce ? 0 : Math.min(index * 0.045, 0.3) }}
                    className="group grid grid-cols-[68px_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-charcoal/12 py-6 transition-colors duration-300 hover:border-charcoal/25 hover:bg-offwhite-warm sm:grid-cols-[68px_minmax(0,1.1fr)_minmax(0,0.8fr)_160px] sm:items-center sm:gap-6 sm:px-5"
                  >
                    <div className="flex h-10 items-center">
                      {engagement.logoFile ? (
                        <Image src={engagement.logoFile} alt={engagement.customer} width={72} height={40} className="max-h-10 w-auto max-w-[72px] object-contain object-left" />
                      ) : (
                        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/55">{engagement.customer}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-charcoal transition-transform duration-300 group-hover:translate-x-0.5 sm:text-xl">
                      {engagement.customer}
                    </h3>
                    <p className="col-span-full text-base text-muted-foreground sm:col-auto sm:text-[16px]">{engagement.project}</p>
                    <p className="col-span-full text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal/60 sm:col-auto">
                      {category.solutionLabel}
                    </p>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
          {filtered.length > INITIAL_ENGAGEMENTS && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-offwhite"
            >
              {showAll ? "Show fewer" : "View more projects"}
              <ArrowRight className={`size-4 text-charcoal transition-colors group-hover:text-lime ${showAll ? "-rotate-90" : ""}`} />
            </button>
          )}
        </div>
      </section>

      <section className="px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Customer network"
            heading="Trusted across industries."
            body="Organizations across banking, telecommunications, government, education and enterprise have trusted Future Point with critical technology initiatives."
          />
          <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-14">
            {trustedCustomerGroups.map((group) => (
              <motion.section
                key={group.label}
                aria-labelledby={`industry-${group.label.replaceAll(" ", "-").toLowerCase()}`}
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
              >
                <h3 id={`industry-${group.label.replaceAll(" ", "-").toLowerCase()}`} className="border-b border-charcoal/15 pb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/65">
                  {group.label}
                </h3>
                <div className="grid grid-cols-2 border-l border-t border-charcoal/12 sm:grid-cols-3 lg:grid-cols-6">
                  {group.customers.map((customer, index) => (
                    <motion.div
                      key={customer.slug}
                      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: EASE, delay: reduce ? 0 : Math.min(index * 0.025, 0.2) }}
                      className="group flex min-h-[118px] items-center justify-center border-b border-r border-charcoal/12 p-5 transition-colors duration-300 hover:border-charcoal/25 hover:bg-offwhite-warm"
                    >
                      {customer.logoFile ? <Image src={customer.logoFile} alt={customer.name} width={130} height={48} className="max-h-12 w-auto max-w-[130px] object-contain" /> : <span className="text-center text-sm font-semibold text-charcoal/60">{customer.name}</span>}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, heading, body, dark = false }: { eyebrow: string; heading: string; body?: string; dark?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={{ opacity: 0, y: reduce ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.55, ease: EASE }} className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">{eyebrow}</p>
      <h2 className={`section-title mt-5 ${dark ? "text-white" : "text-charcoal"}`}>{heading}</h2>
      {body && <p className={`mt-5 max-w-[60ch] text-base leading-7 sm:text-lg ${dark ? "text-silver" : "text-muted-foreground"}`}>{body}</p>}
    </motion.div>
  );
}
