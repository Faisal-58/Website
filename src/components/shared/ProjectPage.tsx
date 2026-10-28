import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader, Container, Card, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/shared/Cards";
import { BOOKING_URL } from "@/data/site";
import type { Project } from "@/data/projects";

export function projectMetadata(project: Project): Metadata {
  return { title: project.metaTitle, description: project.metaDescription };
}

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                {project.industry}
              </span>
              <Badge>{project.status}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              {project.title} <span className="gradient-text">{project.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">{project.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={BOOKING_URL} variant="primary" size="lg">
                Book a free 30-minute session
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                How It Works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <Card className="max-w-3xl mx-auto text-center py-12 bg-accent/5 border-accent/20">
            <Badge className="mb-4">{project.highlight.label}</Badge>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{project.highlight.title}</h2>
            <p className="text-muted max-w-xl mx-auto">{project.highlight.body}</p>
            {project.highlight.showBookingButton && (
              <div className="mt-8">
                <Button href={BOOKING_URL} variant="primary" size="lg">
                  Book a Free Demo Call
                </Button>
              </div>
            )}
          </Card>

          {project.results && (
            <div className="max-w-5xl mx-auto mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {project.results.map((r) => (
                  <div key={r.label}>
                    <p className="text-2xl md:text-3xl font-semibold text-accent">{r.value}</p>
                    <p className="text-sm text-muted mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
              {project.resultsNote && (
                <p className="text-xs text-muted text-center mt-6 max-w-2xl mx-auto">
                  {project.resultsNote}
                </p>
              )}
            </div>
          )}
        </Container>
      </Section>

      {project.screenshots && (
        <Section className="bg-card/30">
          <Container>
            <SectionHeader label="Screenshots" title={`See ${project.name} in action`} />
            <div className="max-w-5xl mx-auto space-y-12">
              {project.screenshots.map((shot) => (
                <figure key={shot.src}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden shadow-lg shadow-accent/10">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption className="text-sm text-muted mt-3 text-center">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
            {project.screenshotsNote && (
              <p className="text-xs text-muted text-center mt-10">{project.screenshotsNote}</p>
            )}
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeader label="The Problem" title={project.problemsTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.problems.map((p) => (
              <Card key={p.title}>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-it-works">
        <Container>
          <SectionHeader label="How It Works" title={project.stepsTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.steps.map((step, i) => (
              <div key={step.title}>
                <div className="text-4xl font-semibold text-accent/20 mb-2">0{i + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{project.featuresTitle}</h2>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>


            {project.note && (
              <p className="mt-8 text-sm text-muted border-l-2 border-accent/40 pl-4">
                {project.note}
              </p>
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        title={project.cta.title}
        description={project.cta.description}
        primaryLabel="Book a free 30-minute session"
        secondaryLabel="See All Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
