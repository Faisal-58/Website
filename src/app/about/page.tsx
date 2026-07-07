import type { Metadata } from "next";
import { Section, SectionHeader, Container, Card } from "@/components/ui/Section";
import { EcosystemVisualization3D } from "@/components/shared/Visualizations";
import { CTASection } from "@/components/shared/Cards";
import { teamMembers, companyValues } from "@/data/blog";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CUZEC's mission, vision, team, and approach to enterprise automation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              About CUZEC
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              We Exist to Make Business{" "}
              <span className="gradient-text">Run Itself</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              CUZEC was founded on a simple belief: businesses shouldn&apos;t waste
              human potential on tasks that machines can do better. We build the
              automation infrastructure that lets companies scale without proportional
              headcount growth.
            </p>
          </div>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Mission"
                title="Our Mission"
                description="Empower every business to automate intelligently, scaling operations without scaling complexity."
                align="left"
                className="mb-0"
              />
            </div>
            <div>
              <SectionHeader
                label="Vision"
                title="Our Vision"
                description="A world where every business process runs autonomously, freeing humans to do work that truly matters."
                align="left"
                className="mb-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <SectionHeader
            label="Why We Exist"
            title="Why CUZEC Exists"
            description="The automation gap is real. Most businesses know they need automation but lack the expertise to implement it effectively."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Problem",
                content:
                  "Businesses lose 30-50% of employee time to manual, repetitive tasks. Existing tools are fragmented and require technical expertise most teams don't have.",
              },
              {
                title: "The Gap",
                content:
                  "Off-the-shelf automation tools handle simple tasks but fail at complex, multi-system workflows. Custom development is expensive and slow.",
              },
              {
                title: "Our Solution",
                content:
                  "CUZEC bridges the gap with enterprise-grade automation products and services that combine AI intelligence with deep system integration.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.content}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            label="Ecosystem"
            title="Enterprise Ecosystem"
            description="See how CUZEC connects every part of your business into a unified automation ecosystem."
          />
          <EcosystemVisualization3D />
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <SectionHeader label="Team" title="Meet the Team" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} hover>
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-4">
                  <span className="text-accent-light font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-accent-light mb-2">{member.role}</p>
                <p className="text-sm text-muted">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader label="Values" title="Company Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value) => (
              <Card key={value.title}>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <SectionHeader
            label="Philosophy"
            title="Automation Philosophy"
            description="We believe automation should augment human capability, not replace human judgment."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Automate the predictable, empower the exceptional.",
              "Every automation must deliver measurable ROI within 90 days.",
              "Intelligence beats rules — use AI where judgment is needed.",
              "Transparency and auditability are non-negotiable.",
              "Automations must improve continuously through data feedback.",
            ].map((principle) => (
              <div key={principle} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <p className="text-muted">{principle}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            label="Framework"
            title="Business Transformation Framework"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { phase: "Assess", desc: "Audit current processes and quantify automation potential" },
              { phase: "Design", desc: "Architect optimal automation solutions aligned with business goals" },
              { phase: "Deploy", desc: "Build, test, and launch automations with full monitoring" },
              { phase: "Scale", desc: "Expand successful automations across the organization" },
            ].map((item, i) => (
              <div key={item.phase} className="relative">
                <div className="text-4xl font-bold text-accent/20 mb-2">0{i + 1}</div>
                <h3 className="font-semibold mb-2">{item.phase}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <SectionHeader
            label="Approach"
            title="Technology Approach"
            description="We choose the right tool for each job, combining best-in-class platforms with custom development."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Platform Agnostic",
                desc: "We integrate with your existing stack — no vendor lock-in, no rip-and-replace.",
              },
              {
                title: "AI-First",
                desc: "Where traditional automation falls short, we deploy AI agents for intelligent decision-making.",
              },
              {
                title: "Security by Design",
                desc: "Every solution is built with enterprise security, compliance, and audit requirements from day one.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
