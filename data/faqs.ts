export const industryPages: Record<
  string,
  { faqs: { question: string; answer: string }[]; related: { href: string; label: string }[] }
> = {
  "real-estate": {
    faqs: [
      {
        question: "What does the AI Lead Qualifier do?",
        answer:
          "Our AI agent talks to every new lead, finds out what they actually want, and suggests matching properties, so your agents spend their time on serious buyers.",
      },
      {
        question: "Where do new AI Lead Qualifier leads come from?",
        answer:
          "From your website, a landing page or a chat. The AI agent replies straight away, any time of day.",
      },
      {
        question: "What does the AI Lead Qualifier ask a lead?",
        answer:
          "It asks the questions your agents would ask: budget, preferred area, property type and timeline.",
      },
      {
        question: "What happens after the AI Lead Qualifier qualifies a lead?",
        answer:
          "Qualified leads reach your agents with a summary of what the buyer wants, ready for a call or viewing.",
      },
      {
        question: "Which tools can the AI Lead Qualifier connect to?",
        answer:
          "The AI Lead Qualifier can be connected to WhatsApp and to a CRM such as GoHighLevel or HubSpot. It works from the agency's own listings (spreadsheet, database or website) and asks the agency's own qualifying questions, in the agency's tone.",
      },
      {
        question: "How can someone see the AI Lead Qualifier demo?",
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
        question: "What did the BidLevel AI demo package show?",
        answer:
          "In Cuzec's own US plumbing demo package, a sample bid package we built rather than a real client bid, the quote that looked cheapest on paper ($750,700) became the most expensive ($874,500) once BidLevel priced the items it left out.",
      },
      {
        question: "How were the BidLevel AI test figures measured?",
        answer:
          "The test figures were measured on sample bid packages Cuzec built, with known answers and planted traps, not on real client bids. Next, we're validating it on real past bid packages.",
      },
      {
        question: "What did BidLevel AI sample testing show?",
        answer:
          "On sample bid packages Cuzec built, with known answers and planted traps, it took ~1 min to level 4 quotes, a job that takes 1–3 days by hand. In that testing, 100% of planted exclusions were caught and 95–98% of scope items were judged correctly. BidLevel has scope checklists ready for 6 trades, covering US and UK scope.",
      },
      {
        question: "Which quote formats does BidLevel AI accept?",
        answer:
          "3–10 quotes in any format: PDF, scanned paper or photo, Excel, Word, or an email with attachments.",
      },
      {
        question: "Can an estimator change a BidLevel AI result?",
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
        question: "What can a patient start with in Global Health Navigator?",
        answer:
          "From one sentence or an uploaded discharge summary, the agent works out the procedure, filters countries by budget, checks the visa requirements for that passport and finds real hospitals.",
      },
      {
        question: "Does Global Health Navigator replace a doctor?",
        answer:
          "Global Health Navigator supports research and planning. It does not replace advice from a doctor. Example output from a demo. Not medical advice.",
      },
      {
        question: "What safety checks does Global Health Navigator include?",
        answer:
          "For heart surgery, Global Health Navigator asks for angiogram results and warns about flying in urgent cases. For cancer, Global Health Navigator never recommends a country on cost alone.",
      },
      {
        question: "What do the Global Health Navigator screenshots show?",
        answer:
          "Patients start from one simple page: describe the condition, budget and passport. The agent works through each step: specialty, costs, visas, hospitals, then the report.",
      },
      {
        question: "How does a Global Health Navigator conversation start?",
        answer:
          "We build AI agents for patient intake, research and follow-ups. Book a free call to talk through your use case.",
      },
    ],
    related: [{ href: "/services/ai-agents", label: "AI agents for multi-step processes" }],
  },
  coaching: {
    faqs: [
      {
        question: "What did Cuzec build for the coaching client?",
        answer:
          "We built a full AI operations platform for a coaching client: specialised AI agents for strategy, content and marketing, connected to the tools the business already runs on.",
      },
      {
        question: "What does the Cuzec AI Operations Platform take care of?",
        answer:
          "From morning briefings to lead handling, the platform takes care of daily work automatically, while staying fully auditable and under human control.",
      },
      {
        question: "Which tools is the Cuzec AI Operations Platform connected to?",
        answer:
          "CRM, scheduling, SEO, forms and email marketing, through a standards-based integration layer, so the AI can take approved actions.",
      },
      {
        question: "Who stays in control of the Cuzec AI Operations Platform?",
        answer: "Every action auditable, with a human in control.",
      },
      {
        question: "Who owns the Cuzec coaching system?",
        answer:
          "This system was custom-built for one client and belongs to them. We keep client details confidential and never resell what we build for a client.",
      },
      {
        question: "How does a new Cuzec project start?",
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
          "Cuzec AI agents are custom-built autonomous systems that understand a client's business context, make decisions, and execute workflows.",
      },
      {
        question: "What work can a Cuzec AI agent handle?",
        answer:
          "Cuzec deploys AI agents for multi-step business processes that traditionally require human judgment, from customer support to data analysis.",
      },
      {
        question: "What does a Cuzec AI agent workflow look like?",
        answer:
          "For a customer inquiry, a Cuzec AI agent analyzes intent, retrieves relevant data, generates a response, updates the CRM, and escalates if needed.",
      },
      {
        question: "What jobs do Cuzec AI agents handle?",
        answer:
          "Cuzec AI agents handle customer support, document processing and analysis, lead qualification and routing, data entry and validation, and report generation.",
      },
      {
        question: "Does a person still take critical decisions with Cuzec AI agents?",
        answer:
          "Cuzec keeps a person in the loop for critical decisions.",
      },
      {
        question: "How does a first Cuzec AI agents project run?",
        answer:
          "A first Cuzec AI agents project starts with a process audit and opportunity mapping, then a pilot with one workflow. It is typically weeks, with a fixed quote agreed before work starts.",
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
        question: "What is Cuzec workflow automation?",
        answer:
          "Cuzec workflow automation connects disconnected systems and automates multi-step business processes, from simple task routing to complex cross-platform orchestration, and it removes manual handoffs.",
      },
      {
        question: "What does a Cuzec workflow look like?",
        answer:
          "In one Cuzec workflow, a new lead form submission is validated, the contact is enriched, the lead is scored and assigned to a rep, a welcome email is sent, and a CRM record is created.",
      },
      {
        question: "Which processes does Cuzec workflow automation cover?",
        answer:
          "Cuzec workflow automation covers employee onboarding, invoice processing, approval workflows, data synchronization, and report generation.",
      },
      {
        question: "How long do Cuzec workflow design and build take?",
        answer:
          "Cuzec workflow design and build are typically weeks, with a fixed quote agreed before work starts.",
      },
      {
        question: "What happens in a Cuzec process audit?",
        answer: "A Cuzec process audit maps all business processes and system touchpoints.",
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
        question: "What does Cuzec CRM automation include?",
        answer:
          "Cuzec CRM automation handles routine CRM tasks while maintaining data quality and compliance, and it connects the CRM for lead management.",
      },
      {
        question: "What does a Cuzec CRM signup workflow look like?",
        answer:
          "When a prospect signs up, Cuzec CRM automation fills in the data, scores the lead, assigns it to the right rep, sends a follow-up email, and sends a calendar invite.",
      },
      {
        question: "What does Cuzec CRM automation cover?",
        answer:
          "Cuzec CRM automation covers lead scoring and routing, automated follow-up, CRM data enrichment, activity logging and insights, and pipeline stage automation.",
      },
      {
        question: "Which tools does Cuzec connect for CRM automation?",
        answer:
          "Cuzec connects CRM automation to GoHighLevel, HubSpot, and n8n.",
      },
      {
        question: "How long is a Cuzec CRM audit?",
        answer: "A Cuzec CRM audit is a process and data audit, typically weeks, with a fixed quote agreed before work starts.",
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
        question: "What is Cuzec WhatsApp automation?",
        answer:
          "Cuzec builds conversational bots and workflow automation on WhatsApp, and the bots turn WhatsApp into a revenue channel.",
      },
      {
        question: "What does a Cuzec WhatsApp message flow look like?",
        answer:
          "When a customer sends a WhatsApp message, Cuzec's chatbot responds instantly, collects information, creates a CRM record, schedules a follow-up, and sends a payment link.",
      },
      {
        question: "What does Cuzec WhatsApp automation cover?",
        answer:
          "Cuzec WhatsApp automation covers customer support, order status notifications, appointment reminders, lead qualification, and broadcast campaigns.",
      },
      {
        question: "What does Cuzec connect to WhatsApp?",
        answer: "Cuzec connects WhatsApp to the CRM and to the client's other systems.",
      },
    ],
    related: [{ href: "/real-estate", label: "AI lead qualification for real estate agencies" }],
  },
  "ecommerce-automation": {
    faqs: [
      {
        question: "What does Cuzec e-commerce automation include?",
        answer:
          "Cuzec e-commerce automation covers inventory sync, order processing, customer communications, returns, and analytics across sales channels.",
      },
      {
        question: "What does a Cuzec e-commerce order workflow look like?",
        answer:
          "When an order is placed, Cuzec e-commerce automation verifies payment, reserves inventory, triggers fulfillment, creates a shipping label, and notifies the customer.",
      },
      {
        question: "What else does Cuzec e-commerce automation cover?",
        answer:
          "Cuzec e-commerce automation also covers multi-channel order management, inventory automation, returns processing, customer notifications, and analytics and reporting.",
      },
      {
        question: "Which platforms does Cuzec connect for e-commerce automation?",
        answer:
          "Cuzec runs e-commerce automation on n8n, covering inventory sync, order processing, customer communications, returns, and analytics.",
      },
    ],
    // TODO(hamza): no industry page on the site is an e-commerce vertical, so this page does not link to one.
    related: [],
  },
  "lead-automation": {
    faqs: [
      {
        question: "What does Cuzec lead automation do?",
        answer:
          "Cuzec lead automation captures leads from every touchpoint, qualifies them, and nurtures them until they are sales-ready, so a lead is not lost.",
      },
      {
        question: "What does a Cuzec lead workflow look like?",
        answer:
          "Cuzec lead automation identifies the lead source, captures the lead, scores it, enriches the record, assigns it to a sales rep, and starts a nurture campaign.",
      },
      {
        question: "What does Cuzec lead automation cover?",
        answer:
          "Cuzec lead automation covers inbound capture, scoring and qualification, routing and assignment, nurturing, and the handoff from lead to customer.",
      },
      {
        question: "How does a Cuzec lead-automation build run?",
        answer:
          "A Cuzec lead-automation build audits the current lead process, designs the workflows, implements and tests them, and launches with team training.",
      },
    ],
    related: [{ href: "/real-estate", label: "AI lead qualification for real estate agencies" }],
  },
  "operations-automation": {
    faqs: [
      {
        question: "What does Cuzec operations automation handle?",
        answer:
          "Cuzec operations automation covers employee onboarding, expense management, compliance tracking, and internal workflows, so a team can spend its time on strategic work.",
      },
      {
        question: "What does a Cuzec onboarding workflow look like?",
        answer:
          "For a new hire, Cuzec operations automation triggers onboarding, orders equipment, provisions system access, schedules training, and records orientation.",
      },
      {
        question: "What does Cuzec operations automation cover?",
        answer:
          "Cuzec operations automation covers employee onboarding, expense management, compliance tracking, internal requests, and document management.",
      },
      {
        question: "What does Cuzec operations automation automate first?",
        answer:
          "Cuzec starts by identifying the highest-impact operations, then automates the 5 highest-impact processes.",
      },
    ],
    related: [{ href: "/coaching", label: "AI operations platform for a coaching business" }],
  },
};
