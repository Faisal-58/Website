import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Layers, Play, Puzzle } from "lucide-react";
import { Container } from "@/components/ui/Section";
import {
  IndustriesGrid,
  CaseStudyCard,
  CTASection,
} from "@/components/shared/Cards";
import { LaptopWorkflow } from "@/components/home/LaptopWorkflow";
import { getFeaturedCaseStudies } from "@/data/case-studies";
import { BOOKING_URL } from "@/data/site";
import { testimonials, technologies } from "@/data/blog";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  absolute: true,
});

const features = [
  { href: "/services/ai-agents", label: "AI Agents", icon: Bot },
  { href: "/services/workflow-automation", label: "Process Automation", icon: Layers },
  { href: "/technology", label: "Integrations", icon: Puzzle },
  { href: "/case-studies", label: "Business Growth", icon: BarChart3 },
];

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      <section className="px-3 pb-6 pt-3 sm:px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-[#14B8A6]/45 bg-[#061A1B] shadow-[0_0_80px_rgba(20,184,166,0.16)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_72%_58%,rgba(20,184,166,0.28),transparent_62%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_12%_0%,rgba(15,118,110,0.35),transparent_60%)]" />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,480px)] lg:px-14 lg:py-16">
            <div className="max-w-[680px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/40 bg-[#0F766E]/30 px-3.5 py-1.5">
                <span className="text-mint text-xs">✦</span>
                <span className="font-display text-xs font-medium tracking-wide text-ink">
                  AI Automation Agency
                </span>
              </div>

              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
                AI Automation for
                <span className="mt-1 block text-mint">Modern Businesses.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
                Automate workflows, connect your tools, and let AI handle the busy work — so you can focus on growth.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 font-display text-sm font-semibold text-[#061A1B] shadow-[0_0_24px_rgba(163,255,203,0.3)] transition hover:bg-[#c9ffdf]"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-mint/50 px-5 py-3 font-display text-sm font-semibold text-ink transition hover:bg-mint/10"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-mint/70">
                    <Play className="h-2.5 w-2.5 fill-mint text-mint" />
                  </span>
                  Watch Demo
                </Link>
              </div>
            </div>

            <LaptopWorkflow />
          </div>

          <div className="relative grid grid-cols-2 border-t border-mint/20 md:grid-cols-4">
            {features.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center justify-center gap-3 border-mint/15 px-4 py-5 text-ink transition hover:bg-mint/10 md:border-r md:last:border-r-0 [&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r"
              >
                <Icon className="h-5 w-5 text-mint" strokeWidth={1.75} />
                <span className="font-display text-sm font-medium sm:text-base">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-20 px-6 py-16 sm:px-10">
        <Container>
          <div className="mx-auto mb-8 max-w-6xl">
            <div className="section-label">Industries</div>
            <h2 className="section-title">Built for the way your industry works</h2>
            <p className="section-subtitle max-w-2xl">
              We focus on four industries, so we already know the workflows, the tools and where time gets lost.
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <IndustriesGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-mint/15 px-6 py-16 sm:px-10">
        <div className="mx-auto mb-8 max-w-6xl">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">From discovery to deployment in weeks.</h2>
          <p className="section-subtitle max-w-2xl">
            Four steps from first call to live automation, with a fixed price agreed before we start.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Free Discovery Call", "We learn how your business runs today and find where automation will save the most time."],
            ["02", "Design & Fixed Quote", "We map the workflow, design the solution and give you a fixed price before any work starts."],
            ["03", "Build & Test", "We build the agents, workflows and integrations, and test them against real scenarios and edge cases."],
            ["04", "Launch & Support", "We go live, train your team and support you for 2 months, then keep improving as you grow."],
          ].map(([num, title, desc]) => (
            <div key={num} className="rounded-2xl border border-mint/20 bg-card p-5">
              <div className="mb-3 font-display text-[13px] font-semibold tabular-nums text-mint">{num}</div>
              <div className="mb-1 font-display text-base font-semibold text-ink">{title}</div>
              <p className="text-[15px] leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-mint/15 px-6 py-16 sm:px-10">
        <Container>
          <div className="mx-auto mb-8 max-w-4xl">
            <div className="section-label">Technology Ecosystem</div>
            <h2 className="section-title">Built on the tools you already use.</h2>
            <p className="section-subtitle max-w-2xl">
              Cuzec connects the tools below to the systems a business already uses.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-mint/25 bg-card px-4 py-5 text-center transition hover:border-mint hover:shadow-[0_0_24px_rgba(20,184,166,0.18)]"
              >
                <div className="font-display text-sm font-semibold text-ink">{tech.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="px-6 py-16 sm:px-10">
          <Container>
            <div className="mx-auto mb-8 max-w-6xl">
              <div className="section-label">Case Studies</div>
              <h2 className="section-title">Results that compound over time</h2>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
              {featuredCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="px-6 py-16 sm:px-10">
          <Container>
            <div className="mx-auto mb-8 max-w-5xl">
              <div className="section-label">Testimonials</div>
              <h2 className="section-title">Trusted by operators who move fast</h2>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.author} className="relative rounded-2xl border border-mint/20 bg-card p-7">
                  <p className="relative z-10 mb-5 text-sm leading-relaxed text-muted">{t.quote}</p>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.author}</p>
                    <p className="text-xs text-muted">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
