import { siteContent } from "@/data/site-content";
import { AnimatedStat } from "./animated-stat";

export function ProofStrip() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {siteContent.proofStrip.map((item) => (
            <AnimatedStat key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
