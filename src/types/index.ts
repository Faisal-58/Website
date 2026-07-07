export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  featured: boolean;
  demoVideo?: string;
  liveUrl?: string;
  features: string[];
  techStack: string[];
  problem: string;
  howItWorks: string[];
  workflowSteps: { title: string; description: string }[];
  screenshots: string[];
  documentation?: string;
  faq: { question: string; answer: string }[];
  caseStudySlug?: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  overview: string;
  benefits: string[];
  workflowExample: string;
  useCases: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  automationProcess: { step: number; title: string; description: string }[];
  implementationProcess: { step: number; title: string; description: string }[];
  caseStudySlugs: string[];
  faq: { question: string; answer: string }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  featured: boolean;
  shortDescription: string;
  challenge: string;
  solution: string;
  automationBuilt: string[];
  hoursSaved: number;
  revenueImpact: string;
  efficiencyImprovement: string;
  clientBackground: string;
  problem: string;
  analysis: string;
  implementation: string;
  architecture: string[];
  results: { metric: string; value: string }[];
  screenshots: string[];
  lessonsLearned: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; role: string; avatar?: string };
  publishedAt: string;
  featured: boolean;
  readingTime: number;
  tags: string[];
}

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: "guide" | "template" | "insight" | "download";
  category: string;
  downloadUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Technology {
  name: string;
  category: "ai" | "automation" | "integration" | "platform";
  description: string;
}
