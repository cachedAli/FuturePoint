import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/data/solutions";
import { solutions } from "@/data/solutions";
import { PartnerLogoGrid } from "@/components/site/partner-logo-grid";
import { CapabilityExplorer } from "@/components/site/capability-explorer";
import { BusinessOutcomes } from "@/components/site/business-outcomes";
import { CustomerProof } from "@/components/site/customer-proof";
import { SupportTimeline } from "@/components/site/support-timeline";
import { FinalCta } from "@/components/site/final-cta";
import { PrimaryCta } from "@/components/site/cta-buttons";
import { Reveal } from "@/components/site/reveal";

export function SolutionDetail({ solution }: { solution: Solution }) {
  const s = solution;
  return (
    <div>
      {/* 1. HERO - light */}
      <section className="bg-offwhite px-5 pb-16 pt-[120px] sm:px-8 lg:px-12 lg:pt-[140px]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
          <div>
            <nav
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/45"
              aria-label="Breadcrumb"
            >
              <Link
                href="/solutions"
                className="transition-colors hover:text-lime"
              >
                Solutions
              </Link>
              <span className="text-charcoal/30">/</span>
              <span className="text-charcoal">{s.title}</span>
            </nav>

            <h1 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.02em] text-charcoal">
              {s.hero.headline}
            </h1>
            <p className="mt-5 max-w-[60ch] text-base leading-7 text-muted-foreground">
              {s.hero.body}
            </p>
            <div className="mt-8">
              <PrimaryCta href={s.hero.cta.href} label={s.hero.cta.label} />
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
            <img
              src={s.heroImage}
              alt={s.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE - light, continues from hero */}
      <section className="bg-offwhite px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12">
        <Reveal className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            The Challenge
          </p>
          <p className="mt-5 max-w-[72ch] text-lg leading-8 text-charcoal/80">
            {s.challenge}
          </p>
        </Reveal>
      </section>

      {/* 3. CAPABILITIES - light */}
      <section className="bg-offwhite px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <CapabilityExplorer capabilities={s.capabilities} image={s.heroImage} />
      </section>

      {/* 4. TECHNOLOGY ECOSYSTEM / SUPPORT - dark */}
      <section className="bg-offwhite px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            {s.ecosystem ? "Technology Ecosystem" : "Support Structure"}
          </p>
          <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-charcoal">
            {s.ecosystem ? s.ecosystem.heading : "A Right-Sized Support Model"}
          </h2>
          <p className="mt-5 max-w-[60ch] text-sm leading-6 text-muted-foreground">
            {s.ecosystem
              ? s.ecosystem.note
              : "Four tiers of support, from first-line helpdesk to incident response, with one accountable partner."}
          </p>
          <div className="mt-12">
            {s.ecosystem ? (
              <PartnerLogoGrid names={s.ecosystem.partners} />
            ) : (
              <SupportTimeline tiers={s.support ?? []} />
            )}
          </div>
        </Reveal>
      </section>

      {/* Business outcomes appear only when the source material verifies them. */}
      {!s.businessOutcomes.needsConfirmation && (
        <section className="bg-offwhite px-0 py-8 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-none bg-charcoal-deep px-5 py-20 sm:rounded-[24px] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="hero-motif" aria-hidden="true">
              <div className="hero-motif__dots" />
            </div>
            <div className="relative z-10">
              <BusinessOutcomes solution={s} />
            </div>
          </div>
        </section>
      )}

      {/* 6. RELATED SOLUTIONS - light */}
      <section className="bg-offwhite px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            Related Solutions
          </p>
          <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-charcoal">
            Explore all solutions
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.filter((rel) => rel.slug !== s.slug).map((rel) => {
              const content = (
                <>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[10px]">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-charcoal">
                        {rel.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-charcoal/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </>
              );

              return (
                <Link
                  key={rel.slug}
                  href={`/solutions/${rel.slug}`}
                  className="group rounded-[16px] border border-charcoal/12 bg-offwhite p-5 transition-colors duration-300 hover:border-lime hover:bg-offwhite-warm"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* 7. CUSTOMER PROOF - light */}
      <section className="bg-offwhite px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-8">
        <CustomerProof solution={s} />
      </section>

      {/* 8. CLOSING CTA - dark (shared component) */}
      <FinalCta heading={s.finalCta.headline} body={s.finalCta.subhead} />
    </div>
  );
}
