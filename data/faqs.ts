export const industryPages: Record<
  string,
  { faqs: { question: string; answer: string }[]; related: { href: string; label: string }[] }
> = {
  "real-estate": {
    faqs: [
      {
        question: "What does the real estate agent do?",
        answer:
          "Our AI agent talks to every new lead, finds out what they actually want, and suggests matching properties, so your agents spend their time on serious buyers.",
      },
      {
        question: "Where do new leads come from?",
        answer:
          "From your website, a landing page or a chat. The AI agent replies straight away, any time of day.",
      },
      {
        question: "What does it ask a lead?",
        answer:
          "It asks the questions your agents would ask: budget, preferred area, property type and timeline.",
      },
      {
        question: "What happens after a lead is qualified?",
        answer:
          "Qualified leads reach your agents with a summary of what the buyer wants, ready for a call or viewing.",
      },
      {
        question: "Which tools can it connect to?",
        answer:
          "It can be connected to WhatsApp and to your CRM (GoHighLevel, HubSpot and others). It works from your own listings (spreadsheet, database or website) and asks your own qualifying questions, in your agency's tone.",
      },
      {
        question: "How do we see the demo?",
        answer:
          "Book a free 30-minute call. We'll walk through the demo and how it would work with your leads and listings.",
      },
    ],
    related: [
      { href: "/services/ai-agents", label: "AI agents for lead qualification and routing" },
      { href: "/services/lead-automation", label: "Lead automation that captures and qualifies enquiries" },
      { href: "/services/crm-automation", label: "CRM automation for follow-ups and pipeline stages" },
      { href: "/services/whatsapp-automation", label: "WhatsApp automation for customer messages" },
    ],
  },
  construction: {
    faqs: [
      {
        question: "What does BidLevel AI do?",
        answer:
          "BidLevel AI compares subcontractor quotes against one scope checklist, flags what each bidder left out, prices the gaps and shows the true cheapest bid. Every flag links to the exact sentence in the original quote.",
      },
      {
        question: "What did the demo package show?",
        answer:
          "In our US plumbing demo package, the quote that looked cheapest on paper ($750,700) became the most expensive ($874,500) once BidLevel priced the items it left out.",
      },
      {
        question: "How were the test figures measured?",
        answer:
          "Measured on sample bid packages we built with known answers and planted traps. Next, we're validating it on real past bid packages.",
      },
      {
        question: "What did that sample testing show?",
        answer:
          "~1 min to level 4 quotes, a job that takes 1–3 days by hand. 100% of planted exclusions caught in testing. 95–98% of scope items judged correctly in testing. 6 trades with US and UK scope checklists ready.",
      },
      {
        question: "What quote formats can be uploaded?",
        answer:
          "3–10 quotes in any format: PDF, scanned paper or photo, Excel, Word, or an email with attachments.",
      },
      {
        question: "Can an estimator change a result?",
        answer: "Estimators can override any decision, and every change is logged.",
      },
    ],
    related: [
      { href: "/services/ai-agents", label: "AI agents for work that needs judgment" },
      { href: "/services/workflow-automation", label: "Workflow automation across disconnected systems" },
    ],
  },
  healthcare: {
    faqs: [
      {
        question: "What does Global Health Navigator do?",
        answer:
          "Global Health Navigator helps patients choose a country and hospital for their treatment. They describe their situation or upload a medical report, and get one structured plan: recommended countries, hospitals, costs and visa steps.",
      },
      {
        question: "What can a patient start with?",
        answer:
          "From one sentence or an uploaded discharge summary, the agent works out the procedure, filters countries by budget, checks the visa requirements for that passport and finds real hospitals.",
      },
      {
        question: "Does it replace a doctor?",
        answer:
          "Global Health Navigator supports research and planning. It does not replace advice from a doctor. Example output from a demo. Not medical advice.",
      },
      {
        question: "What safety checks are described?",
        answer:
          "Heart surgery: asks for angiogram results and warns about flying in urgent cases. Cancer: never recommends a country on cost alone. Organ transplants: covers legal donor routes and tissue matching.",
      },
      {
        question: "What do the screenshots show?",
        answer:
          "Patients start from one simple page: describe the condition, budget and passport. The agent works through each step: specialty, costs, visas, hospitals, then the report.",
      },
      {
        question: "How does a conversation start?",
        answer:
          "We build AI agents for patient intake, research and follow-ups. Book a free call to talk through your use case.",
      },
    ],
    related: [{ href: "/services/ai-agents", label: "AI agents for multi-step processes" }],
  },
  coaching: {
    faqs: [
      {
        question: "What was built for the coaching client?",
        answer:
          "We built a full AI operations platform for a coaching client: specialised AI agents for strategy, content and marketing, connected to the tools the business already runs on.",
      },
      {
        question: "What does the platform take care of?",
        answer:
          "From morning briefings to lead handling, the platform takes care of daily work automatically, while staying fully auditable and under human control.",
      },
      {
        question: "Which tools is it connected to?",
        answer:
          "CRM, scheduling, SEO, forms and email marketing, through a standards-based integration layer, so the AI can take approved actions.",
      },
      {
        question: "Who stays in control?",
        answer: "Every action auditable, with a human in control.",
      },
      {
        question: "Who owns the system?",
        answer:
          "This system was custom-built for one client and belongs to them. We keep client details confidential and never resell what we build for a client.",
      },
      {
        question: "How does a new project start?",
        answer: "Every system we build is custom. Book a free call and tell us where your time goes today.",
      },
    ],
    related: [
      { href: "/services/ai-agents", label: "AI agents for specialised business workflows" },
      { href: "/services/crm-automation", label: "CRM automation for leads and follow-ups" },
      { href: "/services/workflow-automation", label: "Workflow automation for handoffs between tools" },
    ],
  },
};

export const servicePages: Record<
  string,
  { faqs: { question: string; answer: string }[]; related: { href: string; label: string }[] }
> = {
  "ai-agents": {
    faqs: [
      {
        question: "What is the AI Agents service?",
        answer:
          "Cuzec AI agents are custom-built autonomous systems that understand your business context, make decisions, and execute workflows across your entire tech stack.",
      },
      {
        question: "What work can an agent handle?",
        answer:
          "Our AI Agent service deploys autonomous agents capable of handling multi-step business processes that traditionally require human judgment. From customer support to data analysis, AI agents work 24/7 with precision.",
      },
      {
        question: "What does a workflow look like?",
        answer:
          "Customer inquiry → AI analyzes intent → Retrieves relevant data → Generates response → Updates CRM → Escalates if needed.",
      },
      {
        question: "Which jobs are listed as use cases?",
        answer:
          "Customer support automation, document processing and analysis, lead qualification and routing, data entry and validation, and report generation.",
      },
      {
        question: "Does a person still take critical decisions?",
        answer: "Human-in-the-loop for critical decisions.",
      },
      {
        question: "How does a first project run?",
        answer: "2-week process audit and opportunity mapping. 4-week pilot with one workflow.",
      },
    ],
    related: [
      { href: "/real-estate", label: "AI lead qualification for real estate agencies" },
      { href: "/construction", label: "BidLevel AI for construction bid leveling" },
      { href: "/healthcare", label: "Global Health Navigator for treatment abroad" },
      { href: "/coaching", label: "AI operations platform for a coaching business" },
    ],
  },
  "workflow-automation": {
    faqs: [
      {
        question: "What is workflow automation?",
        answer:
          "Workflow Automation connects your disconnected systems and automates multi-step business processes. From simple task routing to complex cross-platform orchestration, we eliminate manual handoffs.",
      },
      {
        question: "What does a workflow look like?",
        answer:
          "New lead form submission → Validate data → Enrich contact → Score lead → Assign to rep → Send welcome email → Create CRM record.",
      },
      {
        question: "Which processes are listed?",
        answer:
          "Employee onboarding, invoice processing, approval workflows, data synchronization, and report generation.",
      },
      {
        question: "How long do design and build take on this page?",
        answer: "3-week workflow design and approval. 4-6 weeks of development and integration.",
      },
      {
        question: "What happens in the process audit?",
        answer: "Map all business processes and system touchpoints.",
      },
    ],
    related: [
      { href: "/construction", label: "BidLevel AI for construction bid leveling" },
      { href: "/coaching", label: "AI operations platform for a coaching business" },
    ],
  },
  "crm-automation": {
    faqs: [
      {
        question: "What does CRM automation cover?",
        answer:
          "Our CRM Automation service automates routine CRM tasks while maintaining data quality and compliance. We connect your CRM to your entire business ecosystem for seamless lead management.",
      },
      {
        question: "What does a signup workflow look like?",
        answer:
          "Prospect signs up → Data auto-populated → Lead auto-scored → Assigned to right rep → Automated follow-up email → Calendar invite sent.",
      },
      {
        question: "Which jobs are listed as use cases?",
        answer:
          "Lead scoring and routing, automated follow-up workflows, CRM data enrichment, activity logging and insights, and pipeline stage automation.",
      },
      {
        question: "Which CRMs are named?",
        answer: "HubSpot, Salesforce, Pipedrive, Zapier and n8n.",
      },
      {
        question: "How long is the audit on this page?",
        answer: "2-week CRM process and data audit.",
      },
    ],
    related: [
      { href: "/real-estate", label: "AI lead qualification for real estate agencies" },
      { href: "/coaching", label: "AI operations platform for a coaching business" },
    ],
  },
  "whatsapp-automation": {
    faqs: [
      {
        question: "What is WhatsApp automation?",
        answer:
          "We build conversational bots and workflow automation on the WhatsApp Business API. They turn WhatsApp into a revenue channel.",
      },
      {
        question: "What does a message flow look like?",
        answer:
          "Customer sends message → Chatbot responds instantly → Info collected → CRM record created → Follow-up scheduled → Payment link sent.",
      },
      {
        question: "Which jobs are listed as use cases?",
        answer:
          "Customer support automation, order status notifications, appointment reminders, lead qualification, and broadcast campaigns.",
      },
      {
        question: "What gets connected?",
        answer: "Connect WhatsApp to your CRM and systems.",
      },
    ],
    related: [{ href: "/real-estate", label: "AI lead qualification for real estate agencies" }],
  },
  "ecommerce-automation": {
    faqs: [
      {
        question: "What does e-commerce automation cover?",
        answer:
          "E-commerce Automation streamlines every aspect of online retail — inventory sync, order processing, customer communications, returns, and analytics — across all your sales channels.",
      },
      {
        question: "What does an order workflow look like?",
        answer:
          "Order placed → Payment verified → Inventory reserved → Fulfillment triggered → Shipping label created → Customer notified.",
      },
      {
        question: "Which jobs are listed as use cases?",
        answer:
          "Multi-channel order management, inventory automation, returns processing, customer notifications, and analytics and reporting.",
      },
      {
        question: "Which platforms are named?",
        answer: "Shopify, WooCommerce, Stripe, n8n and Make.",
      },
    ],
    // TODO(hamza): no industry page on the site is an e-commerce vertical, so this page does not link to one.
    related: [],
  },
  "lead-automation": {
    faqs: [
      {
        question: "What does lead automation do?",
        answer:
          "Lead Automation ensures no lead falls through the cracks. We capture leads from all touchpoints, qualify them automatically, and nurture them with personalized workflows until they're sales-ready.",
      },
      {
        question: "What does a lead workflow look like?",
        answer:
          "Lead source identified → Auto-captured → Qualification scored → Enriched with data → Assigned to sales rep → Nurture campaign triggered.",
      },
      {
        question: "Which jobs are listed as use cases?",
        answer:
          "Inbound lead capture, lead scoring and qualification, lead routing and assignment, lead nurturing workflows, and lead-to-customer handoff.",
      },
      {
        question: "How does the build on this page run?",
        answer:
          "Audit current lead processes. Design automated lead workflows. Implement and test automations. Launch with team training.",
      },
    ],
    related: [{ href: "/real-estate", label: "AI lead qualification for real estate agencies" }],
  },
  "operations-automation": {
    faqs: [
      {
        question: "What does operations automation cover?",
        answer:
          "Operations Automation handles the backbone of your business — employee onboarding, expense management, compliance tracking, and internal workflows — so your teams can focus on strategic work.",
      },
      {
        question: "What does an onboarding workflow look like?",
        answer:
          "New hire → Onboarding workflow triggered → Equipment ordered → System access provisioned → Training scheduled → Orientation recorded.",
      },
      {
        question: "Which jobs are listed as use cases?",
        answer:
          "Employee onboarding, expense management, compliance tracking, internal request processing, and document management.",
      },
      {
        question: "What is selected first?",
        answer: "Identify highest-impact automations. Automate 5 highest-impact processes.",
      },
    ],
    related: [{ href: "/coaching", label: "AI operations platform for a coaching business" }],
  },
};
