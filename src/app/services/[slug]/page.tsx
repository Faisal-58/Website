import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container, Badge, Card } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection, CaseStudyCard } from "@/components/shared/Cards";
import { services, getServiceBySlug } from "@/data/services";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { getProject } from "@/data/projects";
import { BOOKING_URL, deliverySteps } from "@/data/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

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
  return pageMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
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
  const relatedProjects = service.projectSlugs.map(getProject);

  return (
    <>
      <JsonLd data={serviceJsonLd(service.name, service.description, `/services/${service.slug}`)} />
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <Badge className="mb-4">Service</Badge>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-8">{service.description}</p>
          <Button href={BOOKING_URL} variant="primary" size="lg">
            Book a free 30-minute call
          </Button>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
              <p className="text-muted leading-relaxed mb-6">{service.overview}</p>
              <h3 className="font-semibold mb-3">Workflow Example</h3>
              <Card className="bg-accent/5 border-accent/20">
                <p className="text-sm font-mono text-muted">{service.workflowExample}</p>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Sound familiar?</h2>
              <ul className="space-y-3">
                {service.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-red-400 mt-1">✕</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What we build</h2>
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
          <h2 className="text-2xl font-semibold mb-6">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-2xl font-semibold mb-2">How we work</h2>
          <p className="text-muted mb-6">
            Delivery is typically weeks, with a fixed quote agreed before work starts. Support continues for 2 months after launch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step) => (
              <Card key={step.num}>
                <div className="text-accent-light font-bold text-sm mb-2">{step.num}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
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

      {relatedProjects.length > 0 && (
        <Section className="bg-card/30">
          <Container>
            <h2 className="text-2xl font-semibold mb-6">Projects we&apos;ve built</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link key={project.slug} href={`/${project.slug}`} className="group block h-full">
                  <Card hover className="h-full flex flex-col">
                    <Badge className="mb-3 self-start">{project.industry}</Badge>
                    <h3 className="font-semibold mb-2 group-hover:text-accent-light transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {project.cardSummary}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-accent-light group-hover:gap-2 transition-all">
                      See the project <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {relatedCaseStudies.length > 0 && (
        <Section className="bg-card/30">
          <Container>
            <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
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
            <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
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
      />
    </>
  );
}
