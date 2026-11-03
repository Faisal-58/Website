import type { BlogPost, Resource, TeamMember, Testimonial, Technology } from "@/types";

// TODO(hamza): posts have publishedAt only. There is no modified date, so pages show "Published" and not a last-updated date.
export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-business-automation",
    title: "The Future of Business Automation in 2026",
    excerpt:
      "Explore how AI agents, intelligent workflows, and hyper-automation are reshaping how businesses operate.",
    content: `## The Automation Revolution

Business automation has evolved far beyond simple task schedulers and email triggers. In 2026, we're witnessing the convergence of AI agents, intelligent workflows, and hyper-automation that's fundamentally changing how businesses operate.

### From Rules to Intelligence

Traditional automation followed rigid if-then rules. Today's AI-powered automation understands context, makes decisions, and adapts to changing conditions. This shift from deterministic to intelligent automation is the single biggest change in business technology.

### Key Trends Shaping 2026

**Autonomous AI Agents** are handling complex multi-step processes that previously required human judgment. From customer support to financial analysis, agents are becoming indispensable team members.

**Hyper-Automation** connects every system in your tech stack into seamless workflows. No more manual handoffs between departments or systems.

**Natural Language Interfaces** allow business users to create and modify automations by simply describing what they want in plain English.

### Getting Started

The best time to start your automation journey was yesterday. The second best time is now. Begin with a process audit to identify your highest-impact automation opportunities.`,
    category: "Industry Insights",
    author: { name: "Hamza Sattar", role: "Founder & CEO" },
    publishedAt: "2026-05-15",
    featured: true,
    readingTime: 8,
    tags: ["automation", "AI", "operations", "future"],
    relatedLinks: [
      { href: "/services/workflow-automation", label: "Workflow automation for end-to-end processes" },
      { href: "/real-estate", label: "AI lead qualification for real estate agencies" },
    ],
  },
  {
    slug: "ai-agents-vs-traditional-automation",
    title: "AI Agents vs Traditional Automation: When to Use Each",
    excerpt:
      "Understanding the difference between AI agents and traditional automation helps you choose the right approach for each business process.",
    content: `## Understanding the Spectrum

Not every business process needs an AI agent, and not every process can be solved with traditional automation. Understanding where each approach excels is crucial for building an effective automation strategy.

### Traditional Automation Excels At:

- **Predictable, rule-based processes** with clear inputs and outputs
- **High-volume repetitive tasks** like data entry and file transfers
- **System integrations** connecting platforms via APIs
- **Scheduled operations** like report generation and backups

### AI Agents Excel At:

- **Complex decision-making** requiring contextual understanding
- **Customer-facing interactions** needing natural language
- **Exception handling** where rules can't cover all scenarios
- **Process optimization** that learns from outcomes

### Real-World Examples

Traditional automation powers your invoice processing workflow — rules define the steps, conditions trigger actions, and data flows predictably.

AI agents handle your customer support where they read inquiries, understand intent, retrieve relevant information, and generate contextually appropriate responses.

### The Future: Hybrid Approaches

The most effective automation strategies combine both. Use traditional automation for the backbone of repetitive workflows, and layer AI agents on top for intelligence and exception handling.

### Building Your Strategy

Start by categorizing your processes: rule-based, decision-heavy, or hybrid. This analysis will guide your automation investment decisions.`,
    category: "Best Practices",
    author: { name: "Faisal Ijaz", role: "Co-founder & CTO" },
    publishedAt: "2026-04-22",
    featured: true,
    readingTime: 6,
    tags: ["AI", "automation", "strategy", "best practices"],
    relatedLinks: [
      { href: "/services/ai-agents", label: "AI agents for multi-step business processes" },
      { href: "/construction", label: "BidLevel AI for construction bid leveling" },
    ],
  },
  {
    slug: "crm-automation-best-practices",
    title: "CRM Automation Best Practices That Drive Results",
    excerpt:
      "Follow these proven practices to implement CRM automation that actually improves sales productivity and deal velocity.",
    content: `## Why CRM Automation Matters

CRM automation handles data entry, follow-ups, and routine tasks. But automation for automation's sake often fails. The best CRM automation directly supports your sales process.

### Best Practice #1: Start with Your Top 3 Processes

Don't try to automate everything at once. Identify your three highest-impact processes:
- Lead capture and qualification
- Deal stage progression
- Follow-up reminders

### Best Practice #2: Maintain Data Quality

Garbage in, garbage out. Before automating, clean your CRM data. Automated processes amplify both good and bad data.

### Best Practice #3: Give Sales Control

Sales teams are more likely to adopt automation they can modify. Build processes where reps can override, adjust, or skip when needed.

### Best Practice #4: Measure Impact

Define your baseline: How many hours per week do reps spend on manual CRM activities? Track this weekly.

### Best Practice #5: Iterate and Refine

Your first automation won't be perfect. Plan for regular reviews and adjustments based on feedback and performance data.

## Getting Started

The best CRM automation starts with understanding your current process deeply. Map every step, identify the manual bottlenecks, and automate those first.

Results typically include:
- Cleaner, more accurate CRM data
- Higher forecast accuracy`,
    category: "Best Practices",
    author: { name: "Hamza Sattar", role: "Founder & CEO" },
    publishedAt: "2026-03-18",
    featured: true,
    readingTime: 7,
    tags: ["CRM", "sales", "automation", "best practices"],
    relatedLinks: [
      { href: "/services/crm-automation", label: "CRM automation for pipeline work" },
      { href: "/coaching", label: "AI operations platform for a coaching business" },
    ],
  },
];

export const resources: Resource[] = [
  {
    slug: "ai-agent-implementation-guide",
    title: "AI Agent Implementation Guide",
    description: "Complete guide to implementing AI agents in your business.",
    type: "guide",
    category: "Implementation",
    downloadUrl: "https://docs.cuzec.com/ai-agent-guide",
  },
  {
    slug: "automation-roi-calculator",
    title: "Automation ROI Calculator",
    description: "Calculate the potential ROI of automating your processes.",
    type: "download",
    category: "Tools",
    downloadUrl: "https://tools.cuzec.com/roi-calculator",
  },
  {
    slug: "workflow-automation-template",
    title: "Workflow Automation Template",
    description: "Pre-built template for common workflow automation scenarios.",
    type: "template",
    category: "Templates",
    downloadUrl: "https://templates.cuzec.com/workflow",
  },
];

export const blogCategories = ["Industry Insights", "Best Practices", "Case Studies"];

export const teamMembers: TeamMember[] = [
  {
    name: "Hamza Sattar",
    role: "Founder & CEO",
    bio: "5+ years in technical business development and operations. Hamza works with every client to understand how their business runs, and makes sure each automation solves a real problem.",
    education: "Bachelor's, GIK Institute (GIKI), Pakistan",
    linkedin: "https://www.linkedin.com/in/hamza-sattar-9403b6267/",
    image: "/team/hamza-sattar.jpg",
  },
  {
    name: "Faisal Ijaz",
    role: "Co-founder & CTO",
    bio: "10+ years in software engineering, AI/ML and data, now focused on LLM-powered agents and open-source voice agents. Faisal leads the technical side: AI agents, n8n workflows and integrations.",
    education: "Master's, Kiel University (CAU), Germany",
    linkedin: "https://www.linkedin.com/in/faisal-ijaz-44524179/",
    image: "/team/faisal-ijaz.jpg",
  },
];

// Real client testimonials only. The homepage section stays hidden while this is empty.
// Example:
// {
//   quote: "Two or three lines from the client.",
//   author: "Full Name",
//   role: "Job Title",
//   company: "Company Name",
// },
export const testimonials: Testimonial[] = [];

export const technologies: Technology[] = [
  { name: "OpenAI", category: "ai", description: "" },
  { name: "Claude", category: "ai", description: "" },
  { name: "n8n", category: "automation", description: "" },
  { name: "Slack", category: "platform", description: "" },
  { name: "WhatsApp", category: "integration", description: "" },
  { name: "GoHighLevel", category: "platform", description: "" },
  { name: "HubSpot", category: "platform", description: "" },
  { name: "Google Maps", category: "integration", description: "" },
  { name: "Google Workspace", category: "platform", description: "" },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
