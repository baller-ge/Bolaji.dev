import type { MetadataRoute } from "next";
import { writings, works, labs } from "#site/content";

const SITE = "https://bolaji.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    {
      url: `${SITE}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/writing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/lab`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/now`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/uses`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const writingRoutes: MetadataRoute.Sitemap = writings
    .filter((w) => w.published)
    .map((w) => ({
      url: `${SITE}${w.permalink}`,
      lastModified: new Date(w.date),
      changeFrequency: "yearly",
      priority: 0.7,
    }));

  const workRoutes: MetadataRoute.Sitemap = works
    .filter((w) => w.published)
    .map((w) => ({
      url: `${SITE}${w.permalink}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    }));

  const labRoutes: MetadataRoute.Sitemap = labs
    .filter((l) => l.published)
    .map((l) => ({
      url: `${SITE}${l.permalink}`,
      lastModified: new Date(l.date),
      changeFrequency: "yearly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...writingRoutes, ...workRoutes, ...labRoutes];
}
