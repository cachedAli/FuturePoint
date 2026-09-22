"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Solution } from "@/data/solutions";

const EASE = [0.22, 1, 0.36, 1] as const;

const logoMap: Record<string, string> = {
  "Allied Bank": "/logos/customers/allied-bank.png",
  BOP: "/logos/customers/bank-of-punjab.png",
  SBP: "/logos/customers/state-bank-of-pakistan.webp",
  Mindbridge: "/logos/customers/mindbridge.jpg",
  "Mind Bridge": "/logos/customers/mindbridge.jpg",
  MB: "/logos/customers/mindbridge.jpg",
  "DHA Lahore": "/logos/customers/dha-lahore.png",
  PLRA: "/logos/customers/plra.png",
  PITB: "/logos/customers/pitb.png",
  PTCL: "/logos/customers/ptcl.png",
  PSCA: "/logos/customers/psca.png",
  Afiniti: "/logos/customers/afiniti.png",
  DGKC: "/logos/customers/dg-cement.webp",
  "Meezan Bank": "/logos/customers/meezan-bank.png",
  SNGPL: "/logos/customers/sngpl.png",
  "Telenor Pakistan": "/logos/customers/telenor-pakistan.png",
  TWA: "/logos/customers/transworld.png",
};

const deliveryMap: Record<string, { title: string; detail: string }> = {
  "Cisco SD-WAN": {
    title: "Secure branch connectivity",
    detail: "Centrally managed connections between business locations.",
  },
  "Fortinet SD-WAN": {
    title: "Secure branch connectivity",
    detail: "Protected, centrally managed connections between business locations.",
  },
  "Cisco Intersight": {
    title: "Infrastructure management",
    detail: "Centralized visibility and management for data-center infrastructure.",
  },
  "Cisco NDR": {
    title: "Network threat detection",
    detail: "Detection of suspicious activity across the network.",
  },
  "Cisco MFA": {
    title: "Secure sign-in",
    detail: "Additional identity verification for access to business systems.",
  },
  "BeyondTrust PAM": {
    title: "Privileged access protection",
    detail: "Controlled access for sensitive administrator accounts.",
  },
  "TrendMicro XDR": {
    title: "Threat detection and response",
    detail: "Connected detection and response across the security environment.",
  },
  "TrendMicro Server Security": {
    title: "Server protection",
    detail: "Security controls for critical servers and workloads.",
  },
  "Forti Email": {
    title: "Email threat protection",
    detail: "Protection against malicious email and related threats.",
  },
  "Citrix WAF": {
    title: "Web application protection",
    detail: "Protection for public-facing web applications.",
  },
  "300-seat IPCC": {
    title: "300-seat contact center",
    detail: "A large-scale customer-contact environment.",
  },
  "Kiosk Project": {
    title: "Self-service kiosk deployment",
    detail: "A deployed self-service digital access point.",
  },
  "MS Contract": {
    title: "Managed IT support",
    detail: "Ongoing operational support for the IT environment.",
  },
  "Dell VX Rail": {
    title: "Hyperconverged infrastructure",
    detail: "Combined compute, storage, and virtualization infrastructure.",
  },
  "Cisco Hyperflex": {
    title: "Hyperconverged infrastructure",
    detail: "Integrated infrastructure for virtualized workloads.",
  },
  "Cisco UCSX": {
    title: "Modular compute infrastructure",
    detail: "Scalable compute infrastructure for enterprise workloads.",
  },
  "Huawei Block Storage": {
    title: "Enterprise data storage",
    detail: "Centralized storage for business-critical data.",
  },
  "Dell EMC Power Store": {
    title: "Enterprise data storage",
    detail: "Modern storage for business-critical data and applications.",
  },
};

function parse(entry: string) {
  const [tech, customer] = entry.split(/\s+\|\s+/, 2);
  if (!customer) return { tech: entry, customer: "" };

  return { tech: tech.trim(), customer: customer.trim() };
}

function customerParts(customer: string) {
  return customer.split(/\s*(?:,|&)\s*/).filter(Boolean);
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function canonicalCustomer(customer: string) {
  return ["Mindbridge", "Mind Bridge", "MB"].includes(customer)
    ? "Mind Bridge"
    : customer;
}

export function CustomerProof({ solution }: { solution: Solution }) {
  const reduce = useReducedMotion();
  const entries = solution.customerProof.flatMap((entry) => {
    const item = parse(entry);
    const customers = customerParts(item.customer);

    return customers.length > 0
      ? customers.map((customer) => ({ ...item, customer: canonicalCustomer(customer) }))
      : [item];
  });
  const items = entries.reduce<{ customer: string; techs: string[] }[]>(
    (groups, entry) => {
      const match = groups.find((group) => group.customer === entry.customer);
      if (match) {
        match.techs.push(entry.tech);
      } else {
        groups.push({ customer: entry.customer, techs: [entry.tech] });
      }
      return groups;
    },
    [],
  );

  return (
    <div className="mx-auto max-w-[1440px]">
      <motion.p
        initial={{ opacity: 0, y: reduce ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-lime"
      >
        Customer proof
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduce ? 0 : 0.55, ease: EASE, delay: reduce ? 0 : 0.05 }}
        className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal"
      >
        Proven in the field.
      </motion.h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        Real projects that show where Future Point has delivered this type of solution.
      </p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduce ? 0 : 0.6, ease: EASE, delay: reduce ? 0 : 0.1 }}
        className="mt-9 h-px origin-left bg-charcoal/12"
      />
      <div className="mt-6 grid gap-x-4 gap-y-2 md:grid-cols-2 xl:grid-cols-3">
        {items.map((it, i) => {
          const parts = customerParts(it.customer);
          const deliveryTitles = it.techs.map((tech) => deliveryMap[tech]?.title ?? tech);
          const hasMappedDelivery = it.techs.some((tech) => Boolean(deliveryMap[tech]));
          return (
            <motion.article
              key={`${it.customer}-${i}`}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduce ? 0 : 0.45,
                ease: EASE,
                delay: reduce ? 0 : i * 0.07,
              }}
              className="group min-h-[118px] rounded-[10px] border border-charcoal/12 bg-offwhite p-5 transition-colors duration-300 hover:border-charcoal/25 hover:bg-offwhite-warm"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-[58px] w-[92px] shrink-0 items-center justify-start border-r border-charcoal/12 pr-5" aria-label={it.customer}>
                  {parts.map((part) => {
                    const logo = logoMap[part];
                    return logo ? (
                      <img
                        key={part}
                        src={logo}
                        alt={part}
                        className="max-h-11 max-w-[68px] object-contain object-left opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    ) : (
                      <span
                        key={part}
                        aria-label={part}
                        className="text-xs font-semibold uppercase tracking-[0.08em] text-charcoal/65"
                      >
                        {part === "J-ISP" ? "J-ISP" : initials(part)}
                      </span>
                    );
                  })}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-charcoal">
                    {it.customer}
                  </h3>
                  <div className="mt-1">
                    <p className="truncate text-sm text-charcoal/75">
                      {deliveryTitles.join(", ")}
                    </p>
                    {hasMappedDelivery && (
                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {it.techs.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
