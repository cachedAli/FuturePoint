import type { Metadata } from "next";
import { SolutionsHub } from "@/components/site/solutions-hub";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Future Point's solutions: Networks & Infrastructure, Cybersecurity, Managed Services and Data Center & Storage.",
  alternates: { canonical: "/solutions" },
};

export default function Page() {
  return <SolutionsHub />;
}
