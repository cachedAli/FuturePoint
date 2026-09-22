"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AnimatedStat } from "./animated-stat";

const EASE = [0.22, 1, 0.36, 1] as const;
const leaders = [
  ["Javed Hashmi", "Founder & CEO", "Leads Future Point's strategic vision and operations, backed by more than 20 years across infrastructure, cybersecurity and digital solutions."],
  ["Muhammad Ali Khalid", "Director Sales", "Leads enterprise engagements across data networks, cybersecurity and IT infrastructure, aligning technology with business goals."],
  ["Zahid Mahmood", "Director Operations", "Leads operations, channels and logistics while driving delivery excellence across managed-services contracts."],
  ["Mian Haseeb Tariq", "BU Head South", "Leads consultative technology sales, enterprise accounts and channel development across the southern region."],
] as const;
const credentials = [
  { title: "Networking", description: "Cisco-certified expertise for resilient enterprise connectivity.", highlights: ["CCIE", "CCNA", "CCNP", "CCDA"], items: ["CCIE Routing & Switching", "CCIE Unified Communication", "CCIE Service Provider", "CCNA, CCNP & CCDA"] },
  { title: "Security", description: "Security capability spanning protection, response and assurance.", highlights: ["Trend Micro", "CISM", "PCNSA", "Fortinet"], items: ["TrendAI Cloud, Endpoint, Network & Email Security", "CISM", "Palo Alto Cybersecurity Practitioner & PCNSA", "Fortinet Certified Associate & Fundamentals"] },
  { title: "Infrastructure", description: "Infrastructure expertise across systems, storage and risk management.", highlights: ["Huawei HCIE", "Huawei HCSA", "Huawei HCIA"], items: ["Huawei HCIE", "Huawei HCSA Presales, Storage & Sales", "Huawei HCIA"] },
  { title: "Professional / Delivery", description: "Experienced teams connecting people, practices and delivery.", highlights: ["PMI", "ITIL", "Cloud architecture"], items: ["AutoCAD Engineers", "PMI-trained Project Managers", "ITIL service delivery", "Cloud Architects, Software Engineers & Agile Certified Practitioners"] },
] as const;
const awards = [
  ["2022-23", ["Cisco Emerging Partner of the Year"]],
  ["2023-24", ["Cisco Enterprise Partner of the Year", "Emerging Entrepreneur Firm of the Year"]],
  ["2024-25", ["Cisco Run Rate Partner", "Global Digital Summit Award - ITCN Asia"]],
  ["2025-26", ["Cisco Wireless Solution Partner of the Year", "Pakistan Excellence Award", "Huawei Emerging Partner"]],
] as const;
const latestAwards: ReadonlyArray<{ organization?: string; title: string }> = [
  { organization: "Cisco", title: "Wireless Solution Partner of the Year" },
  { title: "Pakistan Excellence Award" },
  { organization: "Huawei", title: "Emerging Partner" },
] as const;

function Placeholder({ label, ratio, dark = false }: { label: string; ratio: string; dark?: boolean }) {
  return <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, amount: .2 }} transition={{ duration: .9, ease: EASE }} className={`relative flex items-center justify-center overflow-hidden rounded-[16px] border ${dark ? "border-white/15 bg-white/[.035]" : "border-charcoal/15 bg-charcoal/[.035]"}`} style={{ aspectRatio: ratio }}><span className={`text-[10px] font-semibold uppercase tracking-[.2em] ${dark ? "text-white/35" : "text-charcoal/35"}`}>{label}</span></motion.div>;
}
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduce ? 0 : .7, delay: reduce ? 0 : delay, ease: EASE }} className={className}>{children}</motion.div>;
}
export function AboutExperience() {
  const [openCredentialDetails, setOpenCredentialDetails] = useState<Set<string>>(() => new Set());
  const reduce = useReducedMotion();
  const toggleCredentialDetails = (title: string) => setOpenCredentialDetails(current => {
    const next = new Set(current);
    next.has(title) ? next.delete(title) : next.add(title);
    return next;
  });
  return <>
  <section className="overflow-hidden px-5 pt-[120px] sm:px-8 lg:px-12 lg:pt-[140px]"><div className="mx-auto max-w-[1440px]"><Reveal><p className="eyebrow">About Future Point</p><h1 className="mt-5 max-w-[20ch] text-[clamp(3rem,6.2vw,5.75rem)] font-semibold leading-[.94] tracking-[-.055em] text-charcoal">Your Trusted Partner in Scalable IT Infrastructure &amp; Integration.</h1><p className="mt-7 max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">Founded in <strong className="font-bold text-charcoal">2015</strong>, Future Point is a Pakistan-based IT systems integrator delivering networks, cybersecurity, data center and managed services from offices in Lahore, Karachi, Islamabad and Dubai.</p></Reveal></div></section>

  <section className="px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-20">
    <div className="mx-auto max-w-[1440px]">
      <div>
        <Reveal><p className="eyebrow">Our story & purpose</p><h2 className="mt-5 max-w-[16ch] text-[clamp(3rem,5.5vw,5.6rem)] font-semibold leading-[.92] tracking-[-.055em] text-charcoal">Built to solve complex technology challenges.</h2></Reveal>
        <Reveal className="mt-10 max-w-[70ch] sm:mt-12"><p className="text-lg leading-8 text-charcoal/75 sm:text-xl">Future Point brings enterprise business solutions, IT management systems and managed services under one accountable team. Its work is grounded in customer-centric delivery, technical excellence and long-term partnerships.</p></Reveal>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6">
        <Reveal className="rounded-[20px] bg-charcoal px-7 py-9 text-white sm:px-9 sm:py-11"><p className="text-xs font-semibold uppercase tracking-[.2em] text-lime">Our Vision</p><p className="mt-8 max-w-[29ch] text-xl font-semibold leading-[1.3] tracking-[-.025em] sm:text-2xl">To be the partner of choice for businesses worldwide, delivering technology experiences so seamless and impactful that clients do not just grow, they thrive.</p></Reveal>
        <Reveal delay={0.08} className="rounded-[20px] bg-[#ecefe5] px-7 py-9 sm:mt-10 sm:px-9 sm:py-11"><p className="text-xs font-semibold uppercase tracking-[.2em] text-lime-dark">Our Mission</p><p className="mt-8 max-w-[32ch] text-lg leading-8 text-charcoal/75 sm:text-xl">To set and consistently surpass the highest standards in IT service delivery by developing people, refining practices and evolving systems.</p></Reveal>
      </div>
    </div>
  </section>


  <section id="team" className="px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-20">
    <div className="mx-auto max-w-[1440px]">
      <Reveal><p className="eyebrow">Leadership</p><h2 className="chapter-title mt-5 max-w-[18ch]">The people behind Future Point.</h2></Reveal>
      <div className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-10 lg:gap-y-14">{leaders.map(([name, role, bio], i) => <Reveal key={name} delay={i * .05}><article>{/* IMAGE NEEDED: Real leadership portrait of the named person. Consistent editorial lighting and crop, with room around the subject. Portrait aspect ratio approximately 4:3.3. */}<div className="overflow-hidden"><Placeholder label={`${name.toUpperCase()} / PORTRAIT`} ratio="4 / 3.3" /></div><div className="mt-5"><h3 className="text-2xl font-semibold tracking-[-.03em] text-charcoal">{name}</h3><p className="mt-2 text-xs font-semibold uppercase tracking-[.16em] text-charcoal/55">{role}</p><p className="mt-4 max-w-[50ch] text-sm leading-6 text-muted-foreground">{bio}</p></div></article></Reveal>)}</div>
    </div>
  </section>

  <section id="certifications" className="bg-offwhite px-3 pt-16 sm:px-4 sm:pt-20 lg:px-6 lg:pt-20">
    <div className="overflow-hidden rounded-[24px] bg-charcoal-deep px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
    <div className="mx-auto max-w-[1440px]">
      <Reveal><p className="eyebrow">Expertise & certification</p><h2 className="mt-5 max-w-[18ch] text-4xl font-semibold leading-[1.03] tracking-[-.04em] sm:text-5xl">Certified expertise across the technology stack.</h2><p className="mt-7 max-w-[52ch] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">Future Point&apos;s technical capability spans networking, security, infrastructure and professional delivery.</p></Reveal>
      <div className="mt-14 grid border-t border-white/20 sm:grid-cols-2 lg:mt-16">
        {credentials.map((credential, i) => { const isOpen = openCredentialDetails.has(credential.title); return <Reveal key={credential.title} delay={i * .05} className={`border-b border-white/20 py-9 sm:px-8 lg:py-11 ${i % 2 ? "sm:border-l" : "sm:pl-0"}`}><article className="grid grid-rows-[auto_96px_auto]"><p className="text-xs font-semibold uppercase tracking-[.2em] text-lime">{credential.title}</p><p className="pt-6 text-xl font-semibold leading-[1.3] tracking-[-.025em] sm:text-[1.35rem]">{credential.description}</p><div><ul className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-sm font-medium leading-6 text-white/70">{credential.highlights.map(item => <li key={item} className="flex items-baseline gap-2 before:h-1 before:w-1 before:flex-none before:rounded-full before:bg-lime">{item}</li>)}</ul><button type="button" onClick={() => toggleCredentialDetails(credential.title)} aria-expanded={isOpen} className="mt-7 cursor-pointer py-2 text-xs font-medium text-white/50 transition-colors hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime">{isOpen ? "Hide credential details −" : "View credential details +"}</button><AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : .3, ease: EASE }} className="overflow-hidden"><ul className="mt-3 divide-y divide-white/10 border-t border-white/15 text-sm leading-6 text-white/55">{credential.items.map(item => <li key={item} className="py-3">{item}</li>)}</ul></motion.div>}</AnimatePresence></div></article></Reveal> })}
      </div>

      <div className="mt-24 pt-16 lg:mt-28 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,.85fr)] lg:items-center lg:gap-16">
          <Reveal><p className="eyebrow">Industry recognition</p><h2 className="mt-5 max-w-[18ch] text-4xl font-semibold leading-[1.03] tracking-[-.04em] sm:text-5xl">Recognized for the work behind the technology.</h2><p className="mt-7 max-w-[42ch] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">Independent recognition of Future Point&apos;s technology delivery, partnerships and industry work.</p></Reveal>
          <Reveal delay={.08}><div className="relative aspect-[4/3] overflow-hidden rounded-[16px]"><Image src="/award.jpg" alt="Corporate award trophy in an office setting" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover brightness-[.72] saturate-[.72]" /></div></Reveal>
        </div>

        <div className="mt-12 lg:mt-14"><Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/20 pb-5"><p className="eyebrow">Latest recognition</p><p className="text-sm font-medium text-white/55">{awards[3][0]}</p></Reveal><div className="grid lg:grid-cols-3">{latestAwards.map((award, i) => <Reveal key={award.title} delay={i * .07} className={`border-b border-white/15 py-8 lg:border-b-0 lg:py-9 ${i ? "lg:border-l lg:pl-8" : "lg:pr-8"}`}><div className="min-h-[18px]">{award.organization && <p className="text-xs font-semibold uppercase tracking-[.18em] text-lime">{award.organization}</p>}</div><h3 className="mt-4 max-w-[18ch] text-2xl font-semibold leading-[1.16] tracking-[-.03em] sm:text-3xl">{award.title}</h3></Reveal>)}</div></div>

        <div className="mt-14 lg:mt-16"><Reveal><p className="eyebrow">Recognition through the years</p></Reveal><div className="mt-7 grid border-t border-white/20 lg:grid-cols-3">{[...awards.slice(0, 3)].reverse().map(([year, items], i) => <Reveal key={year} delay={i * .07} className={`border-b border-white/15 py-7 lg:border-b-0 lg:py-8 ${i ? "lg:border-l lg:pl-8" : "lg:pr-8"}`}><p className="text-sm font-medium text-white/55">{year}</p><ul className="mt-5 space-y-2 text-base font-semibold leading-snug tracking-[-.02em]">{items.map(item => <li key={item}>{item}</li>)}</ul></Reveal>)}</div></div>
      </div>
    </div></div>
  </section>

  <section id="csr" className="bg-offwhite-warm px-5 pb-8 pt-20 sm:px-8 sm:pb-8 sm:pt-24 lg:px-12 lg:pb-0 lg:pt-28"><div className="mx-auto max-w-[1440px]"><Reveal><p className="eyebrow">Beyond the work</p><h2 className="chapter-title mt-5 max-w-[18ch]">Technology is only part of our impact.</h2><p className="mt-5 max-w-[58ch] text-lg leading-8 text-muted-foreground">In partnership with Let&apos;s Do It, Future Point supports education for orphaned and underprivileged children, environmental responsibility and community relief.</p></Reveal><div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center"><div className="relative aspect-video overflow-hidden rounded-[16px] lg:col-span-8"><Image src="/treesplant.webp" alt="Future Point tree planting activity" fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" /></div><Stat value="3,000" label="Trees planted" className="lg:col-span-3 lg:col-start-10" /><div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-[16px] lg:col-span-5 lg:col-start-2"><Image src="/childEducated.webp" alt="Future Point child education support activity" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" /></div><Stat value="500" label="Children supported in education" className="lg:col-span-3 lg:col-start-8" /><div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[16px] lg:col-span-6 lg:col-start-6"><Image src="/floodRelief.webp" alt="Future Point flood relief activity" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><Stat value="20" label="Flood-relief campaigns" className="lg:col-span-3 lg:col-start-2 lg:row-start-3" /></div></div></section>

</>; }

function Stat({ value, label, className }: { value: string; label: string; className: string }) { return <AnimatedStat target={Number(value.replace(/,/g, ""))} suffix="" suffixAccent="+" label={label} className={`flex flex-col items-center text-center ${className}`} valueClassName="flex min-h-[88px] items-end justify-center whitespace-nowrap font-mono text-[clamp(2.5rem,4.7vw,4.8rem)] font-medium leading-none tracking-[-0.08em] text-charcoal" />; }
