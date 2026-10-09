import type { MetadataRoute } from "next";
import { INSIGHTS } from "@/lib/insights";
import { SITE_URL } from "./layout";

// Insight dates are display strings like "AUG 2026"; fall back to build time.
const published = (date: string) => {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const articles: MetadataRoute.Sitemap = INSIGHTS.map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    lastModified: published(insight.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
