export interface Project {
  slug: string;
  industry: string;
  name: string;
  status: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  titleHighlight: string;
  intro: string;
  cardSummary: string;
  highlight: { label: string; title: string; body: string; showBookingButton?: boolean };
  results?: { value: string; label: string }[];
  resultsNote?: string;
  problemsTitle: string;
  problems: { title: string; desc: string }[];
  stepsTitle: string;
  steps: { title: string; desc: string }[];
  featuresTitle: string;
  features: string[];
  builtWith?: string[];
  note?: string;
  cta: { title: string; description: string };
}

export const projects: Project[] = [
  {
    slug: "real-estate",
    industry: "Real Estate",
    name: "AI Lead Qualification & Property Matcher",
    status: "Working demo",
    metaTitle: "AI Lead Qualification for Real Estate",
    metaDescription:
      "An AI agent that qualifies real estate leads and matches them to your listings, so your agents only talk to serious buyers.",
    title: "AI that qualifies your property leads and",
    titleHighlight: "matches them to listings",
    intro:
      "Our AI agent talks to every new lead, finds out what they actually want, and suggests matching properties, so your agents spend their time on serious buyers.",
    cardSummary:
      "An AI agent that qualifies new property leads and matches them to listings, so agents only spend time on serious buyers.",
    highlight: {
      label: "Working demo",
      title: "See it live on a call",
      body: "We'll walk you through the working demo in a free 30-minute call: how it qualifies a lead, matches properties and hands over to your agent. Bring your questions.",
      showBookingButton: true,
    },
    problemsTitle: "Where agencies lose deals",
    problems: [
      {
        title: "Leads go cold",
        desc: "A new enquiry comes in while your agents are on viewings. By the time someone replies, the buyer has moved on.",
      },
      {
        title: "Time spent on the wrong leads",
        desc: "Agents spend hours on calls with people who aren't ready, can't afford it, or want a different area.",
      },
      {
        title: "Matching by hand",
        desc: "Finding the right listings for each buyer means digging through spreadsheets and portals every time.",
      },
    ],
    stepsTitle: "From enquiry to qualified buyer",
    steps: [
      {
        title: "A lead comes in",
        desc: "From your website, a landing page or a chat. The AI agent replies straight away, any time of day.",
      },
      {
        title: "The AI qualifies them",
        desc: "It asks the questions your agents would ask: budget, preferred area, property type and timeline.",
      },
      {
        title: "It matches properties",
        desc: "Based on the answers, it suggests listings that fit what the buyer is looking for.",
      },
      {
        title: "Your team takes over",
        desc: "Qualified leads reach your agents with a summary of what the buyer wants, ready for a call or viewing.",
      },
    ],
    featuresTitle: "Fits into how you already work",
    features: [
      "Can be connected to WhatsApp",
      "Can be connected to your CRM (GoHighLevel, HubSpot and others)",
      "Works from your own listings (spreadsheet, database or website)",
      "Asks your own qualifying questions, in your agency's tone",
    ],
    cta: {
      title: "Want this for your agency?",
      description:
        "Book a free 30-minute call. We'll walk through the demo and how it would work with your leads and listings.",
    },
  },
  {
    slug: "construction",
    industry: "Construction",
    name: "BidLevel AI",
    status: "Working product · now taking pilot clients",
    metaTitle: "BidLevel AI: Subcontractor Bid Leveling for Construction",
    metaDescription:
      "BidLevel AI compares subcontractor quotes against one scope checklist, flags what each bidder left out and shows the true cheapest bid, in about a minute.",
    title: "Level subcontractor bids in",
    titleHighlight: "minutes, not days",
    intro:
      "BidLevel AI compares subcontractor quotes against one scope checklist, flags what each bidder left out, prices the gaps and shows the true cheapest bid. Every flag links to the exact sentence in the original quote.",
    cardSummary:
      "Compares subcontractor quotes, flags what each bidder left out and shows the true cheapest bid, in about a minute instead of 1–3 days.",
    highlight: {
      label: "From our demo bid package",
      title: "The cheapest bid on paper was the most expensive",
      body: "In our US plumbing demo package, Bidder A's quote looked cheapest at $750,700. Once BidLevel priced the items it left out, its true cost was $874,500, the most expensive of the four bidders.",
    },
    results: [
      { value: "~1 min", label: "to level 4 quotes, a job that takes 1–3 days by hand" },
      { value: "100%", label: "of planted exclusions caught in testing" },
      { value: "95–98%", label: "of scope items judged correctly in testing" },
      { value: "6 trades", label: "with US and UK scope checklists ready" },
    ],
    resultsNote:
      "Measured on sample bid packages we built with known answers and planted traps. Next, we're validating it on real past bid packages.",
    problemsTitle: "Why bid leveling hurts",
    problems: [
      {
        title: "It takes days",
        desc: "Estimators spend 1–3 days per trade package lining quotes up by hand before anyone can make a decision.",
      },
      {
        title: "Small print costs money",
        desc: "One missed exclusion or \"by GC\" clause can turn into tens of thousands in change orders later.",
      },
      {
        title: "Every quote looks different",
        desc: "PDFs, scanned paper, Excel sheets and emails. No two bidders send their price the same way.",
      },
    ],
    stepsTitle: "How BidLevel works",
    steps: [
      {
        title: "Upload the quotes",
        desc: "3–10 quotes in any format: PDF, scanned paper or photo, Excel, Word, or an email with attachments.",
      },
      {
        title: "AI reads every quote",
        desc: "It pulls out totals, line items, inclusions, exclusions, \"by others\" items, allowances, alternates, validity and terms.",
      },
      {
        title: "Leveled against your scope",
        desc: "Each bidder is checked against a 25–40 item scope checklist. Gaps are priced and every bid gets an adjusted total and rank.",
      },
      {
        title: "Your estimator decides",
        desc: "Click any cell to see the source sentence, override anything, then export the results.",
      },
    ],
    featuresTitle: "What it does",
    features: [
      "Every flag linked to the exact sentence in the original quote",
      "Automatic checks for maths errors, expired quotes, missing bonds and price outliers",
      "Scope checklists for US plumbing, electrical, HVAC and drywall, and UK plumbing and electrical",
      "Estimators can override any decision, and every change is logged",
      "Exports to Excel, your own bid-tab template, or a 1-page PDF summary",
      "Your logo and brand colours on the app and reports",
    ],
    builtWith: ["Claude AI (Anthropic)"],
    cta: {
      title: "Send us a past bid package",
      description:
        "We'll level one of your past bid packages for free and walk you through the results on a call.",
    },
  },
  {
    slug: "healthcare",
    industry: "Healthcare",
    name: "Global Health Navigator",
    status: "Working demo",
    metaTitle: "Global Health Navigator: AI Medical Travel Advisor",
    metaDescription:
      "An AI agent that helps patients choose a country and hospital for treatment abroad, with costs, visa steps and safety rules for high-risk cases.",
    title: "An AI advisor that helps patients",
    titleHighlight: "plan treatment abroad",
    intro:
      "Global Health Navigator helps patients choose a country and hospital for their treatment. They describe their situation or upload a medical report, and get one structured plan: recommended countries, hospitals, costs and visa steps.",
    cardSummary:
      "An AI agent that turns a patient's situation or medical report into a plan for treatment abroad: countries, hospitals, costs and visas.",
    highlight: {
      label: "Example request",
      title: "“I need a knee replacement, budget $8k, Pakistani passport.”",
      body: "From one sentence or an uploaded discharge summary, the agent works out the procedure, filters countries by budget, checks the visa requirements for that passport and finds real hospitals.",
    },
    problemsTitle: "Why planning treatment abroad is hard",
    problems: [
      {
        title: "Too many options",
        desc: "Patients compare dozens of countries, hospitals and price lists with no clear place to start.",
      },
      {
        title: "Costs and visas vary",
        desc: "Prices, visa types, processing times and fees all depend on the treatment and the patient's passport.",
      },
      {
        title: "Reports are hard to use",
        desc: "The key details sit inside PDFs like discharge summaries and lab reports.",
      },
    ],
    stepsTitle: "How the agent works",
    steps: [
      {
        title: "Describe or upload",
        desc: "Plain text or a PDF report. The agent picks out the diagnosis, procedure, age and urgency.",
      },
      {
        title: "Match specialty and countries",
        desc: "It maps the condition to a medical specialty and candidate countries, leaving out the patient's home country.",
      },
      {
        title: "Check costs and visas",
        desc: "Price ranges per country, filtered by budget, plus visa type, processing time and fees for the patient's passport.",
      },
      {
        title: "Find hospitals and report",
        desc: "A live web search finds real hospitals, and the agent writes one structured report.",
      },
    ],
    featuresTitle: "Built-in safety rules",
    features: [
      "Organ transplants: covers legal donor routes and tissue matching",
      "Heart surgery: asks for angiogram results and warns about flying in urgent cases",
      "Cancer: never recommends a country on cost alone",
      "Automated evaluations and a CI pipeline to test the agent's answers",
      "Usage logging and statistics",
    ],
    builtWith: ["Claude AI agent", "Python", "FastAPI", "Tavily web search"],
    note: "Global Health Navigator supports research and planning. It does not replace advice from a doctor.",
    cta: {
      title: "Want an AI agent for your health business?",
      description:
        "We build AI agents for patient intake, research and follow-ups. Book a free call to talk through your use case.",
    },
  },
  {
    slug: "coaching",
    industry: "Coaching",
    name: "AI Operations Platform",
    status: "Client project",
    metaTitle: "AI Operations Platform for a Coaching Business",
    metaDescription:
      "A team of specialised AI agents for strategy, content and marketing, connected to the client's own tools and kept under human control.",
    title: "An AI operations team for a",
    titleHighlight: "coaching business",
    intro:
      "We built a full AI operations platform for a coaching client: specialised AI agents for strategy, content and marketing, connected to the tools the business already runs on.",
    cardSummary:
      "Specialised AI agents for strategy, content and marketing, connected to the client's CRM, scheduling and email, under human control.",
    highlight: {
      label: "The result",
      title: "Daily operations running quietly in the background",
      body: "From morning briefings to lead handling, the platform takes care of daily work automatically, while staying fully auditable and under human control.",
    },
    problemsTitle: "The problem",
    problems: [
      {
        title: "Too much to do",
        desc: "Strategy, content, marketing, leads and admin all compete for the same few hours in the week.",
      },
      {
        title: "Generic AI doesn't know the business",
        desc: "Chat tools don't know your offers, your clients or your voice, so everything needs rewriting.",
      },
      {
        title: "AI that can only talk",
        desc: "Most AI tools give advice but can't update the CRM, book a call or send an email.",
      },
    ],
    stepsTitle: "What we built",
    steps: [
      {
        title: "A team of specialised agents",
        desc: "Separate AI agents for strategy, content and marketing, each with a clear role.",
      },
      {
        title: "Governed memory",
        desc: "Every piece of business knowledge is reviewed before the AI is allowed to rely on it.",
      },
      {
        title: "Connected to real tools",
        desc: "CRM, scheduling, SEO, forms and email marketing, through a standards-based integration layer, so the AI can take approved actions.",
      },
      {
        title: "Grows with the team",
        desc: "It learns the client's writing voice from their edits, and non-technical staff can create new agents without a developer.",
      },
    ],
    featuresTitle: "What it handles",
    features: [
      "Daily morning briefings",
      "Lead handling",
      "Content written in the client's own voice",
      "New agents and public-facing bots, created without a developer",
      "Every action auditable, with a human in control",
    ],
    note: "This system was custom-built for one client and belongs to them. We keep client details confidential and never resell what we build for a client.",
    cta: {
      title: "Want an AI operations team for your business?",
      description:
        "Every system we build is custom. Book a free call and tell us where your time goes today.",
    },
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
