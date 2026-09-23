import { SiteHeader } from "@/components/site/site-header";
import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { ProofStrip } from "@/components/site/proof-strip";
import { SolutionsGrid } from "@/components/site/solutions-grid";
import { ValueProps } from "@/components/site/value-props";
import { PartnerGrid } from "@/components/site/partner-grid";
import { CustomerGrid } from "@/components/site/customer-grid";
import { FinalCta } from "@/components/site/final-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatWeDo } from "@/components/site/what-we-do";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <WhatWeDo />
        <SolutionsGrid />
        <ValueProps />
        <CustomerGrid />
        <PartnerGrid />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
