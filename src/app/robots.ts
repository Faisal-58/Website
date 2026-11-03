import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const agents = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: agents.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: "https://www.cuzec.io/sitemap.xml",
  };
}
