import type { CaseStudy } from "@/types";

export const industries = [
  "Retail",
  "SaaS",
  "Logistics",
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Real Estate",
  "Education",
] as const;

// TODO(hamza): projects and case studies have no source dates. Do not invent a published or modified date.
// Real client projects only. Pages and homepage sections hide themselves while this is empty.
export const caseStudies: CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter((c) => c.industry === industry);
}
