import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";
import { getWorkSlugs } from "@/lib/work-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const workEntries = getWorkSlugs().map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...workEntries,
  ];
}
