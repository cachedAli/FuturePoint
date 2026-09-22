import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Network,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { FinalCta } from "@/components/site/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A tried-and-tested approach to every Future Point service and solution, high-performing, cost-efficient, and backed by top-tier support at every stage.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Managed IT Services",
    body: "Project managers keep deployments on track, while managed services keep IT running.",
    image: "/services/mangedIT.jpg",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Professional IT Services",
    body: "Expert consulting and lifecycle support deliver the right solutions to strengthen productivity and cybersecurity.",
    image: "/services/professioanlIT.jpg",
    icon: UsersRound,
  },
  {
    title: "Integration Services",
    body: "Certified experts build tailored IT solutions, from staging and configuration through final delivery.",
    image: "/services/integaedService.jpg",
    icon: Network,
  },
  {
    title: "IT Staffing Services",
    body: "Flexible staffing covers absences, peak demand and project skill gaps when and where they are needed.",
    image: "/services/ITStaff.jpg",
    icon: UserRoundCheck,
  },
];

const supportStages = [
  {
    title: "Discovery & Requirements",
    body: "We validate every component against your agreed requirements.",
  },
  {
    title: "Planning & Design",
    body: "Scope, risk, security architecture, timeline.",
  },
  {
    title: "Implementation & Integration",
    body: "Certified engineers, controlled execution.",
  },
  {
    title: "Go-Live & Support",
    body: "Hypercare, then 24x7x365 monitoring.",
  },
];

const outcomes = [
  {
    title: "On time, on budget, on scope",
    body: "Our dedicated project managers keep IT deployments on time, on budget, and on scope.",
  },
  {
    title: "The right solutions at the right time",
    body: "From expert consulting to full IT lifecycle support, we deliver the right solutions at the right time.",
  },
  {
    title: "Top-tier support at every stage",
    body: "A tried-and-tested approach to every service and solution we deliver.",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader solid />
      <main className="flex-1 bg-offwhite">
        <section className="px-5 pb-12 pt-[120px] sm:px-8 sm:pb-16 lg:px-12 lg:pb-16 lg:pt-[140px]">
          <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(460px,0.85fr)] lg:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  Services
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 max-w-[12ch] text-[clamp(2.75rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-charcoal">
                  How We Deliver
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-7 max-w-[55ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  A tried-and-tested approach to every service and solution we
                  deliver, high-performing, cost-efficient, and backed by top-tier
                  support at every stage.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-lime px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-light hover:shadow-[0_12px_30px_-12px_rgba(151,197,11,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
                >
                  <span className="sm:hidden">Talk to us</span>
                  <span className="hidden sm:inline">Talk to us about your project</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <Reveal y={20} delay={0.1} className="relative overflow-hidden rounded-[20px] bg-charcoal/10">
              <div className="relative aspect-[5/4] min-h-[320px] lg:min-h-[500px]">
                <Image
                  src="/serviceHero.jpeg"
                  alt="Technology professional reviewing data center infrastructure on a tablet"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                Our services
              </p>
              <h2 className="mt-5 max-w-[15ch] text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-charcoal sm:text-5xl">
                  Expertise across the IT lifecycle
              </h2>
              <p className="mt-6 max-w-[46ch] text-base leading-7 text-muted-foreground sm:text-lg">
                  A tried-and-tested approach to every service and solution we
                  deliver, high-performing, cost-efficient, and backed by top-tier
                  support at every stage.
              </p>
              <div className="mt-7 h-px w-12 bg-lime" />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal
                    key={service.title}
                    delay={index * 0.08}
                    y={24}
                    className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-charcoal/12 bg-offwhite-warm transition-colors duration-300 hover:border-lime/70 hover:bg-white"
                  >
                    <div className="h-[198px] shrink-0 overflow-hidden p-5 sm:h-[206px] sm:p-6 lg:h-[214px] lg:p-7">
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-lime/10 text-charcoal transition-colors duration-300 group-hover:bg-lime group-hover:text-charcoal-deep">
                          <Icon className="size-4" strokeWidth={1.65} />
                        </div>
                        <h3 className="max-w-[18ch] pt-0.5 text-2xl font-semibold leading-[1.06] tracking-[-0.035em] text-charcoal transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.7rem]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-[48ch] text-sm leading-6 text-muted-foreground sm:text-[15px]">
                        {service.body}
                      </p>
                      <div className="mt-5 h-px w-10 bg-lime/70 transition-all duration-300 group-hover:w-14" />
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/10">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                How we support
              </p>
              <h2 className="mt-5 text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal">
                A Process Built for Certainty.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                A tried-and-tested approach to every service and solution we
                deliver, high-performing, cost-efficient, and backed by top-tier
                support at every stage.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
              {supportStages.map((stage, index) => (
                <Reveal
                  key={stage.title}
                  delay={index * 0.07}
                  className="rounded-[16px] border border-charcoal/12 bg-offwhite p-7 sm:p-8"
                >
                  <h3 className="text-[15px] font-semibold text-charcoal">
                    {stage.title}
                  </h3>
                  <p className="mt-4 max-w-[30ch] text-sm leading-6 text-muted-foreground">
                    {stage.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-offwhite px-0 py-8 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-none bg-charcoal-deep px-5 py-20 sm:rounded-[24px] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="hero-motif" aria-hidden="true">
              <div className="hero-motif__dots" />
            </div>
            <div className="relative z-10 mx-auto max-w-[1440px]">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  What this means for you
                </p>
                <h2 className="mt-4 max-w-[18ch] text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                  A tried-and-tested approach at every stage.
                </h2>
              </Reveal>
              <div className="mt-10 grid border-t border-white/15 sm:grid-cols-3">
                {outcomes.map((outcome, index) => (
                  <Reveal
                    key={outcome.title}
                    delay={0.12 + index * 0.08}
                    y={10}
                    className="group border-b border-white/15 px-1 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[210px] sm:border-b-0 sm:px-6 sm:py-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-white/15"
                  >
                    <p className="text-xs font-semibold tabular-nums tracking-[0.16em] text-lime">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-7 text-xl font-semibold leading-tight text-white">
                      {outcome.title}
                    </h3>
                    <p className="mt-4 max-w-[30ch] text-sm leading-6 text-silver">
                      {outcome.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCta heading="Talk to Us About Your Project" />
      </main>
      <SiteFooter />
    </>
  );
}
