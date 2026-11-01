import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// /resources is left out until its downloads exist (the current links point to domains that don't resolve).
const staticPages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/case-studies", priority: 0.8 },
  { path: "/services", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/technology", priority: 0.5 },
  { path: "/blog", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms-of-service", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(({ path, priority }) => ({ url: `${SITE_URL}${path}`, priority })),
    ...projects.map((p) => ({ url: `${SITE_URL}/${p.slug}`, priority: 0.9 })),
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, priority: 0.6 })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      priority: 0.5,
    })),
  ];
}
