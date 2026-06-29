import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { POSTS_ALL_QUERY } from "@/sanity/queries";
import type { PostPreview } from "@/sanity/types";

const BASE = "https://viveksl.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(POSTS_ALL_QUERY, {}, { next: { revalidate: 3600 } });

  const blogEntries: MetadataRoute.Sitemap = (posts as PostPreview[] ?? []).map((post) => ({
    url: `${BASE}/blog/${post.slug?.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
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
    ...blogEntries,
  ];
}
