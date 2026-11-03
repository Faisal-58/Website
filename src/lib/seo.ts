import type { Metadata } from "next";

export const SITE_URL = "https://www.cuzec.io";

export const HOME_TITLE = "AI agents for real estate, construction, healthcare";

export const HOME_DESCRIPTION =
  "Cuzec builds AI agents and automations for real estate, construction, healthcare and coaching businesses, connected to the tools clients already use.";

const TITLE_SUFFIX = " | Cuzec";

export function sentenceCount(text: string): number {
  return text.split(/[.!?]+/).filter((part) => part.trim()).length;
}

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const fullTitle = absolute ? title : `${title}${TITLE_SUFFIX}`;
  if (fullTitle.length > 60) {
    throw new Error(`Title is ${fullTitle.length} characters: ${fullTitle}`);
  }
  if (description.length > 155) {
    throw new Error(`Description is ${description.length} characters: ${description}`);
  }
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "Cuzec",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cuzec" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.png"],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Cuzec",
  alternateName: "Cuzec AI Automation",
  url: SITE_URL,
  logo: `${SITE_URL}/cuzec-logo.png`,
  email: "info@cuzec.io",
  telephone: "+923085007407",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  areaServed: ["GB", "US"],
  founder: {
    "@type": "Person",
    name: "Hamza Sattar",
    jobTitle: "CEO",
  },
  sameAs: ["https://linkedin.com/company/cuzec"],
};

export function personJsonLd(person: { name: string; jobTitle: string; sameAs?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    ...(person.sameAs ? { sameAs: [person.sameAs] } : {}),
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["GB", "US"],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author.name },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
