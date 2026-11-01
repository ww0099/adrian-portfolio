import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";
import { CASE_STUDIES } from "@/lib/work";

/** 站点地图：中文单语，URL 无 locale 前缀。 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const staticPaths = ["", "/work", "/lab", "/services", "/about", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes];
}
