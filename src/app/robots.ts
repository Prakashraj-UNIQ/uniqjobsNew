import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const SITE = "https://uniqjobs.co.in";

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
