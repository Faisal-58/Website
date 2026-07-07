import type { Metadata } from "next";
import { Section, SectionHeader, Container, Card, Badge } from "@/components/ui/Section";
import { CTASection } from "@/components/shared/Cards";
import { resources } from "@/data/blog";
import { Download, BookOpen, FileText, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Automation guides, workflow templates, industry insights, and downloads from CUZEC.",
};

const typeIcons = {
  guide: BookOpen,
  template: FileText,
  insight: Lightbulb,
  download: Download,
};

const typeLabels = {
  guide: "Automation Guides",
  template: "Workflow Templates",
  insight: "Industry Insights",
  download: "Downloads",
};

export default function ResourcesPage() {
  const grouped = {
    guide: resources.filter((r) => r.type === "guide"),
    template: resources.filter((r) => r.type === "template"),
    insight: resources.filter((r) => r.type === "insight"),
    download: resources.filter((r) => r.type === "download"),
  };

  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Resources & Downloads
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Guides, templates, and insights to help you on your automation journey.
            Free resources from the CUZEC team.
          </p>
        </Container>
      </section>

      {(Object.keys(grouped) as Array<keyof typeof grouped>).map((type) => {
        const items = grouped[type];
        if (items.length === 0) return null;
        const Icon = typeIcons[type];

        return (
          <Section
            key={type}
            className={type === "template" ? "bg-card/30 border-t border-border" : "border-t border-border"}
          >
            <Container>
              <div className="flex items-center gap-3 mb-8">
                <Icon className="w-5 h-5 text-accent-light" />
                <h2 className="text-2xl font-bold">{typeLabels[type]}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((resource) => (
                  <Card key={resource.slug} hover>
                    <Badge className="mb-3">{resource.category}</Badge>
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted mb-4">{resource.description}</p>
                    {resource.downloadUrl ? (
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center gap-1 text-sm text-accent-light hover:text-accent transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download
                      </a>
                    ) : (
                      <span className="text-sm text-accent-light">Coming soon</span>
                    )}
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CTASection
        title="Want Personalized Guidance?"
        description="Our team can help you apply these resources to your specific business context."
        primaryLabel="Talk to an Expert"
      />
    </>
  );
}
