import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-agents",
    name: "AI Agents",
    shortDescription: "Deploy intelligent AI agents that automate complex cognitive tasks.",
    description:
      "Our AI Agent service deploys autonomous agents capable of handling multi-step business processes that traditionally require human judgment. From customer support to data analysis, AI agents work 24/7 with precision.",
    icon: "Bot",
    overview:
      "CUZEC AI Agents are custom-built autonomous systems that understand your business context, make decisions, and execute workflows across your entire tech stack.",
    benefits: [
      "24/7 autonomous operation",
      "Reduced operational costs by up to 70%",
      "Consistent quality and compliance",
      "Scalable without adding headcount",
      "Continuous learning and improvement",
    ],
    workflowExample:
      "Customer inquiry → AI analyzes intent → Retrieves relevant data → Generates response → Updates CRM → Escalates if needed",
    useCases: [
      "Customer support automation",
      "Document processing and analysis",
      "Lead qualification and routing",
      "Data entry and validation",
      "Report generation",
    ],
    technologies: ["OpenAI GPT-4", "Claude", "Python", "n8n", "Custom APIs"],
    challenges: [
      "Complex tasks require human-like judgment",
      "Scaling cognitive work is expensive",
      "Inconsistent quality across team members",
      "Knowledge trapped in individual employees",
    ],
    solutions: [
      "Custom-trained AI agents for your specific workflows",
      "Multi-agent orchestration for complex processes",
      "Human-in-the-loop for critical decisions",
      "Continuous learning from outcomes",
    ],
    automationProcess: [
      { step: 1, title: "Discovery", description: "Map current processes and identify automation opportunities" },
      { step: 2, title: "Design", description: "Design agent architecture and decision trees" },
      { step: 3, title: "Train", description: "Train agents on your data and business rules" },
      { step: 4, title: "Deploy", description: "Deploy agents with monitoring and fallback systems" },
      { step: 5, title: "Optimize", description: "Continuously improve based on performance data" },
    ],
    implementationProcess: [
      { step: 1, title: "Assessment", description: "2-week process audit and opportunity mapping" },
      { step: 2, title: "Pilot", description: "4-week pilot with one workflow" },
      { step: 3, title: "Scale", description: "Roll out across additional workflows" },
      { step: 4, title: "Optimize", description: "Ongoing optimization and expansion" },
    ],
    caseStudySlugs: ["retail-ai-automation"],
    faq: [
      {
        question: "How accurate are AI agents?",
        answer: "Our agents typically achieve 95%+ accuracy after training, with human review for edge cases.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortDescription: "Connect systems and automate end-to-end business processes.",
    description:
      "Workflow Automation connects your disconnected systems and automates multi-step business processes. From simple task routing to complex cross-platform orchestration, we eliminate manual handoffs.",
    icon: "GitBranch",
    overview:
      "We design and implement automated workflows that connect your CRM, ERP, communication tools, and custom systems into seamless, error-free processes.",
    benefits: [
      "Eliminate manual data entry",
      "Reduce process errors by 90%",
      "Faster process completion times",
      "Full audit trail and compliance",
      "Easy to modify and scale",
    ],
    workflowExample:
      "New lead form submission → Validate data → Enrich contact → Score lead → Assign to rep → Send welcome email → Create CRM record",
    useCases: [
      "Employee onboarding",
      "Invoice processing",
      "Approval workflows",
      "Data synchronization",
      "Report generation",
    ],
    technologies: ["n8n", "Make", "Zapier", "Custom APIs", "Webhooks"],
    challenges: [
      "Processes span multiple disconnected systems",
      "Manual handoffs cause delays and errors",
      "No visibility into process status",
      "Difficult to scale manual processes",
    ],
    solutions: [
      "Visual workflow design and documentation",
      "Pre-built integrations for 100+ platforms",
      "Error handling and automatic retry logic",
      "Real-time monitoring and alerting",
    ],
    automationProcess: [
      { step: 1, title: "Map", description: "Document current process flow and pain points" },
      { step: 2, title: "Design", description: "Design optimized automated workflow" },
      { step: 3, title: "Build", description: "Implement workflow with integrations" },
      { step: 4, title: "Test", description: "Thorough testing with edge cases" },
      { step: 5, title: "Deploy", description: "Production deployment with monitoring" },
    ],
    implementationProcess: [
      { step: 1, title: "Audit", description: "Process audit and ROI analysis" },
      { step: 2, title: "Quick Win", description: "Automate highest-impact process first" },
      { step: 3, title: "Expand", description: "Roll out additional workflows" },
      { step: 4, title: "Maintain", description: "Ongoing support and optimization" },
    ],
    caseStudySlugs: ["logistics-workflow-automation"],
    faq: [],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    shortDescription: "Automate CRM operations to accelerate your sales pipeline.",
    description:
      "CRM Automation eliminates the manual work that slows down your sales team. Automatic data entry, lead scoring, follow-up scheduling, and pipeline management keep deals moving.",
    icon: "Users",
    overview:
      "We automate every aspect of CRM management — from lead capture and enrichment to pipeline updates and reporting — so your sales team can focus on selling.",
    benefits: [
      "Sales reps save 15+ hours per week",
      "Higher lead conversion rates",
      "Cleaner, more accurate CRM data",
      "Automated follow-up sequences",
      "Real-time pipeline visibility",
    ],
    workflowExample:
      "Lead captured → Data enriched → Scored by AI → Assigned to rep → Follow-up scheduled → Activity logged → Pipeline updated",
    useCases: [
      "Lead capture and routing",
      "Contact data enrichment",
      "Follow-up automation",
      "Pipeline stage management",
      "Sales reporting",
    ],
    technologies: ["HubSpot", "Salesforce", "Zapier", "OpenAI", "Clearbit"],
    challenges: [
      "Sales reps avoid CRM data entry",
      "Leads fall through the cracks",
      "Inconsistent follow-up processes",
      "Poor data quality affects forecasting",
    ],
    solutions: [
      "Automatic data capture from all channels",
      "AI-powered lead scoring and routing",
      "Intelligent follow-up sequences",
      "Automated pipeline hygiene",
    ],
    automationProcess: [
      { step: 1, title: "Audit CRM", description: "Analyze current CRM usage and data quality" },
      { step: 2, title: "Design Flows", description: "Design automation for each sales stage" },
      { step: 3, title: "Integrate", description: "Connect CRM with marketing and support tools" },
      { step: 4, title: "Automate", description: "Deploy automations with team training" },
      { step: 5, title: "Measure", description: "Track impact on pipeline velocity" },
    ],
    implementationProcess: [
      { step: 1, title: "CRM Review", description: "Audit current CRM setup and data" },
      { step: 2, title: "Priority Flows", description: "Automate top 3 sales processes" },
      { step: 3, title: "Full Rollout", description: "Expand to all pipeline stages" },
      { step: 4, title: "Optimize", description: "Continuous improvement based on metrics" },
    ],
    caseStudySlugs: ["saas-crm-automation"],
    faq: [],
  },
  {
    slug: "whatsapp-automation",
    name: "WhatsApp Automation",
    shortDescription: "Automate customer communication via WhatsApp Business API.",
    description:
      "WhatsApp Automation enables businesses to communicate with customers at scale through WhatsApp. Automated responses, broadcast campaigns, and chatbot integration drive engagement and conversions.",
    icon: "MessageCircle",
    overview:
      "Leverage the world's most popular messaging platform with enterprise-grade automation. Send notifications, handle inquiries, and run campaigns through WhatsApp Business API.",
    benefits: [
      "98% message open rates",
      "24/7 automated customer support",
      "Personalized broadcast campaigns",
      "Seamless handoff to human agents",
      "Rich media messaging support",
    ],
    workflowExample:
      "Customer message → AI chatbot responds → Qualifies inquiry → Retrieves order data → Provides update → Escalates to agent if needed",
    useCases: [
      "Order status updates",
      "Appointment reminders",
      "Customer support chatbot",
      "Marketing campaigns",
      "Payment confirmations",
    ],
    technologies: ["WhatsApp Business API", "OpenAI", "n8n", "Node.js"],
    challenges: [
      "Customers prefer WhatsApp over email",
      "Manual messaging doesn't scale",
      "Slow response times hurt satisfaction",
      "No integration with business systems",
    ],
    solutions: [
      "WhatsApp Business API integration",
      "AI-powered chatbot for instant responses",
      "Automated notifications from business events",
      "CRM integration for conversation history",
    ],
    automationProcess: [
      { step: 1, title: "Setup API", description: "Configure WhatsApp Business API account" },
      { step: 2, title: "Design Flows", description: "Design conversation flows and templates" },
      { step: 3, title: "Integrate", description: "Connect with CRM and business systems" },
      { step: 4, title: "Deploy Bot", description: "Launch chatbot with human fallback" },
      { step: 5, title: "Campaign", description: "Enable broadcast and campaign features" },
    ],
    implementationProcess: [
      { step: 1, title: "Account Setup", description: "WhatsApp Business API verification" },
      { step: 2, title: "Template Approval", description: "Message template creation and approval" },
      { step: 3, title: "Bot Launch", description: "Deploy chatbot for key use cases" },
      { step: 4, title: "Scale", description: "Expand to additional communication flows" },
    ],
    caseStudySlugs: [],
    faq: [],
  },
  {
    slug: "ecommerce-automation",
    name: "E-commerce Automation",
    shortDescription: "Automate your entire e-commerce operation from order to delivery.",
    description:
      "E-commerce Automation streamlines every aspect of online retail — inventory sync, order processing, customer communications, returns, and analytics — across all your sales channels.",
    icon: "ShoppingCart",
    overview:
      "We automate the operational backbone of your e-commerce business, connecting storefronts, payment systems, fulfillment, and customer communication into seamless workflows.",
    benefits: [
      "Faster order processing",
      "Real-time inventory across channels",
      "Automated customer notifications",
      "Reduced fulfillment errors",
      "Unified analytics dashboard",
    ],
    workflowExample:
      "Order placed → Payment verified → Inventory reserved → Fulfillment triggered → Shipping label created → Customer notified → Delivery tracked",
    useCases: [
      "Multi-channel order management",
      "Inventory synchronization",
      "Abandoned cart recovery",
      "Returns processing",
      "Dynamic pricing",
    ],
    technologies: ["Shopify", "Stripe", "n8n", "ShipStation", "Klaviyo"],
    challenges: [
      "Managing orders across multiple channels",
      "Inventory discrepancies cause overselling",
      "Manual fulfillment is slow and error-prone",
      "Customer communication gaps",
    ],
    solutions: [
      "Centralized order management hub",
      "Real-time inventory sync across channels",
      "Automated fulfillment workflows",
      "Proactive customer communication",
    ],
    automationProcess: [
      { step: 1, title: "Connect", description: "Integrate all sales channels and fulfillment" },
      { step: 2, title: "Sync", description: "Set up real-time inventory synchronization" },
      { step: 3, title: "Automate", description: "Automate order-to-delivery workflow" },
      { step: 4, title: "Communicate", description: "Configure customer notification flows" },
      { step: 5, title: "Analyze", description: "Deploy analytics and optimization tools" },
    ],
    implementationProcess: [
      { step: 1, title: "Channel Audit", description: "Map all sales channels and fulfillment" },
      { step: 2, title: "Core Automation", description: "Automate order processing pipeline" },
      { step: 3, title: "Expand", description: "Add marketing and retention automations" },
      { step: 4, title: "Optimize", description: "Continuous optimization based on data" },
    ],
    caseStudySlugs: ["retail-ai-automation"],
    faq: [],
  },
  {
    slug: "lead-automation",
    name: "Lead Automation",
    shortDescription: "Capture, qualify, and nurture leads automatically across all channels.",
    description:
      "Lead Automation ensures no potential customer falls through the cracks. From capture to qualification to nurturing, every lead is handled systematically until conversion.",
    icon: "Target",
    overview:
      "We build automated lead management systems that capture leads from every channel, enrich their data, score their potential, and nurture them through personalized sequences.",
    benefits: [
      "Zero leads lost to manual processes",
      "Faster lead response times",
      "Higher qualification accuracy",
      "Personalized nurture sequences",
      "Clear ROI on marketing spend",
    ],
    workflowExample:
      "Lead captured from form/ad → Data enriched → Scored by AI → Routed to correct team → Nurture sequence triggered → Meeting booked → CRM updated",
    useCases: [
      "Multi-channel lead capture",
      "Lead scoring and routing",
      "Email nurture sequences",
      "Retargeting automation",
      "Lead source attribution",
    ],
    technologies: ["HubSpot", "Zapier", "OpenAI", "Google Ads", "Meta Ads"],
    challenges: [
      "Leads come from too many channels to track",
      "Slow response times lose deals",
      "No systematic qualification process",
      "Marketing and sales misalignment",
    ],
    solutions: [
      "Universal lead capture from all sources",
      "Instant AI-powered qualification",
      "Automated routing to right team member",
      "Multi-touch nurture campaigns",
    ],
    automationProcess: [
      { step: 1, title: "Capture", description: "Set up lead capture from all channels" },
      { step: 2, title: "Enrich", description: "Automated data enrichment and validation" },
      { step: 3, title: "Score", description: "Implement AI lead scoring model" },
      { step: 4, title: "Route", description: "Configure intelligent lead routing" },
      { step: 5, title: "Nurture", description: "Deploy automated nurture sequences" },
    ],
    implementationProcess: [
      { step: 1, title: "Channel Mapping", description: "Identify all lead sources" },
      { step: 2, title: "Capture Setup", description: "Implement universal capture system" },
      { step: 3, title: "Scoring Model", description: "Build and train lead scoring" },
      { step: 4, title: "Nurture Launch", description: "Deploy nurture campaigns" },
    ],
    caseStudySlugs: ["saas-crm-automation"],
    faq: [],
  },
  {
    slug: "operations-automation",
    name: "Operations Automation",
    shortDescription: "Streamline internal operations with intelligent process automation.",
    description:
      "Operations Automation transforms how your internal teams work. From HR onboarding to finance approvals to IT provisioning, we automate the operational processes that slow your business down.",
    icon: "Settings",
    overview:
      "We identify and automate the internal operational processes that consume your team's time — enabling them to focus on strategic work that drives business growth.",
    benefits: [
      "Reduced operational overhead",
      "Faster internal process completion",
      "Improved compliance and audit trails",
      "Better cross-team coordination",
      "Scalable operations without headcount",
    ],
    workflowExample:
      "New hire approved → Accounts created → Equipment ordered → Training scheduled → Manager notified → Onboarding checklist tracked",
    useCases: [
      "Employee onboarding/offboarding",
      "Expense approval workflows",
      "IT provisioning",
      "Compliance reporting",
      "Vendor management",
    ],
    technologies: ["Microsoft 365", "Google Workspace", "Slack", "n8n", "ServiceNow"],
    challenges: [
      "Internal processes are manual and slow",
      "Cross-department coordination is painful",
      "Compliance requirements add complexity",
      "Scaling operations requires more people",
    ],
    solutions: [
      "End-to-end process automation",
      "Cross-system integration",
      "Automated compliance checks",
      "Self-service portals for common requests",
    ],
    automationProcess: [
      { step: 1, title: "Audit", description: "Map all internal operational processes" },
      { step: 2, title: "Prioritize", description: "Identify highest-impact automation targets" },
      { step: 3, title: "Automate", description: "Build and deploy automated workflows" },
      { step: 4, title: "Integrate", description: "Connect with HR, finance, and IT systems" },
      { step: 5, title: "Monitor", description: "Track efficiency gains and optimize" },
    ],
    implementationProcess: [
      { step: 1, title: "Process Audit", description: "Comprehensive operations audit" },
      { step: 2, title: "Quick Wins", description: "Automate top 3 operational processes" },
      { step: 3, title: "Department Rollout", description: "Expand across departments" },
      { step: 4, title: "Continuous Improvement", description: "Ongoing optimization program" },
    ],
    caseStudySlugs: ["logistics-workflow-automation"],
    faq: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
