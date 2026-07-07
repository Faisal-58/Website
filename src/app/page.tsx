import { Section, Container } from "@/components/ui/Section";
import {
  ProductCardCompact,
  ServiceCard,
  CaseStudyCard,
  CTASection,
} from "@/components/shared/Cards";
import { AnimatedNetworkCanvas } from "@/components/shared/AnimatedNetwork";
import { getFeaturedProducts } from "@/data/products";
import { services } from "@/data/services";
import { getFeaturedCaseStudies } from "@/data/case-studies";
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
    "OpenAI GPT-4": <Brain className="w-8 h-8 text-orange-500" />,
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
  const featuredProducts = getFeaturedProducts();
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      {/* HERO */}
      <section className="hero-glow relative min-h-screen flex flex-col items-center justify-center px-10 md:px-10 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-80 hero-glow pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(15,118,110,0.08)] border border-[rgba(15,118,110,0.2)] rounded-full px-3.5 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[#0F766E] tracking-wide uppercase">
              Enterprise Automation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Automate Everything.{" "}
            <span className="gradient-text">Scale Without Limits</span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-xl mx-auto mb-10 leading-relaxed">
            CUZEC builds enterprise-grade automation solutions powered by AI agents,
            intelligent workflows, and deep system integrations.
          </p>

          <div className="flex gap-3 flex-wrap justify-center mb-16">
            <button className="bg-[#0F172A] hover:bg-[#1e293b] text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all">
              Book a Demo
            </button>
            <button className="border-2 border-[#E2E8F0] hover:bg-[#EEF2F5] text-[#0F172A] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all">
              Explore Products
            </button>
          </div>

          {/* NETWORK CANVAS - ONLY HERE */}
          <div className="w-full max-w-3xl mx-auto border border-[#E2E8F0] rounded-3xl bg-white overflow-hidden glow">
            <div className="h-72">
              <AnimatedNetworkCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 px-10 border-b border-[#E2E8F0]">
        <div className="text-center text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-7">
          Trusted by forward-thinking enterprises
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center max-w-5xl mx-auto">
          {["Global Retail Co.", "TechFlow SaaS", "SwiftLogistics", "DataPulse Analytics"].map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm font-semibold text-[#64748B] bg-white hover:border-[#14B8A6] hover:text-[#0F766E] hover:bg-[rgba(15,118,110,0.04)] transition-all"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 px-10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Products</div>
            <h2 className="section-title">Automation Products Built for Enterprise</h2>
            <p className="section-subtitle">Purpose-built products that automate your most critical business processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
            {featuredProducts.map((product) => (
              <ProductCardCompact key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center">
            <button className="border-2 border-[#E2E8F0] hover:border-[#64748B] hover:bg-[#EEF2F5] text-[#0F172A] px-7 py-3 rounded-xl text-sm font-semibold transition-all">
              View All Products
            </button>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-10 bg-[#EEF2F5]">
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

      {/* PROCESS - EXACT FROM HTML */}
      <section style={{ background: "#EEF2F5", padding: "100px 40px" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 64px" }}>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">From discovery to deployment in weeks.</h2>
          <p className="section-subtitle">Our proven methodology takes you from workflow audit to live automation with minimal disruption to your operations.</p>
        </div>
        
        <div className="process-track">
          <div className="process-line" />
          
          <div className="process-step active">
            <div className="process-num">01</div>
            <div className="process-content">
              <div className="process-title">Discovery & Audit</div>
              <div className="process-desc">We map your current processes, identify automation opportunities, and calculate ROI potential.</div>
            </div>
          </div>
          
          <div className="process-step">
            <div className="process-num">02</div>
            <div className="process-content">
              <div className="process-title">Workflow Mapping</div>
              <div className="process-desc">Detailed architecture of every trigger, condition, action, and exception in your future system.</div>
            </div>
          </div>
          
          <div className="process-step">
            <div className="process-num">03</div>
            <div className="process-content">
              <div className="process-title">Automation Design</div>
              <div className="process-desc">We design the logic, data models, and integration architecture before writing a single line of code.</div>
            </div>
          </div>
          
          <div className="process-step">
            <div className="process-num">04</div>
            <div className="process-content">
              <div className="process-title">Development</div>
              <div className="process-desc">Full-stack development of workflows, AI agents, integrations, and custom logic in your chosen tools.</div>
            </div>
          </div>
          
          <div className="process-step">
            <div className="process-num">05</div>
            <div className="process-content">
              <div className="process-title">Testing & QA</div>
              <div className="process-desc">Comprehensive testing across all edge cases, error states, and volume scenarios before go-live.</div>
            </div>
          </div>
          
          <div className="process-step">
            <div className="process-num">06</div>
            <div className="process-content">
              <div className="process-title">Deployment</div>
              <div className="process-desc">Staged rollout with monitoring, team training, and documentation to ensure smooth adoption.</div>
            </div>
          </div>
          
          <div className="process-step">
            <div className="process-num">07</div>
            <div className="process-content">
              <div className="process-title">Optimization</div>
              <div className="process-desc">Ongoing monitoring, performance tuning, and iteration as your business evolves and scales.</div>
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
              <div key={tech.name} className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-center hover:border-[#14B8A6] hover:-translate-y-0.5 transition-all">
                <div className="flex justify-center mb-2">
                  {getTechIcon(tech.name)}
                </div>
                <div className="text-xs font-semibold text-[#475569]">{tech.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-10 bg-[#EEF2F5]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Case Studies</div>
            <h2 className="section-title">Results that compound over time</h2>
            <p className="section-subtitle">Every engagement delivers measurable outcomes. See what we&apos;ve built for businesses like yours.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          
          <div className="text-center">
            <button className="border-2 border-[#E2E8F0] hover:border-[#64748B] hover:bg-white text-[#0F172A] px-7 py-3 rounded-xl text-sm font-semibold transition-all">
              View All Case Studies
            </button>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">Trusted by operators who move fast</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white border border-[#E2E8F0] rounded-2xl p-7 relative">
                <div className="text-6xl text-[rgba(15,118,110,0.06)] font-black absolute top-0 left-5 leading-none">
                  &quot;
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-5 relative z-10">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold">
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

      <CTASection />
    </>
  );
}
