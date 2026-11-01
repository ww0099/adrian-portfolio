import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

/**
 * robots —— 允许全站抓取,并指向站点地图。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
