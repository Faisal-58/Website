import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container, Badge, Card } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { DemoVideoEmbed, CTASection } from "@/components/shared/Cards";
import { products, getProductBySlug } from "@/data/products";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const caseStudy = product.caseStudySlug
    ? getCaseStudyBySlug(product.caseStudySlug)
    : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <Badge className="mb-4">{product.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-8">{product.description}</p>
          <div className="flex flex-wrap gap-3">
            {product.liveUrl && (
              <Button href={product.liveUrl} variant="primary" size="lg">
                Live Demo <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            )}
            {product.documentation && (
              <Button href={product.documentation} variant="outline" size="lg">
                Documentation
              </Button>
            )}
            <Button href="/contact" variant="secondary" size="lg">
              Contact Sales
            </Button>
          </div>
        </Container>
      </section>

      {/* Overview + Problem */}
      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
              <p className="text-muted leading-relaxed mb-6">{product.description}</p>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Problem Solved</h2>
              <p className="text-muted leading-relaxed">{product.problem}</p>
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
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
          </div>
        </Container>
      </Section>

      {/* How It Works + Workflow */}
      <Section className="bg-card/30">
        <Container>
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {product.howItWorks.map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent-light font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-sm text-muted">{step}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">Workflow Diagram</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 overflow-x-auto pb-4">
            {product.workflowSteps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-4">
                <Card className="min-w-[180px] text-center">
                  <p className="font-semibold text-sm mb-1">{step.title}</p>
                  <p className="text-xs text-muted">{step.description}</p>
                </Card>
                {i < product.workflowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Demo Video */}
      {product.demoVideo && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold mb-6">Demo Video</h2>
            <DemoVideoEmbed url={product.demoVideo} title={product.name} />
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {product.faq.length > 0 && (
        <Section className="bg-card/30">
          <Container>
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4 max-w-3xl">
              {product.faq.map((item) => (
                <Card key={item.question}>
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm text-muted">{item.answer}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Case Study */}
      {caseStudy && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold mb-4">Related Case Study</h2>
            <Card hover className="max-w-2xl">
              <Badge className="mb-3">{caseStudy.industry}</Badge>
              <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-sm text-muted mb-4">{caseStudy.shortDescription}</p>
              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="text-sm text-accent-light hover:text-accent inline-flex items-center gap-1"
              >
                Read case study <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </Container>
        </Section>
      )}

      <CTASection
        title={`Ready to deploy ${product.name}?`}
        description="Book a demo to see this product in action with your specific use case."
      />
    </>
  );
}
