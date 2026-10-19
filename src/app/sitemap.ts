import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mosano.eu";

  return [
    {
      url: `${baseUrl}/mvp-cost-2026`,
      lastModified: "2026-10-18",
    },
  ];
}
