import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Container, Badge, Card } from "@/components/ui/Section";
import { CTASection } from "@/components/shared/Cards";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: study.title,
    description: study.shortDescription,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Badge>{study.industry}</Badge>
            <span className="text-sm text-muted">{study.client}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-4xl">
            {study.title}
          </h1>
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <p className="text-2xl font-bold text-accent-light">
                {study.hoursSaved.toLocaleString()}
              </p>
              <p className="text-xs text-muted">Hours Saved</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-success">{study.revenueImpact}</p>
              <p className="text-xs text-muted">Revenue Impact</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{study.efficiencyImprovement}</p>
              <p className="text-xs text-muted">Efficiency</p>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Client Background</h2>
              <p className="text-muted leading-relaxed">{study.clientBackground}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-muted leading-relaxed">{study.problem}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <h2 className="text-2xl font-bold mb-4">Analysis</h2>
          <p className="text-muted leading-relaxed max-w-3xl">{study.analysis}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted leading-relaxed mb-6">{study.solution}</p>
              <h3 className="font-semibold mb-3">Automation Built</h3>
              <ul className="space-y-2">
                {study.automationBuilt.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Implementation</h2>
              <p className="text-muted leading-relaxed">{study.implementation}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <h2 className="text-2xl font-bold mb-6">Automation Architecture</h2>
          <div className="space-y-2 max-w-2xl">
            {study.architecture.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
              >
                <span className="text-xs font-mono text-accent-light w-6">{i + 1}</span>
                <span className="text-sm font-mono">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-6">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.results.map((result) => (
              <Card key={result.metric} className="text-center">
                <p className="text-2xl font-bold text-accent-light mb-1">{result.value}</p>
                <p className="text-sm text-muted">{result.metric}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
          <ul className="space-y-3 max-w-3xl">
            {study.lessonsLearned.map((lesson) => (
              <li key={lesson} className="flex items-start gap-2 text-muted">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                {lesson}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        title="Ready for Similar Results?"
        description="Let's discuss how CUZEC can deliver measurable impact for your business."
      />
    </>
  );
}
