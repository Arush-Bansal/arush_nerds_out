import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";
import { getCreatorboxReadSlugs } from "@/lib/creatorbox-reads";
import { getWorkSlugs } from "@/lib/work-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const workEntries = getWorkSlugs().map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const creatorboxReadEntries = getCreatorboxReadSlugs().map((read) => ({
    url: `${siteUrl}/work/creatorbox/${read}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
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
    {
      url: `${siteUrl}/timeline`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...workEntries,
    ...creatorboxReadEntries,
  ];
}
