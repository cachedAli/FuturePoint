import type { Metadata } from "next";
import { ContactExperience } from "@/components/site/contact-experience";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Future Point about your technology requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <><SiteHeader solid /><main className="contact-page flex-1 bg-offwhite"><ContactExperience /></main><SiteFooter /></>;
}
