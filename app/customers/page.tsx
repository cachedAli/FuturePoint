import type { Metadata } from "next";
import { Suspense } from "react";
import { CustomersExperience } from "@/components/site/customers-experience";
import { FinalCta } from "@/components/site/final-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Explore Future Point's delivery experience across networking, cybersecurity, managed services and data center infrastructure.",
  alternates: { canonical: "/customers" },
};

export default function CustomersPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="customers-page flex-1 bg-offwhite">
        <Suspense fallback={<div className="min-h-screen" />}>
          <CustomersExperience />
        </Suspense>
        <FinalCta heading="Talk to Us About Your Project" />
      </main>
      <SiteFooter />
    </>
  );
}
