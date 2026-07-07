import type { BlogPost, Resource, TeamMember, Testimonial, Technology } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-business-automation",
    title: "The Future of Business Automation in 2026",
    excerpt:
      "Explore how AI agents, intelligent workflows, and hyper-automation are reshaping how enterprises operate.",
    content: `## The Automation Revolution

Business automation has evolved far beyond simple task schedulers and email triggers. In 2026, we're witnessing the convergence of AI agents, intelligent workflows, and hyper-automation that's fundamentally changing how enterprises operate.

### From Rules to Intelligence

Traditional automation followed rigid if-then rules. Today's AI-powered automation understands context, makes decisions, and adapts to changing conditions. This shift from deterministic to intelligent automation is the single biggest change in enterprise technology.

### Key Trends Shaping 2026

**Autonomous AI Agents** are handling complex multi-step processes that previously required human judgment. From customer support to financial analysis, agents are becoming indispensable team members.

**Hyper-Automation** connects every system in your tech stack into seamless workflows. No more manual handoffs between departments or systems.

**Natural Language Interfaces** allow business users to create and modify automations by simply describing what they want in plain English.

### What This Means for Your Business

Companies that embrace intelligent automation are seeing:
- 60-80% reduction in manual processing time
- 90%+ accuracy in automated tasks
- 3-5x improvement in process completion speed
- Significant cost savings without sacrificing quality

### Getting Started

The best time to start your automation journey was yesterday. The second best time is now. Begin with a process audit to identify your highest-impact automation opportunities.`,
    category: "Industry Insights",
    author: { name: "Sarah Chen", role: "CEO & Founder" },
    publishedAt: "2026-05-15",
    featured: true,
    readingTime: 8,
    tags: ["automation", "AI", "enterprise", "future"],
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
    author: { name: "Marcus Johnson", role: "VP of Automation" },
    publishedAt: "2026-04-22",
    featured: true,
    readingTime: 6,
    tags: ["AI", "automation", "strategy", "best practices"],
  },
  {
    slug: "crm-automation-best-practices",
    title: "CRM Automation Best Practices That Drive Results",
    excerpt:
      "Follow these proven practices to implement CRM automation that actually improves sales productivity and deal velocity.",
    content: `## Why CRM Automation Matters

Sales teams spend 65% of their time on non-selling activities. CRM automation reclaims that time by handling data entry, follow-ups, and routine tasks. But automation for automation's sake often fails. The best CRM automation directly supports your sales process.

### Best Practice #1: Start with Your Top 3 Processes

Don't try to automate everything at once. Identify your three highest-impact processes:
- Lead capture and qualification
- Deal stage progression
- Follow-up reminders

These three typically account for 50% of manual CRM time.

### Best Practice #2: Maintain Data Quality

Garbage in, garbage out. Before automating, clean your CRM data. Automated processes amplify both good and bad data.

### Best Practice #3: Give Sales Control

Sales teams are more likely to adopt automation they can modify. Build processes where reps can override, adjust, or skip when needed.

### Best Practice #4: Measure Impact

Define your baseline: How many hours per week do reps spend on manual CRM activities? Track this weekly. Good CRM automation reduces this by 40-60%.

### Best Practice #5: Iterate and Refine

Your first automation won't be perfect. Plan for regular reviews and adjustments based on feedback and performance data.

## Getting Started

The best CRM automation starts with understanding your current process deeply. Map every step, identify the manual bottlenecks, and automate those first.

Results typically include:
- 15+ hours saved per sales rep per week
- 30% improvement in deal cycle time
- Cleaner, more accurate CRM data
- Higher forecast accuracy`,
    category: "Best Practices",
    author: { name: "Emily Rodriguez", role: "Solutions Architect" },
    publishedAt: "2026-03-18",
    featured: true,
    readingTime: 7,
    tags: ["CRM", "sales", "automation", "best practices"],
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

export const companyValues = [
  { title: "Innovation", description: "Pushing the boundaries of what's possible" },
  { title: "Excellence", description: "Committed to delivering exceptional results" },
  { title: "Integrity", description: "Honest and ethical in all our dealings" },
];

export const processSteps = [
  { step: 1, title: "Discovery", description: "Understand your processes" },
  { step: 2, title: "Design", description: "Design the automation" },
  { step: 3, title: "Implement", description: "Build and deploy" },
  { step: 4, title: "Optimize", description: "Monitor and improve" },
];

export const blogCategories = ["Industry Insights", "Best Practices", "Case Studies"];

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "15+ years in enterprise automation. Previously VP of Automation at Fortune 500 tech company.",
    image: "/team/sarah-chen.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "VP of Automation",
    bio: "Expert in workflow design and AI integration. Trained 500+ teams on automation best practices.",
    image: "/team/marcus-johnson.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Solutions Architect",
    bio: "Specializes in large-scale automation deployments. Built automation systems serving 1M+ users.",
    image: "/team/emily-rodriguez.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "CUZEC transformed our customer support operation. AI agents now handle 80% of inquiries, and our CSAT score jumped from 62% to 91%.",
    author: "Michael Torres",
    role: "VP of Customer Experience",
    company: "Global Retail Co.",
  },
  {
    quote:
      "Our sales pipeline velocity tripled after implementing CUZEC's CRM automation. The ROI was evident within the first month.",
    author: "Jennifer Walsh",
    role: "Chief Revenue Officer",
    company: "TechFlow SaaS",
  },
  {
    quote:
      "What used to take 45 minutes per shipment now takes 11 minutes. CUZEC's workflow automation scaled our capacity by 150% without adding staff.",
    author: "Robert Singh",
    role: "COO",
    company: "SwiftLogistics",
  },
  {
    quote:
      "The team at CUZEC doesn't just build automations — they understand our business and design solutions that actually move the needle.",
    author: "Amanda Foster",
    role: "CEO",
    company: "DataPulse Analytics",
  },
];

export const technologies: Technology[] = [
  { name: "OpenAI GPT-4", category: "ai", description: "" },
  { name: "Claude", category: "ai", description: "" },
  { name: "n8n", category: "integration", description: "" },
  { name: "Slack", category: "platform", description: "" },
  { name: "WhatsApp", category: "integration", description: "" },
  { name: "GoHighLevel", category: "platform", description: "" },
  { name: "Google Maps", category: "integration", description: "" },
  { name: "Google Workspace", category: "platform", description: "" },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
