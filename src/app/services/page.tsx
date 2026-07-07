import type { Metadata } from "next";
import { Section, SectionHeader, Container } from "@/components/ui/Section";
import { ServiceCard, CTASection } from "@/components/shared/Cards";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "CUZEC automation services — AI agents, workflow automation, CRM, WhatsApp, e-commerce, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Automation Services
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            End-to-end automation services that transform how your business operates.
            From strategy to deployment and ongoing optimization.
          </p>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <SectionHeader
            label="Approach"
            title="Every Service Includes"
            description="Consistent deliverables across all our automation services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Process Audit", desc: "Comprehensive analysis of current workflows" },
              { title: "Custom Design", desc: "Tailored automation architecture for your needs" },
              { title: "Implementation", desc: "Full build, test, and deployment" },
              { title: "Ongoing Support", desc: "Monitoring, optimization, and expansion" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
