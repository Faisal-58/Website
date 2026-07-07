import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container, Badge, Card } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection, CaseStudyCard } from "@/components/shared/Cards";
import { services, getServiceBySlug } from "@/data/services";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedCaseStudies = service.caseStudySlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter(Boolean);

  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <Badge className="mb-4">Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-8">{service.description}</p>
          <Button href="/contact" variant="primary" size="lg">
            Get Started
          </Button>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
              <p className="text-muted leading-relaxed mb-6">{service.overview}</p>
              <h3 className="font-semibold mb-3">Workflow Example</h3>
              <Card className="bg-accent/5 border-accent/20">
                <p className="text-sm font-mono text-muted">{service.workflowExample}</p>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-muted">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-card border border-border text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {service.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-red-400 mt-1">✕</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
              <ul className="space-y-3">
                {service.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-6">Automation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.automationProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent-light font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <h2 className="text-2xl font-bold mb-6">Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.implementationProcess.map((step) => (
              <Card key={step.step}>
                <div className="text-accent-light font-bold text-sm mb-2">
                  Phase {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.useCases.map((uc) => (
              <div
                key={uc}
                className="p-4 rounded-lg border border-border bg-card text-sm"
              >
                {uc}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {relatedCaseStudies.length > 0 && (
        <Section className="bg-card/30">
          <Container>
            <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map(
                (study) => study && <CaseStudyCard key={study.slug} study={study} />
              )}
            </div>
          </Container>
        </Section>
      )}

      {service.faq.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4 max-w-3xl">
              {service.faq.map((item) => (
                <Card key={item.question}>
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm text-muted">{item.answer}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        title={`Ready to get started with ${service.name}?`}
        description="Book a consultation to discuss how this service can transform your operations."
      />
    </>
  );
}
