"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { Shield, Package, Users, CheckCircle } from "lucide-react";

const CARDS = [
  {
    title: "Expertise & Reach",
    body: "Security and compliance built into every layer, not bolted on after.",
    micro: "Senior architects stay on your project from design to go-live.",
    icon: Shield,
    iconColor: "#55534c",
  },
  {
    title: "Turnkey Solutions",
    body: "Full lifecycle ownership, delivered on time and on budget.",
    micro: "One team owns requirements, build, training and support.",
    icon: Package,
    iconColor: "#55534c",
  },
  {
    title: "Customer-Centric",
    body: "We deliver outcomes aligned to your goals and your users, not just a scope.",
    micro: "We measure success by your results, not our deliverables.",
    icon: Users,
    iconColor: "#55534c",
  },
  {
    title: "End-to-End Ownership",
    body: "One accountable partner from planning through go-live and beyond.",
    micro: "A single point of accountability, with no hand-offs to third parties.",
    icon: CheckCircle,
    iconColor: "#55534c",
  },
];

export function ValueProps() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative mx-0 my-3 overflow-hidden rounded-none bg-[#0d0d0c] py-12 sm:mx-4 sm:my-4 sm:rounded-[24px] sm:py-16 lg:mx-6"
      aria-labelledby="why-future-point-heading"
    >
      {/* Dot-matrix background (reusing hero's pattern via CSS classes) */}
      <div className="hero-motif" aria-hidden="true">
        <div className="hero-motif__dots" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-5 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div id="why-future-point-heading">
            <p className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-[#97C459] mb-4">
               WHY FUTURE POINT
            </p>

            <h2 className="mt-4 text-[32px] sm:text-[36px] font-semibold text-white leading-[1.25] max-w-[560px]">
              Not just a vendor. A partner who owns the outcome.
            </h2>

            <p className="mt-3 text-sm text-[#85837a] max-w-[480px] leading-relaxed">
              Four reasons enterprise teams choose Future Point over a generic reseller.
            </p>
          </div>

          {/* Card grid - hairline grid with shared borders */}
          <motion.div
            className="mt-8 rounded-[10px] border border-[#232320] bg-[#131311] overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: reduce ? 0 : 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {CARDS.map((card, idx) => (
                <div
                  key={card.title}
                  className={`
                    relative group flex flex-col min-h-0 p-5 sm:min-h-[264px] sm:p-6
                    border-r border-[#232320] border-b border-[#232320]
                    ${idx >= 3 ? "lg:border-b-0" : ""}
                    ${idx % 4 === 3 ? "border-r-0" : ""}
                    ${idx >= 4 ? "lg:border-t-0" : ""}
                    bg-[#131311]
                    transition-colors duration-150 hover:bg-[#191916]
                  `}
                >
                  <div className="flex size-[22px] items-center justify-center mb-5">
                    <card.icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-[inherit]"
                      style={{ color: card.iconColor }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-[15px] font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.55] text-[#85837a]">
                    {card.body}
                  </p>
                  <p className="mt-5 border-t border-[#232320] pt-4 text-[12px] leading-[1.5] text-[#97C459] sm:mt-auto">
                    {card.micro}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
