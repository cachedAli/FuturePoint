import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { HeroMotif } from "./hero-motif";

export function Hero() {
  const { hero } = siteContent;
  const [headlineStart, headlineEnd] = hero.headline.split(" for ");

  return (
    <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden rounded-b-[24px] bg-charcoal-deep lg:min-h-screen">
      <HeroMotif />
      <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl items-center justify-center px-5 py-36 text-center sm:px-8 lg:py-40">
        <div className="flex max-w-6xl flex-col items-center gap-9">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-lime">
            Enterprise Technology Since 2015
          </div>
          <h1 className="text-[clamp(3rem,5.7vw,6.9rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
            <span className="block lg:whitespace-nowrap">{headlineStart}</span>
            <span className="block lg:whitespace-nowrap">for {headlineEnd}</span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-[#96989A] sm:text-lg sm:leading-8">
            We integrate, secure and manage critical business technology across networks, cybersecurity, data centers and managed services
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={hero.primaryCta.href} className="group inline-flex items-center justify-center gap-3 rounded-lg border border-lime bg-lime px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal-deep transition-all hover:bg-transparent hover:text-lime">
              {hero.primaryCta.label}
              <ArrowUpRight className="size-4 text-charcoal-deep transition-colors group-hover:text-lime" />
            </Link>
            <Link href={hero.secondaryCta.href} className="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:border-lime hover:text-lime">
              {hero.secondaryCta.label}
              <ArrowDownRight className="size-4 text-white transition-colors group-hover:text-lime" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
    </section>
  );
}
