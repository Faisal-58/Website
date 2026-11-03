import Link from "next/link";
import { Section, Container, Card } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-muted mb-4">
        {items.map((item, index) => (
          <span key={item.path}>
            {index > 0 && <span className="mx-2">/</span>}
            {index < items.length - 1 ? (
              <Link href={item.path} className="hover:text-foreground transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-foreground">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}

export function DeliveryNote() {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold mb-4">Timeline and price</h2>
        <p className="text-muted max-w-3xl leading-relaxed">
          From discovery to deployment in weeks. We map the workflow, design the solution and
          give you a fixed price before any work starts. We go live, train your team and support
          you for 2 months, then keep improving as you grow.
        </p>
      </Container>
    </Section>
  );
}

export function FaqBlock({ items }: { items: { question: string; answer: string }[] }) {
  if (items.length === 0) return null;
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
        <div className="space-y-4 max-w-3xl">
          {items.map((item) => (
            <Card key={item.question}>
              <h3 className="font-semibold mb-2">{item.question}</h3>
              <p className="text-sm text-muted">{item.answer}</p>
            </Card>
          ))}
        </div>
        <JsonLd data={faqJsonLd(items)} />
      </Container>
    </Section>
  );
}

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <Section className="bg-card/30">
      <Container>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-accent hover:text-accent-dark transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
