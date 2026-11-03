import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// /resources stays out of the sitemap until its download links resolve.
const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/case-studies",
  "/technology",
  "/blog",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    })),
    ...services.map((service) => ({ url: `${SITE_URL}/services/${service.slug}` })),
    ...projects.map((project) => ({ url: `${SITE_URL}/${project.slug}` })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt,
    })),
  ];
}
