import type { Metadata } from "next";
import { Section, SectionHeader, Container, Card } from "@/components/ui/Section";
import { TechNetworkVisualization } from "@/components/shared/Visualizations";
import { CTASection } from "@/components/shared/Cards";
import { technologies } from "@/data/blog";

export const metadata: Metadata = {
  title: "Technology",
  description: "CUZEC's technology ecosystem — AI, automation platforms, integrations, and enterprise tools.",
};

const categories = [
  { key: "ai", label: "AI Stack", description: "Intelligent automation powered by leading AI models" },
  { key: "automation", label: "Automation Stack", description: "Best-in-class workflow automation platforms" },
  { key: "platform", label: "Platforms", description: "Enterprise platforms we integrate with" },
  { key: "integration", label: "Integrations", description: "Communication, payment, and messaging integrations" },
] as const;

export default function TechnologyPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Technology
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technology Ecosystem
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            We integrate with the platforms and tools your business already uses,
            connecting them into a unified automation ecosystem.
          </p>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeader
            label="Network"
            title="Interactive Technology Network"
            description="Explore how CUZEC connects your entire tech stack."
          />
          <div className="rounded-2xl border border-border bg-card overflow-hidden h-[500px]">
            <TechNetworkVisualization />
          </div>
        </Container>
      </Section>

      {categories.map((cat) => {
        const items = technologies.filter((t) => t.category === cat.key);
        return (
          <Section key={cat.key} className={cat.key === "automation" ? "bg-card/30" : ""}>
            <Container>
              <SectionHeader
                label={cat.label}
                title={cat.label}
                description={cat.description}
                align="left"
                className="mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((tech) => (
                  <Card key={tech.name} hover>
                    <h3 className="font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted">{tech.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <Section className="bg-card/30">
        <Container>
          <SectionHeader
            label="Approach"
            title="Platform Agnostic Integration"
            description="We don't lock you into a single platform. We choose the best tool for each job."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "100+ Integrations",
                desc: "Pre-built connectors for the most popular business platforms.",
              },
              {
                title: "Custom API Development",
                desc: "When off-the-shelf integrations don't exist, we build them.",
              },
              {
                title: "Real-time Sync",
                desc: "Bi-directional data sync keeps all systems in perfect alignment.",
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

      <CTASection
        title="Need a Custom Integration?"
        description="We build integrations for any platform. Let's discuss your tech stack."
      />
    </>
  );
}
