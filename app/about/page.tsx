import type { Metadata } from "next";
import { AboutExperience } from "@/components/site/about-experience";
import { FinalCta } from "@/components/site/final-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "About Future Point",
  description:
    "Learn about Future Point's enterprise technology team, delivery approach, certifications, recognition and community impact.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <><SiteHeader solid /><main className="about-page flex-1 bg-offwhite"><AboutExperience /><FinalCta surfaceClassName="bg-offwhite-warm" heading="Build What's Next with Future Point" body="Bring us the technology challenge. We'll bring the certified expertise, delivery discipline and long-term support." /></main><SiteFooter /></>;
}
