import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";
import { CTASection } from "@/components/shared/Cards";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how CUZEC automation delivers measurable results for enterprise clients.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Proof of Results
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Real outcomes from real clients. Explore how CUZEC automation drives
            measurable business impact across industries.
          </p>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <CaseStudyGrid studies={caseStudies} />
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "9,500+", label: "Hours Saved" },
              { value: "$7.3M", label: "Client Impact" },
              { value: "80%", label: "Avg. Automation Rate" },
              { value: "3x", label: "Avg. Efficiency Gain" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-accent-light">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want Results Like These?"
        description="Let's discuss how CUZEC can deliver similar outcomes for your business."
      />
    </>
  );
}
