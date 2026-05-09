import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ventureready.ai";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/samples`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/1mc`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/legal/privacy`,
      lastModified: new Date("2026-02-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/terms`,
      lastModified: new Date("2026-02-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/cookies`,
      lastModified: new Date("2026-02-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/acceptable-use`,
      lastModified: new Date("2026-02-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/disclaimer`,
      lastModified: new Date("2026-02-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/legal/dmca`,
      lastModified: new Date("2026-02-05"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
