import type { MetadataRoute } from "next";
import { solutionSlugs } from "@/data/solutions";

const siteUrl = "https://futurepointt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/customers", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return [
    ...routes.map(({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path}`,
      priority,
      changeFrequency,
    })),
    ...solutionSlugs.map((slug) => ({
      url: `${siteUrl}/solutions/${slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
}
