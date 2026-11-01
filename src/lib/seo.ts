import type { Metadata } from "next";

export const SITE_URL = "https://www.cuzec.io";
export const SITE_NAME = "Cuzec";
export const DEFAULT_TITLE = "Cuzec: AI Agents for Real Estate, Construction, Healthcare & Coaching";
export const DEFAULT_DESCRIPTION =
  "Cuzec builds AI agents and automations for real estate, construction, healthcare and coaching businesses, connected to the tools you already use.";
export const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "Cuzec AI Automation" };

// Child metadata replaces the parent's openGraph/twitter objects instead of merging,
// so every page builds its full set here: title, description, canonical URL and social tags.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  authors,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}): Metadata {
  const socialTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [OG_IMAGE],
      ...(type === "article" ? { type, publishedTime, authors } : { type }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
