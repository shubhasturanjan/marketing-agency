import type { MetadataRoute } from "next";

/**
 * robots.txt for neoogle.com. Emitted at /robots.txt by Next.js. Allows all
 * crawlers and points them at the sitemap so Google can discover the current
 * canonical routes and drop the old cached URLs from a prior deployment.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://neoogle.com/sitemap.xml",
    host: "https://neoogle.com",
  };
}
