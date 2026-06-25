import type { MetadataRoute } from "next";

const BASE = "https://www.viveksl.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/case-study/paperwurk`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE}/case-study/4bc-global`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE}/case-study/alya-auditors`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE}/case-study/insure-first`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE}/resume`,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
