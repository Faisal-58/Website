import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container, Card, Badge } from "@/components/ui/Section";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";
import { CTASection } from "@/components/shared/Cards";
import { Breadcrumbs } from "@/components/seo/ContentBlocks";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Demos and client work",
  description: "Working demos and client projects built by the Cuzec team.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Our work", path: "/case-studies" },
            ]}
          />
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            See What We Build
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Products, demos and client projects we&apos;ve built across real estate,
            construction, healthcare and coaching. Client details stay confidential.
          </p>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link key={project.slug} href={`/${project.slug}`} className="group block h-full">
                <Card hover className="h-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge>{project.industry}</Badge>
                    <span className="text-xs text-muted">{project.status}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                    {project.cardSummary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-accent-light group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          {caseStudies.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">Client Case Studies</h2>
              <CaseStudyGrid studies={caseStudies} />
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        title="Have a process you want automated?"
        description="Tell us how it works today and we'll show you what an automated version could look like."
      />
    </>
  );
}
