import type { Service } from "@/types";

// No statistics here unless they come from a real client project.
// Timelines live in deliverySteps (data/site.ts) so every page tells the same story.
export const services: Service[] = [
  {
    slug: "ai-agents",
    name: "AI Agents",
    shortDescription:
      "AI agents that answer enquiries, qualify leads, read documents and take actions in your tools, with a human in control.",
    description:
      "We build AI agents that handle work which normally needs a person to read, think and reply: answering enquiries, qualifying leads, reading documents and updating your systems. Each agent is built around your business, your rules and the tools you already use.",
    icon: "Bot",
    overview:
      "A Cuzec AI agent is not a generic chatbot. It knows your services, asks the questions your team would ask, and can take real actions such as booking a call, updating your CRM or writing a report. Anything important goes to a person for approval, and every action is logged.",
    benefits: [
      "Replies to customers straight away, any time of day",
      "Follows your rules, questions and tone of voice",
      "Takes real actions in your CRM, calendar and email",
      "A person approves anything important",
      "Every action is logged, so you can see what it did",
    ],
    workflowExample:
      "New enquiry → AI asks your qualifying questions → Checks your data → Replies or books a call → Updates your CRM → Hands over to your team",
    useCases: [
      "Answering customer enquiries",
      "Qualifying and routing leads",
      "Reading quotes, reports and documents",
      "Writing content in your own voice",
      "Daily summaries and briefings",
      "Research and report writing",
    ],
    technologies: ["OpenAI", "Claude", "n8n"],
    challenges: [
      "Your team spends hours answering the same questions",
      "Leads wait too long for a reply",
      "Reading documents and reports takes days",
      "Generic AI tools don't know your business",
    ],
    solutions: [
      "An agent trained on your services, rules and examples",
      "Connected to the tools you already use",
      "A human in control of anything important",
      "Improved during 2 months of support after launch",
    ],
    automationProcess: [
      { step: 1, title: "A request comes in", description: "A message, a form, an email or an uploaded document." },
      { step: 2, title: "The agent understands it", description: "It works out what is needed, using your own information." },
      { step: 3, title: "It takes action", description: "It replies, books, updates your CRM or writes a report." },
      { step: 4, title: "Your team stays in control", description: "Important steps go to a person, and everything is logged." },
    ],
    projectSlugs: ["real-estate", "healthcare", "coaching"],
    caseStudySlugs: [],
    faq: [
      {
        question: "What if the AI gets something wrong?",
        answer:
          "We test every agent against real examples and edge cases before launch. Anything important, such as a quote or a message to a key client, can go to a person for approval first.",
      },
      {
        question: "Will it sound like us?",
        answer:
          "Yes. We set it up with your questions, your wording and examples of how your team replies.",
      },
      {
        question: "Do we need to change our tools?",
        answer: "No. We connect the agent to the tools you already use.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortDescription:
      "Connect your tools and automate the repetitive steps between them, from new orders and forms to reports and follow-ups.",
    description:
      "Most businesses run on several tools that don't talk to each other, so people copy data between them by hand. We connect those tools and automate the steps in between, so work moves on by itself.",
    icon: "GitBranch",
    overview:
      "We map how a task moves through your business today, find the manual steps, and replace them with automated workflows, usually built in n8n. Where a step needs judgement, such as reading a document, we add AI to that step.",
    benefits: [
      "No more copying data between tools",
      "Tasks happen the same way every time",
      "Your team gets notified only when they need to act",
      "Built on the tools you already pay for",
      "Easy to change as your business grows",
    ],
    workflowExample:
      "Form submitted → Data checked → Added to your CRM and spreadsheet → Task created for your team → Confirmation email sent",
    useCases: [
      "Moving data between apps",
      "Processing forms and new orders",
      "Reading and filing documents",
      "Automatic reports and summaries",
      "Notifications and approvals",
      "Comparing quotes and documents",
    ],
    technologies: ["n8n", "OpenAI", "Claude", "Google Workspace", "Slack"],
    challenges: [
      "Copying the same data into several tools",
      "Mistakes from manual data entry",
      "Tasks forgotten between team members",
      "Reports that take hours to put together",
    ],
    solutions: [
      "Workflows that connect your tools end to end",
      "AI steps for reading documents and making simple decisions",
      "Alerts when something needs a person",
      "Clear documentation, so you know how it works",
    ],
    automationProcess: [
      { step: 1, title: "Something happens", description: "A form is filled, a file arrives or a deal changes stage." },
      { step: 2, title: "The workflow starts", description: "It checks the data and decides what needs to happen." },
      { step: 3, title: "Tools get updated", description: "Your CRM, sheets, email and other apps are updated automatically." },
      { step: 4, title: "Your team is told", description: "Only when something needs a person to act." },
    ],
    projectSlugs: ["construction", "coaching"],
    caseStudySlugs: [],
    faq: [
      {
        question: "Which tools can you connect?",
        answer:
          "Cuzec connects workflow automation to n8n, Google Workspace, Slack, and WhatsApp.",
      },
      {
        question: "Can we change the workflow later?",
        answer:
          "Yes. We document every workflow, and changes are easy to make. Ongoing monthly support is available after the first 2 months.",
      },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    shortDescription:
      "Keep your CRM up to date automatically: new leads added, follow-ups sent, deals moved and your team reminded at the right time.",
    description:
      "A CRM only helps if it is up to date, and keeping it up to date takes time your team doesn't have. We automate the routine work, so every lead is recorded, followed up and moved forward without manual data entry.",
    icon: "Users",
    overview:
      "We connect your CRM to your website, inbox, calendar and messaging, then automate the routine steps: adding leads, sending follow-ups, updating deal stages and reminding your team. Cuzec connects CRM automation to GoHighLevel, HubSpot, and n8n.",
    benefits: [
      "Every lead recorded automatically",
      "Follow-ups sent on time, every time",
      "Less manual data entry for your team",
      "A clear view of where each deal stands",
      "Works with the CRM you already use",
    ],
    workflowExample:
      "New lead → Added to CRM → Welcome message sent → Follow-up scheduled → Sales rep reminded → Deal stage updated after the call",
    useCases: [
      "Adding leads from forms, chat and email",
      "Automatic follow-up sequences",
      "Moving deals between stages",
      "Reminders for your sales team",
      "Cleaning up duplicate contacts",
      "Weekly pipeline summaries",
    ],
    technologies: ["GoHighLevel", "HubSpot", "n8n", "OpenAI", "Google Workspace"],
    challenges: [
      "Leads missing from the CRM",
      "Follow-ups forgotten",
      "Hours spent on data entry",
      "No clear picture of the pipeline",
    ],
    solutions: [
      "Leads added automatically from every channel",
      "Follow-up sequences that run by themselves",
      "Deal stages updated from real activity",
      "AI summaries of calls and conversations",
    ],
    automationProcess: [
      { step: 1, title: "A lead arrives", description: "From your website, chat, WhatsApp, email or an ad." },
      { step: 2, title: "It goes into your CRM", description: "With its source, details and next step." },
      { step: 3, title: "Follow-ups run", description: "Messages and reminders go out on schedule." },
      { step: 4, title: "Your team closes", description: "They focus on calls, with the CRM kept up to date for them." },
    ],
    projectSlugs: ["real-estate", "coaching"],
    caseStudySlugs: [],
    faq: [
      {
        question: "Which CRMs do you work with?",
        answer:
          "Cuzec connects CRM automation to GoHighLevel, HubSpot, and n8n.",
      },
      {
        question: "Will our existing data be affected?",
        answer: "No. We test every automation before it touches your live data.",
      },
    ],
  },
  {
    slug: "whatsapp-automation",
    name: "WhatsApp Automation",
    shortDescription:
      "Reply to WhatsApp enquiries instantly, qualify leads, book appointments and send reminders, connected to your CRM.",
    description:
      "Many customers prefer WhatsApp to email or phone calls. We build WhatsApp assistants that reply instantly, answer common questions, qualify leads and book appointments, and hand the conversation to your team when needed.",
    icon: "MessageCircle",
    overview:
      "We connect WhatsApp to an AI assistant and your CRM. It replies in your tone, asks your qualifying questions, books appointments and sends reminders. Your team can see every conversation and take over at any time.",
    benefits: [
      "Instant replies, any time of day",
      "Customers stay on the app they already use",
      "Appointments and reminders handled automatically",
      "Every conversation saved to your CRM",
      "Your team can take over any conversation",
    ],
    workflowExample:
      "WhatsApp message → AI replies and asks your questions → Books a viewing or call → Sends a reminder → Saves the lead to your CRM",
    useCases: [
      "Answering enquiries",
      "Qualifying leads",
      "Booking appointments and viewings",
      "Appointment reminders",
      "Order and booking updates",
      "Follow-up messages",
    ],
    technologies: ["WhatsApp", "OpenAI", "n8n", "GoHighLevel", "HubSpot"],
    challenges: [
      "WhatsApp messages left unanswered after hours",
      "The same questions answered again and again",
      "Leads from WhatsApp never reach the CRM",
      "No-shows because nobody sent a reminder",
    ],
    solutions: [
      "An AI assistant on your business WhatsApp number",
      "Your FAQs, prices and booking rules built in",
      "Conversations and leads saved to your CRM",
      "Easy hand-over to a person",
    ],
    automationProcess: [
      { step: 1, title: "A customer messages", description: "On your business WhatsApp number." },
      { step: 2, title: "The AI replies", description: "It answers questions and asks what they need." },
      { step: 3, title: "It books or qualifies", description: "Appointments are booked and leads are scored." },
      { step: 4, title: "Your team takes over", description: "With the full conversation and details in your CRM." },
    ],
    projectSlugs: ["real-estate"],
    caseStudySlugs: [],
    faq: [
      {
        question: "Can we keep our current WhatsApp number?",
        answer:
          "Usually yes. We'll check your number and set it up on WhatsApp.",
      },
      {
        question: "Can a person take over a conversation?",
        answer: "Yes. Your team can see every conversation and step in at any time.",
      },
    ],
  },
  {
    slug: "ecommerce-automation",
    name: "E-commerce Automation",
    shortDescription:
      "Automate orders, stock updates, customer messages and returns across your online store and the tools behind it.",
    description:
      "Running an online store means a lot of repetitive work behind the scenes: processing orders, updating stock, answering \"where is my order?\" and handling returns. We automate those steps so your team can focus on growing the store.",
    icon: "ShoppingCart",
    overview:
      "We connect your store to your stock, shipping and messaging tools, and automate the routine steps in between. An AI assistant can answer common customer questions, such as order status and returns, using your real order data.",
    benefits: [
      "Orders processed without manual steps",
      "Stock kept in sync across channels",
      "Customers get answers about their order straight away",
      "Fewer mistakes in orders and invoices",
      "More time for marketing and growth",
    ],
    workflowExample:
      "New order → Stock updated → Invoice created → Shipping label made → Customer updated by email or WhatsApp",
    useCases: [
      "Order processing",
      "Stock updates across channels",
      "Order status questions",
      "Returns and refunds",
      "Abandoned cart follow-ups",
      "Sales reports",
    ],
    technologies: ["n8n", "OpenAI", "WhatsApp"],
    challenges: [
      "Orders processed by hand",
      "Stock out of sync between channels",
      "Too many \"where is my order?\" messages",
      "Returns that take too long to handle",
    ],
    solutions: [
      "Order workflows that run by themselves",
      "Stock synced between your store and other channels",
      "An AI assistant for order and return questions",
      "Daily or weekly sales summaries",
    ],
    automationProcess: [
      { step: 1, title: "An order comes in", description: "From your store or another sales channel." },
      { step: 2, title: "Systems update", description: "Stock, invoices and shipping are handled automatically." },
      { step: 3, title: "The customer is kept informed", description: "Updates go out by email or WhatsApp." },
      { step: 4, title: "Your team handles exceptions", description: "Only unusual orders or returns need a person." },
    ],
    projectSlugs: [],
    caseStudySlugs: [],
    faq: [
      {
        question: "Which store platforms do you work with?",
        answer:
          "Cuzec runs e-commerce automation on n8n, with OpenAI and WhatsApp where a workflow needs them.",
      },
    ],
  },
  {
    slug: "lead-automation",
    name: "Lead Automation",
    shortDescription:
      "Capture leads from every channel, reply straight away, qualify them with AI and pass the serious ones to your team.",
    description:
      "Leads go cold when nobody replies quickly, and your team loses time on people who were never going to buy. We automate how leads are captured, answered and qualified, so your team spends its time on serious buyers.",
    icon: "Target",
    overview:
      "Every new lead gets an instant reply. An AI agent asks your qualifying questions, such as budget, timeline and needs, then passes qualified leads to your team with a short summary, and keeps following up with the rest.",
    benefits: [
      "Every lead gets a reply straight away",
      "Your team talks to serious buyers first",
      "Leads arrive with a summary of what they need",
      "Follow-ups continue without anyone remembering to send them",
      "Leads from every channel in one place",
    ],
    workflowExample:
      "Lead fills a form → Instant reply → AI asks budget and timeline → Qualified lead sent to your team with a summary → Others get follow-ups",
    useCases: [
      "Website and landing page leads",
      "Leads from ads and social media",
      "WhatsApp and chat enquiries",
      "Lead qualification",
      "Lead follow-up sequences",
      "Booking sales calls",
    ],
    technologies: ["OpenAI", "Claude", "n8n", "GoHighLevel", "HubSpot", "WhatsApp"],
    challenges: [
      "Leads waiting hours or days for a reply",
      "Time spent on leads that never buy",
      "Leads spread across inboxes and apps",
      "Follow-ups that never happen",
    ],
    solutions: [
      "Instant replies on every channel",
      "AI qualification using your own questions",
      "One place for every lead",
      "Automatic follow-ups until a lead is ready",
    ],
    automationProcess: [
      { step: 1, title: "A lead comes in", description: "From your website, ads, chat or WhatsApp." },
      { step: 2, title: "It gets a reply", description: "Straight away, any time of day." },
      { step: 3, title: "AI qualifies it", description: "Using the questions your team would ask." },
      { step: 4, title: "Your team takes over", description: "Qualified leads arrive with a summary, ready for a call." },
    ],
    projectSlugs: ["real-estate", "coaching"],
    caseStudySlugs: [],
    faq: [
      {
        question: "Will leads know they're talking to AI?",
        answer:
          "We recommend being open about it, and we can set the assistant to say so. Leads can ask for a person at any time.",
      },
      {
        question: "Can we choose the qualifying questions?",
        answer: "Yes. The agent asks your own questions, in your own tone.",
      },
    ],
  },
  {
    slug: "operations-automation",
    name: "Operations Automation",
    shortDescription:
      "Automate internal admin such as onboarding, approvals, reports and daily briefings, so your team can focus on the work that matters.",
    description:
      "Every business has internal admin that eats into the day: onboarding, approvals, expense tracking, reports and status updates. We automate those routines and add AI where a task needs reading or writing.",
    icon: "Zap",
    overview:
      "We look at the internal tasks your team repeats every week and automate the ones that follow clear rules. AI agents can prepare daily briefings, summarise documents and draft reports, with your team reviewing anything important.",
    benefits: [
      "Less time on admin, more on real work",
      "Routine tasks done the same way every time",
      "Daily briefings and reports prepared for you",
      "Clear records of who approved what",
      "Easy to extend to new processes",
    ],
    workflowExample:
      "New team member added → Accounts created → Documents sent for signing → Manager notified → Onboarding checklist tracked",
    useCases: [
      "Employee onboarding",
      "Approvals and sign-offs",
      "Expense tracking",
      "Daily briefings",
      "Weekly reports",
      "Document summaries",
    ],
    technologies: ["n8n", "OpenAI", "Claude", "Google Workspace", "Slack"],
    challenges: [
      "Admin taking hours every week",
      "Approvals stuck in inboxes",
      "Reports put together by hand",
      "Processes that live in one person's head",
    ],
    solutions: [
      "Automated onboarding and approval flows",
      "AI-prepared briefings and reports",
      "Reminders when something is waiting",
      "Documented processes that anyone can follow",
    ],
    automationProcess: [
      { step: 1, title: "We find the routine", description: "The tasks your team repeats every week." },
      { step: 2, title: "We automate the steps", description: "Forms, approvals, reminders and records." },
      { step: 3, title: "AI handles the reading and writing", description: "Briefings, summaries and report drafts." },
      { step: 4, title: "Your team reviews", description: "Anything important is checked by a person." },
    ],
    projectSlugs: ["coaching", "construction"],
    caseStudySlugs: [],
    faq: [
      {
        question: "Which processes should we automate first?",
        answer:
          "The ones that happen often and follow clear rules. We'll help you pick them on the free first call.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
