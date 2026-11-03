import { Section, SectionHeader, Container } from "@/components/ui/Section";
import { ServiceCard, CTASection } from "@/components/shared/Cards";
import { Breadcrumbs } from "@/components/seo/ContentBlocks";
import { services } from "@/data/services";
import { deliverySteps } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Cuzec automation services: AI agents, workflow automation, CRM, WhatsApp, e-commerce, lead and operations automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]}
          />
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Automation Services
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            AI agents and automations built around the tools you already use. Delivery is
            typically weeks, with a fixed quote agreed before work starts, and 2 months of support after launch.
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
            label="How We Work"
            title="Every project works the same way"
            description="Four steps from first call to live automation, with a fixed price agreed before we start."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((item) => (
              <div key={item.num} className="p-6 rounded-xl border border-border bg-card">
                <div className="text-accent-light font-bold text-sm mb-2">{item.num}</div>
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
