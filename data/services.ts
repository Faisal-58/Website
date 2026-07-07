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
      { step: 1, title: "Process Audit", description: "Map all business processes and system touchpoints" },
      { step: 2, title: "Design", description: "Design workflow architecture and integration points" },
      { step: 3, title: "Build", description: "Implement workflows with error handling" },
      { step: 4, title: "Test", description: "Comprehensive testing across all scenarios" },
      { step: 5, title: "Deploy & Monitor", description: "Production deployment with ongoing monitoring" },
    ],
    implementationProcess: [
      { step: 1, title: "Discovery", description: "Comprehensive process mapping and analysis" },
      { step: 2, title: "Design Phase", description: "3-week workflow design and approval" },
      { step: 3, title: "Implementation", description: "4-6 weeks of development and integration" },
      { step: 4, title: "Rollout", description: "Phased deployment with team training" },
    ],
    caseStudySlugs: ["logistics-workflow-automation"],
    faq: [],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    shortDescription: "Automate CRM operations to accelerate your sales pipeline.",
    description:
      "Our CRM Automation service automates routine CRM tasks while maintaining data quality and compliance. We connect your CRM to your entire business ecosystem for seamless lead management.",
    icon: "Users",
    overview:
      "Sales teams spend 60%+ of their time on CRM data entry and administrative tasks. We automate these activities so your team can focus on selling.",
    benefits: [
      "Sales reps save 15+ hours per week",
      "Higher lead conversion rates",
      "Cleaner, more accurate CRM data",
      "Faster sales cycles",
      "Improved forecasting accuracy",
    ],
    workflowExample:
      "Prospect signs up → Data auto-populated → Lead auto-scored → Assigned to right rep → Automated follow-up email → Calendar invite sent",
    useCases: [
      "Lead scoring and routing",
      "Automated follow-up workflows",
      "CRM data enrichment",
      "Activity logging and insights",
      "Pipeline stage automation",
    ],
    technologies: ["HubSpot", "Salesforce", "Pipedrive", "Zapier", "n8n"],
    challenges: [
      "Manual data entry and updates",
      "Leads get assigned to wrong reps",
      "Follow-ups get forgotten",
      "Poor data quality in CRM",
    ],
    solutions: [
      "Automated lead capture and qualification",
      "Intelligent lead routing rules",
      "Automatic follow-up workflows",
      "Real-time CRM data sync",
    ],
    automationProcess: [
      { step: 1, title: "Audit", description: "Analyze current CRM processes and pain points" },
      { step: 2, title: "Design", description: "Design automation workflows for priority processes" },
      { step: 3, title: "Configure", description: "Build and configure automation rules" },
      { step: 4, title: "Train", description: "Team training on new automated workflows" },
      { step: 5, title: "Monitor", description: "Monitor and optimize performance" },
    ],
    implementationProcess: [
      { step: 1, title: "CRM Audit", description: "2-week CRM process and data audit" },
      { step: 2, title: "Configuration", description: "3-week automation setup and configuration" },
      { step: 3, title: "Integration", description: "Connect with other business systems" },
      { step: 4, title: "Deployment", description: "Launch with team training and support" },
    ],
    caseStudySlugs: ["saas-crm-automation"],
    faq: [],
  },
  {
    slug: "whatsapp-automation",
    name: "WhatsApp Automation",
    shortDescription: "Automate customer communication via WhatsApp Business API.",
    description:
      "WhatsApp Business API enables enterprise-scale messaging automation with 98% open rates. We build conversational bots and workflow automation that turn WhatsApp into a revenue channel.",
    icon: "MessageCircle",
    overview:
      "With 2 billion users and 98% message read rates, WhatsApp is your most effective communication channel. We unlock automation at scale.",
    benefits: [
      "98% message open rates",
      "24/7 automated customer support",
      "Personalized broadcast campaigns",
      "Order and status updates",
      "Lead qualification at scale",
    ],
    workflowExample:
      "Customer sends message → Chatbot responds instantly → Info collected → CRM record created → Follow-up scheduled → Payment link sent",
    useCases: [
      "Customer support automation",
      "Order status notifications",
      "Appointment reminders",
      "Lead qualification",
      "Broadcast campaigns",
    ],
    technologies: ["WhatsApp Business API", "n8n", "Make", "Twilio", "Custom chatbots"],
    challenges: [
      "Poor customer support response times",
      "High SMS costs",
      "Manual broadcast campaigns",
      "No automated lead qualification",
    ],
    solutions: [
      "AI-powered conversational bots",
      "Workflow automation for customer journeys",
      "Broadcast scheduling and personalization",
      "Two-way messaging for sales and support",
    ],
    automationProcess: [
      { step: 1, title: "Strategy", description: "Define WhatsApp automation strategy and use cases" },
      { step: 2, title: "Bot Design", description: "Design conversational flows and bot behavior" },
      { step: 3, title: "Integration", description: "Connect WhatsApp to your CRM and systems" },
      { step: 4, title: "Deployment", description: "Launch bot with monitoring and support" },
      { step: 4, title: "Scale", description: "Expand to additional communication flows" },
    ],
    implementationProcess: [
      { step: 1, title: "Assessment", description: "Evaluate WhatsApp use cases for your business" },
      { step: 2, title: "Design", description: "Design bot flows and automation sequences" },
      { step: 3, title: "Build", description: "Build and integrate WhatsApp bot" },
      { step: 4, title: "Scale", description: "Expand to additional communication flows" },
    ],
    caseStudySlugs: [],
    faq: [],
  },
  {
    slug: "ecommerce-automation",
    name: "E-commerce Automation",
    shortDescription: "Automate your entire e-commerce operation from order to fulfillment.",
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
      "Order placed → Payment verified → Inventory reserved → Fulfillment triggered → Shipping label created → Customer notified",
    useCases: [
      "Multi-channel order management",
      "Inventory automation",
      "Returns processing",
      "Customer notifications",
      "Analytics and reporting",
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "n8n", "Make"],
    challenges: [
      "Managing orders across multiple channels",
      "Inventory sync issues",
      "Manual fulfillment processes",
      "Customer communication delays",
    ],
    solutions: [
      "Unified order management system",
      "Real-time inventory synchronization",
      "Automated fulfillment workflows",
      "Multi-channel customer communications",
    ],
    automationProcess: [
      { step: 1, title: "Audit", description: "Map e-commerce processes and integration points" },
      { step: 2, title: "Design", description: "Design end-to-end order automation workflows" },
      { step: 3, title: "Configure", description: "Set up integrations and automation rules" },
      { step: 4, title: "Test", description: "Testing across all sales channels" },
      { step: 5, title: "Deploy", description: "Launch with monitoring and optimization" },
    ],
    implementationProcess: [
      { step: 1, title: "Integration Audit", description: "Analyze current e-commerce stack" },
      { step: 2, title: "Workflow Design", description: "Design automated order workflows" },
      { step: 3, title: "Implementation", description: "Build and test automations" },
      { step: 4, title: "Go-Live", description: "Deploy with team training" },
    ],
    caseStudySlugs: [],
    faq: [],
  },
  {
    slug: "lead-automation",
    name: "Lead Automation",
    shortDescription: "Capture, qualify, and nurture leads automatically across all channels.",
    description:
      "Lead Automation ensures no lead falls through the cracks. We capture leads from all touchpoints, qualify them automatically, and nurture them with personalized workflows until they're sales-ready.",
    icon: "Target",
    overview:
      "Most leads are lost due to slow response times and manual processes. Lead Automation responds instantly, qualifies accurately, and routes intelligently.",
    benefits: [
      "Zero leads lost to manual processes",
      "Faster lead response times",
      "Higher qualification accuracy",
      "Improved lead-to-customer conversion",
      "Better sales-marketing alignment",
    ],
    workflowExample:
      "Lead source identified → Auto-captured → Qualification scored → Enriched with data → Assigned to sales rep → Nurture campaign triggered",
    useCases: [
      "Inbound lead capture",
      "Lead scoring and qualification",
      "Lead routing and assignment",
      "Lead nurturing workflows",
      "Lead-to-customer handoff",
    ],
    technologies: ["HubSpot", "Salesforce", "Marketo", "n8n", "Zapier"],
    challenges: [
      "Leads lost to slow response",
      "Poor lead qualification",
      "Misaligned sales-marketing",
      "Low conversion rates",
    ],
    solutions: [
      "Instant lead capture and response",
      "AI-powered lead scoring",
      "Intelligent lead routing",
      "Automated nurture campaigns",
    ],
    automationProcess: [
      { step: 1, title: "Lead Source Audit", description: "Identify all lead sources and touchpoints" },
      { step: 2, title: "Scoring Design", description: "Design lead qualification criteria" },
      { step: 3, title: "Workflow Build", description: "Build capture and nurture workflows" },
      { step: 4, title: "Integration", description: "Connect with sales and marketing systems" },
      { step: 5, title: "Launch", description: "Deploy with SLA monitoring" },
    ],
    implementationProcess: [
      { step: 1, title: "Assessment", description: "Audit current lead processes" },
      { step: 2, title: "Design", description: "Design automated lead workflows" },
      { step: 3, title: "Build", description: "Implement and test automations" },
      { step: 4, title: "Deploy", description: "Launch with team training" },
    ],
    caseStudySlugs: [],
    faq: [],
  },
  {
    slug: "operations-automation",
    name: "Operations Automation",
    shortDescription: "Automate internal operations to increase efficiency and compliance.",
    description:
      "Operations Automation handles the backbone of your business — employee onboarding, expense management, compliance tracking, and internal workflows — so your teams can focus on strategic work.",
    icon: "Zap",
    overview:
      "Operations teams spend most of their time on manual coordination and administrative tasks. We automate these workflows so they can focus on optimization and strategy.",
    benefits: [
      "Faster process completion times",
      "Improved compliance tracking",
      "Reduced operational costs",
      "Better team collaboration",
      "Scalable operations without headcount",
    ],
    workflowExample:
      "New hire → Onboarding workflow triggered → Equipment ordered → System access provisioned → Training scheduled → Orientation recorded",
    useCases: [
      "Employee onboarding",
      "Expense management",
      "Compliance tracking",
      "Internal request processing",
      "Document management",
    ],
    technologies: ["Workday", "ServiceNow", "Monday.com", "n8n", "Custom APIs"],
    challenges: [
      "Manual operational processes",
      "Compliance gaps and risks",
      "Poor process visibility",
      "Scalability issues",
    ],
    solutions: [
      "Automated operational workflows",
      "Built-in compliance tracking",
      "Real-time process visibility",
      "Scalable operation systems",
    ],
    automationProcess: [
      { step: 1, title: "Process Audit", description: "Map all operational processes" },
      { step: 2, title: "Priority Selection", description: "Identify highest-impact automations" },
      { step: 3, title: "Workflow Design", description: "Design automated operational workflows" },
      { step: 4, title: "Integration", description: "Connect with HR, finance, and IT systems" },
      { step: 5, title: "Deploy", description: "Launch with monitoring and optimization" },
    ],
    implementationProcess: [
      { step: 1, title: "Operations Audit", description: "Comprehensive operations assessment" },
      { step: 2, title: "Top 5 Processes", description: "Automate 5 highest-impact processes" },
      { step: 3, title: "System Integration", description: "Connect all operational systems" },
      { step: 4, title: "Team Rollout", description: "Deploy with team training" },
    ],
    caseStudySlugs: [],
    faq: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
