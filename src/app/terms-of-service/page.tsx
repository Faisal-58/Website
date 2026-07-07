import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CUZEC terms of service — the terms governing use of our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>
          <p className="text-muted mb-8">Last updated: May 31, 2026</p>
        </Container>
      </section>

      <Section className="border-t border-border pt-12">
        <Container>
          <div className="max-w-3xl space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Acceptance of Terms</h2>
              <p>
                By accessing or using CUZEC&apos;s website and services, you agree to be bound
                by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Services</h2>
              <p>
                CUZEC provides enterprise automation consulting, development, and managed
                services. Specific service terms are outlined in individual service agreements.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property on this website are owned
                by CUZEC. Custom automation solutions developed for clients are governed by
                the terms of individual service agreements.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
              <p>
                CUZEC shall not be liable for any indirect, incidental, or consequential damages
                arising from the use of our services. Our total liability is limited to the
                amount paid for services in the preceding 12 months.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:hello@cuzec.com" className="text-accent-light hover:text-accent">
                  hello@cuzec.com
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
