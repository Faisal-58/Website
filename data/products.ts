import type { Product } from "@/types";

export const productCategories = [
  "AI Agents",
  "Workflow Automation",
  "CRM Tools",
  "E-commerce",
  "Operations",
  "Analytics",
] as const;

export const products: Product[] = [
  {
    slug: "cuzec-ai-agent",
    name: "CUZEC AI Agent",
    shortDescription: "Intelligent AI agents that automate complex business workflows end-to-end.",
    description:
      "CUZEC AI Agent is an enterprise-grade autonomous agent platform that handles complex multi-step business processes. From customer support to data analysis, our AI agents learn your workflows and execute them with precision.",
    category: "AI Agents",
    featured: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://demo.cuzec.com/ai-agent",
    features: [
      "Autonomous task execution",
      "Multi-step workflow orchestration",
      "Natural language interface",
      "Real-time decision making",
      "Integration with 100+ platforms",
      "Custom agent training",
    ],
    techStack: ["OpenAI GPT-4", "Claude", "n8n", "Python", "Node.js"],
    problem:
      "Businesses spend countless hours on repetitive cognitive tasks that require human judgment but follow predictable patterns.",
    howItWorks: [
      "Define your workflow and business rules",
      "Train the AI agent on your specific processes",
      "Deploy agents to handle tasks autonomously",
      "Monitor performance and optimize continuously",
    ],
    workflowSteps: [
      { title: "Input", description: "Agent receives task via API, email, or chat" },
      { title: "Analysis", description: "AI analyzes context and determines optimal action" },
      { title: "Execution", description: "Agent executes multi-step workflow across systems" },
      { title: "Validation", description: "Results verified against business rules" },
      { title: "Output", description: "Completed task delivered with full audit trail" },
    ],
    screenshots: ["/screenshots/ai-agent-1.png", "/screenshots/ai-agent-2.png"],
    documentation: "https://docs.cuzec.com/ai-agent",
    faq: [
      {
        question: "How long does it take to deploy an AI agent?",
        answer: "Most agents can be deployed within 2-4 weeks depending on workflow complexity.",
      },
      {
        question: "Can agents integrate with our existing systems?",
        answer: "Yes, CUZEC AI Agent integrates with 100+ platforms including CRMs, ERPs, and custom APIs.",
      },
    ],
    caseStudySlug: "retail-ai-automation",
  },
  {
    slug: "workflow-engine",
    name: "Workflow Engine",
    shortDescription: "Visual workflow builder for complex business process automation.",
    description:
      "Build, deploy, and manage sophisticated business workflows without code. Our visual workflow engine connects your entire tech stack and automates processes across departments.",
    category: "Workflow Automation",
    featured: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://demo.cuzec.com/workflow-engine",
    features: [
      "Drag-and-drop workflow builder",
      "Conditional logic and branching",
      "Error handling and retry logic",
      "Real-time monitoring dashboard",
      "Version control for workflows",
      "Team collaboration tools",
    ],
    techStack: ["n8n", "Make", "Zapier", "Node.js", "PostgreSQL"],
    problem:
      "Manual processes across disconnected systems create bottlenecks, errors, and wasted employee time.",
    howItWorks: [
      "Map your current business process",
      "Design workflow visually in our builder",
      "Connect systems via pre-built integrations",
      "Test, deploy, and monitor in production",
    ],
    workflowSteps: [
      { title: "Trigger", description: "Event initiates workflow (webhook, schedule, manual)" },
      { title: "Process", description: "Data transformed and routed through logic nodes" },
      { title: "Integrate", description: "Actions executed across connected platforms" },
      { title: "Notify", description: "Stakeholders alerted of completion or exceptions" },
    ],
    screenshots: ["/screenshots/workflow-1.png", "/screenshots/workflow-2.png"],
    documentation: "https://docs.cuzec.com/workflow-engine",
    faq: [
      {
        question: "Do I need coding skills to use Workflow Engine?",
        answer: "No, our visual builder is designed for business users. Technical users can extend with custom code nodes.",
      },
    ],
    caseStudySlug: "logistics-workflow-automation",
  },
  {
    slug: "crm-autopilot",
    name: "CRM Autopilot",
    shortDescription: "Automated CRM management that keeps your pipeline moving 24/7.",
    description:
      "CRM Autopilot eliminates manual CRM tasks by automatically updating records, scoring leads, scheduling follow-ups, and generating reports — all without human intervention.",
    category: "CRM Tools",
    featured: true,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://demo.cuzec.com/crm-autopilot",
    features: [
      "Automatic lead scoring",
      "Smart follow-up scheduling",
      "Pipeline stage automation",
      "Data enrichment",
      "Activity logging",
      "Custom reporting",
    ],
    techStack: ["HubSpot", "Salesforce", "Zapier", "OpenAI", "Python"],
    problem:
      "Sales teams spend 65% of their time on non-selling activities like data entry and follow-up management.",
    howItWorks: [
      "Connect your CRM platform",
      "Configure automation rules and triggers",
      "Enable AI-powered lead scoring",
      "Let Autopilot manage your pipeline",
    ],
    workflowSteps: [
      { title: "Capture", description: "Leads automatically captured from all channels" },
      { title: "Enrich", description: "Contact data enriched from external sources" },
      { title: "Score", description: "AI scores leads based on your ideal customer profile" },
      { title: "Route", description: "Leads routed to appropriate sales rep" },
      { title: "Follow-up", description: "Automated follow-ups until conversion" },
    ],
    screenshots: ["/screenshots/crm-1.png"],
    documentation: "https://docs.cuzec.com/crm-autopilot",
    faq: [
      {
        question: "Which CRM platforms are supported?",
        answer: "We support HubSpot, Salesforce, Pipedrive, Zoho CRM, and custom CRM integrations.",
      },
    ],
    caseStudySlug: "saas-crm-automation",
  },
  {
    slug: "commerce-flow",
    name: "Commerce Flow",
    shortDescription: "End-to-end e-commerce automation from order to fulfillment.",
    description:
      "Commerce Flow automates your entire e-commerce operation — inventory management, order processing, customer communications, and analytics — across all sales channels.",
    category: "E-commerce",
    featured: false,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://demo.cuzec.com/commerce-flow",
    features: [
      "Multi-channel order sync",
      "Inventory automation",
      "Automated customer notifications",
      "Returns processing",
      "Dynamic pricing rules",
      "Analytics dashboard",
    ],
    techStack: ["Shopify", "Stripe", "n8n", "Node.js", "PostgreSQL"],
    problem:
      "E-commerce businesses struggle to manage orders, inventory, and customer communications across multiple channels manually.",
    howItWorks: [
      "Connect your e-commerce platforms",
      "Configure automation rules for orders and inventory",
      "Set up customer communication templates",
      "Monitor and optimize with real-time analytics",
    ],
    workflowSteps: [
      { title: "Order", description: "Order received from any sales channel" },
      { title: "Validate", description: "Inventory checked and payment verified" },
      { title: "Fulfill", description: "Fulfillment triggered automatically" },
      { title: "Communicate", description: "Customer notified at each milestone" },
    ],
    screenshots: ["/screenshots/commerce-1.png"],
    faq: [
      {
        question: "Can Commerce Flow handle multiple storefronts?",
        answer: "Yes, Commerce Flow supports unlimited storefronts and marketplaces from a single dashboard.",
      },
    ],
  },
  {
    slug: "ops-command",
    name: "Ops Command",
    shortDescription: "Centralized operations dashboard with intelligent automation.",
    description:
      "Ops Command gives operations teams a unified view of all business processes with built-in automation capabilities. Monitor KPIs, trigger workflows, and resolve issues from one platform.",
    category: "Operations",
    featured: false,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://demo.cuzec.com/ops-command",
    features: [
      "Unified operations dashboard",
      "KPI monitoring and alerts",
      "Process automation triggers",
      "Team task management",
      "Incident response automation",
      "Compliance tracking",
    ],
    techStack: ["Slack", "Microsoft 365", "Google Workspace", "n8n", "React"],
    problem:
      "Operations teams lack visibility into cross-department processes and spend too much time on manual coordination.",
    howItWorks: [
      "Connect all operational systems",
      "Define KPIs and alert thresholds",
      "Configure automated response workflows",
      "Monitor and optimize from central dashboard",
    ],
    workflowSteps: [
      { title: "Monitor", description: "Real-time KPI tracking across all systems" },
      { title: "Detect", description: "Anomalies and threshold breaches identified" },
      { title: "Respond", description: "Automated workflows triggered to resolve issues" },
      { title: "Report", description: "Stakeholders notified with actionable insights" },
    ],
    screenshots: ["/screenshots/ops-1.png"],
    faq: [],
  },
  {
    slug: "insight-analytics",
    name: "Insight Analytics",
    shortDescription: "AI-powered business intelligence with automated reporting.",
    description:
      "Insight Analytics transforms raw business data into actionable intelligence. Automated reports, predictive analytics, and natural language queries help leaders make data-driven decisions faster.",
    category: "Analytics",
    featured: false,
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://demo.cuzec.com/insight-analytics",
    features: [
      "Automated report generation",
      "Predictive analytics",
      "Natural language queries",
      "Custom dashboard builder",
      "Data pipeline automation",
      "Anomaly detection",
    ],
    techStack: ["OpenAI", "Python", "PostgreSQL", "Google Workspace", "React"],
    problem:
      "Business leaders wait days or weeks for reports while data sits siloed across multiple systems.",
    howItWorks: [
      "Connect data sources across your organization",
      "Configure automated report schedules",
      "Enable AI-powered insights and predictions",
      "Access intelligence via dashboard or natural language",
    ],
    workflowSteps: [
      { title: "Collect", description: "Data aggregated from all connected sources" },
      { title: "Process", description: "Data cleaned, transformed, and analyzed" },
      { title: "Insight", description: "AI generates insights and predictions" },
      { title: "Deliver", description: "Reports delivered to stakeholders automatically" },
    ],
    screenshots: ["/screenshots/analytics-1.png"],
    faq: [],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
