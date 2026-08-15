import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/blog",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `https://qarsam.com${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const postRoutes = blogPosts.map((post) => ({
    url: `https://qarsam.com/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...postRoutes];
}
