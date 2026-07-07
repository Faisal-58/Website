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

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-ai-automation",
    title: "Retail Giant Automates Customer Support with AI Agents",
    client: "Global Retail Co.",
    industry: "Retail",
    featured: true,
    shortDescription:
      "How a major retailer deployed AI agents to handle 80% of customer inquiries automatically.",
    challenge:
      "Global Retail Co. was drowning in 50,000+ monthly customer inquiries across email, chat, and social media. Their 200-person support team couldn't keep up, leading to 48-hour response times and declining customer satisfaction scores.",
    solution:
      "CUZEC deployed a fleet of AI agents trained on the company's product catalog, policies, and historical support data. The agents handle tier-1 inquiries autonomously while seamlessly escalating complex issues to human agents with full context.",
    automationBuilt: [
      "AI-powered customer inquiry classification",
      "Automated response generation with brand voice",
      "Order status lookup and update automation",
      "Return and refund processing workflow",
      "Human escalation with full conversation context",
      "Real-time satisfaction monitoring dashboard",
    ],
    hoursSaved: 3200,
    revenueImpact: "$2.4M annual savings",
    efficiencyImprovement: "80% inquiry automation rate",
    clientBackground:
      "Global Retail Co. is a Fortune 500 retailer with 500+ stores across 30 countries, processing over 2 million orders monthly through online and in-store channels.",
    problem:
      "Customer support costs were escalating 25% year-over-year while satisfaction scores dropped. The company needed to scale support without proportional headcount increases.",
    analysis:
      "Our audit revealed that 78% of customer inquiries fell into 12 predictable categories. Each inquiry required agents to look up information across 4 different systems, averaging 8 minutes per interaction.",
    implementation:
      "Phase 1 deployed AI agents for the top 5 inquiry categories over 6 weeks. Phase 2 expanded to all 12 categories and integrated with the company's order management and CRM systems.",
    architecture: [
      "WhatsApp Business API → Message Router",
      "AI Agent Engine (OpenAI GPT-4)",
      "Knowledge Base (Product Catalog + Policies)",
      "Order Management System Integration",
      "CRM Integration (Salesforce)",
      "Human Agent Dashboard (Escalation Queue)",
      "Analytics & Monitoring Platform",
    ],
    results: [
      { metric: "Response Time", value: "48 hours → 2 minutes" },
      { metric: "Automation Rate", value: "80% of inquiries" },
      { metric: "CSAT Score", value: "62% → 91%" },
      { metric: "Support Cost", value: "Reduced by 65%" },
      { metric: "Agent Productivity", value: "3x improvement" },
    ],
    screenshots: ["/screenshots/case-retail-1.png", "/screenshots/case-retail-2.png"],
    lessonsLearned: [
      "Start with high-volume, predictable inquiry types for quick wins",
      "Human agents are more effective when AI handles routine work",
      "Continuous training on new products keeps agents accurate",
      "Customer satisfaction improves dramatically with instant responses",
    ],
  },
  {
    slug: "saas-crm-automation",
    title: "SaaS Startup 3x Pipeline Velocity with CRM Automation",
    client: "TechFlow SaaS",
    industry: "SaaS",
    featured: true,
    shortDescription:
      "How a B2B SaaS company tripled their sales pipeline velocity through intelligent CRM automation.",
    challenge:
      "TechFlow SaaS had a 15-person sales team managing 5,000+ leads monthly but converting only 2%. Leads were lost due to slow follow-ups, poor data quality, and manual processes that consumed 70% of selling time.",
    solution:
      "CUZEC implemented a comprehensive CRM automation system with AI-powered lead scoring, automated follow-up sequences, and intelligent pipeline management that transformed their sales operation.",
    automationBuilt: [
      "Multi-channel lead capture and deduplication",
      "AI lead scoring based on ICP fit",
      "Automated follow-up email sequences",
      "Meeting scheduling automation",
      "Pipeline stage auto-progression",
      "Weekly sales performance dashboards",
    ],
    hoursSaved: 1800,
    revenueImpact: "$1.8M additional ARR",
    efficiencyImprovement: "3x pipeline velocity",
    clientBackground:
      "TechFlow SaaS is a B2B project management platform with 10,000+ customers, targeting mid-market companies with 50-500 employees.",
    problem:
      "Despite strong product-market fit, the sales team couldn't convert leads fast enough. Average time from lead to first contact was 72 hours, and 40% of leads never received a follow-up.",
    analysis:
      "We discovered that sales reps spent only 30% of their time actually selling. The rest was consumed by CRM data entry, lead research, scheduling, and manual follow-ups.",
    implementation:
      "Over 8 weeks, we deployed lead capture automation, AI scoring, automated nurture sequences, and pipeline automation integrated with their HubSpot CRM.",
    architecture: [
      "Website Forms → Lead Capture Hub",
      "AI Lead Scoring Engine",
      "HubSpot CRM (Central Hub)",
      "Automated Email Sequences (HubSpot)",
      "Calendar Integration (Calendly)",
      "Slack Notifications (Sales Team)",
      "Analytics Dashboard (Custom)",
    ],
    results: [
      { metric: "Lead Response Time", value: "72 hours → 5 minutes" },
      { metric: "Conversion Rate", value: "2% → 6.8%" },
      { metric: "Pipeline Velocity", value: "3x improvement" },
      { metric: "Sales Rep Selling Time", value: "30% → 75%" },
      { metric: "Additional ARR", value: "$1.8M in 6 months" },
    ],
    screenshots: ["/screenshots/case-saas-1.png"],
    lessonsLearned: [
      "Speed to lead is the single biggest conversion factor",
      "AI scoring outperforms manual lead qualification",
      "Automated follow-ups ensure no lead is forgotten",
      "Clean CRM data is essential for accurate forecasting",
    ],
  },
  {
    slug: "logistics-workflow-automation",
    title: "Logistics Company Cuts Processing Time by 75%",
    client: "SwiftLogistics",
    industry: "Logistics",
    featured: true,
    shortDescription:
      "End-to-end workflow automation transformed a logistics company's operations from manual to fully automated.",
    challenge:
      "SwiftLogistics processed 10,000+ shipments daily using manual workflows across 6 disconnected systems. Shipment processing took 45 minutes per order, error rates were at 12%, and customer tracking updates were delayed by hours.",
    solution:
      "CUZEC built an integrated workflow automation platform connecting their TMS, WMS, billing, and customer communication systems into a seamless automated pipeline.",
    automationBuilt: [
      "Automated shipment intake and validation",
      "Route optimization integration",
      "Real-time tracking update automation",
      "Automated billing and invoicing",
      "Customer notification workflows",
      "Exception handling and escalation",
    ],
    hoursSaved: 4500,
    revenueImpact: "$3.1M operational savings",
    efficiencyImprovement: "75% faster processing",
    clientBackground:
      "SwiftLogistics is a mid-size logistics provider operating across 15 distribution centers, handling last-mile delivery for 200+ e-commerce clients.",
    problem:
      "Manual processes couldn't scale with growing shipment volumes. The company was turning away new clients because they couldn't process orders fast enough.",
    analysis:
      "Process mapping revealed 23 manual handoffs per shipment, with data re-entered an average of 4 times across different systems. Each handoff added 3-5 minutes and introduced error opportunities.",
    implementation:
      "A 12-week implementation connected all 6 systems via API integrations and built automated workflows for the entire shipment lifecycle from intake to delivery confirmation.",
    architecture: [
      "Order Intake API Gateway",
      "Workflow Engine (n8n)",
      "TMS Integration (Custom API)",
      "WMS Integration (Custom API)",
      "Billing System (Stripe + Custom)",
      "Customer Portal (Real-time Tracking)",
      "Notification Service (Email + SMS + WhatsApp)",
    ],
    results: [
      { metric: "Processing Time", value: "45 min → 11 min per shipment" },
      { metric: "Error Rate", value: "12% → 1.2%" },
      { metric: "Daily Capacity", value: "10K → 25K shipments" },
      { metric: "Customer Tracking Updates", value: "Real-time (was 4+ hours)" },
      { metric: "Operational Savings", value: "$3.1M annually" },
    ],
    screenshots: ["/screenshots/case-logistics-1.png", "/screenshots/case-logistics-2.png"],
    lessonsLearned: [
      "API-first integration is faster than replacing existing systems",
      "Exception handling workflows are as important as happy-path automation",
      "Real-time visibility dramatically improves customer satisfaction",
      "Automated error detection prevents costly shipping mistakes",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter((c) => c.industry === industry);
}
