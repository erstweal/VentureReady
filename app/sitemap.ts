import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ventureready.ai";

  const posts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
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
