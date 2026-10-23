import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";
import {
  IndustriesGrid,
  ServiceCard,
  CaseStudyCard,
  CTASection,
} from "@/components/shared/Cards";
import { AnimatedNetworkCanvas } from "@/components/shared/AnimatedNetwork";
import { services } from "@/data/services";
import { getFeaturedCaseStudies } from "@/data/case-studies";
import { BOOKING_URL } from "@/data/site";
import { testimonials, technologies } from "@/data/blog";
import {
  Brain,
  Zap,
  Network,
  MessageCircle,
  Globe,
  TrendingUp,
  Map,
  Mail,
} from "lucide-react";

function getTechIcon(techName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "OpenAI": <Brain className="w-8 h-8 text-orange-500" />,
    Claude: <Zap className="w-8 h-8 text-amber-500" />,
    n8n: <Network className="w-8 h-8 text-red-500" />,
    Slack: <MessageCircle className="w-8 h-8 text-blue-600" />,
    WhatsApp: <MessageCircle className="w-8 h-8 text-green-500" />,
    GoHighLevel: <TrendingUp className="w-8 h-8 text-purple-600" />,
    "Google Maps": <Map className="w-8 h-8 text-blue-500" />,
    "Google Workspace": <Mail className="w-8 h-8 text-yellow-500" />,
  };
  return iconMap[techName] || <Globe className="w-8 h-8 text-gray-500" />;
}

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative min-h-screen flex flex-col items-center justify-center px-10 md:px-10 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-80 hero-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(43,19,207,0.08)] border border-[rgba(43,19,207,0.2)] rounded-full px-3.5 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-[#7460FF] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[#2B13CF] tracking-wide uppercase">
              AI Agents & Automation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.15]">
            AI agents for{" "}
            <span className="gradient-text">real estate, construction, healthcare and coaching</span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-xl mx-auto mb-10 leading-relaxed">
            We build AI agents and automations that handle the repetitive work in your
            business, connected to the tools you already use.
          </p>

          <div className="flex gap-3 flex-wrap justify-center mb-16">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
            >
              Book a Free Call
            </a>
            <Link href="/case-studies" className="border-2 border-[#E2E8F0] hover:bg-[#EEF2F5] text-[#0F172A] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all">
              See Our Work
            </Link>
          </div>

          {/* NETWORK CANVAS - ONLY HERE */}
          <div className="w-full max-w-3xl mx-auto border border-[#E2E8F0] rounded-3xl bg-white overflow-hidden glow">
            <div className="h-72">
              <AnimatedNetworkCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 px-10 scroll-mt-20 bg-[#EEF2F5]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Industries</div>
            <h2 className="section-title">Built for the way your industry works</h2>
            <p className="section-subtitle">
              We focus on four industries, so we already know the workflows, the tools and where time gets lost.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <IndustriesGrid />
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Services</div>
            <h2 className="section-title">End-to-End Automation Services</h2>
            <p className="section-subtitle">From strategy to deployment, we handle every aspect of your automation journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#EEF2F5", padding: "100px 40px" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 64px" }}>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">From discovery to deployment in weeks.</h2>
          <p className="section-subtitle">Four steps from first call to live automation, with a fixed price agreed before we start.</p>
        </div>
        
        <div className="process-track">
          <div className="process-line" />

          <div className="process-step active">
            <div className="process-num">01</div>
            <div className="process-content">
              <div className="process-title">Free Discovery Call</div>
              <div className="process-desc">We learn how your business runs today and find where automation will save the most time.</div>
            </div>
          </div>
          <div className="process-step">
            <div className="process-num">02</div>
            <div className="process-content">
              <div className="process-title">Design & Fixed Quote</div>
              <div className="process-desc">We map the workflow, design the solution and give you a fixed price before any work starts.</div>
            </div>
          </div>
          <div className="process-step">
            <div className="process-num">03</div>
            <div className="process-content">
              <div className="process-title">Build & Test</div>
              <div className="process-desc">We build the agents, workflows and integrations, and test them against real scenarios and edge cases.</div>
            </div>
          </div>
          <div className="process-step">
            <div className="process-num">04</div>
            <div className="process-content">
              <div className="process-title">Launch & Support</div>
              <div className="process-desc">We go live, train your team and support you for 2 months, then keep improving as you grow.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH ECOSYSTEM - WITH LOGOS */}
      <section className="py-24 px-10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Technology Ecosystem</div>
            <h2 className="section-title">Built on the tools you already use.</h2>
            <p className="section-subtitle">We work across the entire modern SaaS stack. No rip-and-replace, no new tools to learn.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-center hover:border-[#7460FF] hover:-translate-y-0.5 transition-all">
                <div className="flex justify-center mb-2">
                  {getTechIcon(tech.name)}
                </div>
                <div className="text-xs font-semibold text-[#475569]">{tech.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {featuredCaseStudies.length > 0 && (
        <section className="py-24 px-10">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="section-label">Case Studies</div>
              <h2 className="section-title">Results that compound over time</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {featuredCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* TESTIMONIALS (hidden until real ones are added in data/blog.ts) */}
      {testimonials.length > 0 && (
      <section className="py-24 px-10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">Trusted by operators who move fast</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white border border-[#E2E8F0] rounded-2xl p-7 relative">
                <div className="text-6xl text-[rgba(43,19,207,0.06)] font-black absolute top-0 left-5 leading-none">
                  &quot;
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-5 relative z-10">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2B13CF] to-[#7460FF] flex items-center justify-center text-white text-xs font-bold">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-[#64748B]">{t.role}, {t.company}</p>
                  </div>
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
