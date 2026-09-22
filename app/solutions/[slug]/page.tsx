import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/site/solution-detail";
import { solutionMap, solutionSlugs } from "@/data/solutions";

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/solutions/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const s = solutionMap[slug];
  if (!s) return { title: "Solution not found" };
  return {
    title: s.title,
    description: s.summary,
    alternates: { canonical: `/solutions/${s.slug}` },
  };
}

export default async function Page(props: PageProps<"/solutions/[slug]">) {
  const { slug } = await props.params;
  const s = solutionMap[slug];
  if (!s) notFound();

  return <SolutionDetail solution={s} />;
}
