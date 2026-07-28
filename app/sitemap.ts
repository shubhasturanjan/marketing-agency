import type { MetadataRoute } from "next";

/**
 * Sitemap for neoogle.com. Emitted at /sitemap.xml by Next.js. Only lists
 * routes that actually exist in this codebase — this is how we tell Google
 * "these four pages are canonical; anything else you have cached from the
 * previous site at this domain is gone." Submit /sitemap.xml in Search
 * Console to accelerate recrawling.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://neoogle.com";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
