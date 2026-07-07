import type { Metadata } from "next";
import { Section, SectionHeader, Container } from "@/components/ui/Section";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTASection } from "@/components/shared/Cards";
import { products, getFeaturedProducts } from "@/data/products";
import { ProductCardCompact } from "@/components/shared/Cards";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore CUZEC's enterprise automation products — AI agents, workflow engines, CRM tools, and more.",
};

export default function ProductsPage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Products
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Enterprise Automation Products
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Purpose-built products that automate your most critical business processes.
            Search, filter, and compare to find the right solution.
          </p>
        </Container>
      </section>

      {featured.length > 0 && (
        <Section className="border-t border-border pt-12 pb-0">
          <Container>
            <SectionHeader
              label="Featured"
              title="Featured Products"
              align="left"
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featured.map((product) => (
                <ProductCardCompact key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <ProductGrid products={products} />
        </Container>
      </Section>

      <CTASection
        title="Need a Custom Solution?"
        description="Our products cover most use cases, but we also build custom automation solutions tailored to your unique requirements."
        primaryLabel="Discuss Custom Build"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
