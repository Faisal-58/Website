import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CUZEC privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: May 31, 2026</p>
        </Container>
      </section>

      <Section className="border-t border-border pt-12">
        <Container>
          <div className="max-w-3xl space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>
              <p>
                We collect information you provide directly, such as name, email, company name,
                and messages submitted through our contact forms. We also collect usage data
                through analytics tools to improve our website and services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">How We Use Your Information</h2>
              <p>
                We use collected information to respond to inquiries, provide services,
                improve our website, send relevant communications, and comply with legal
                obligations. We do not sell your personal information to third parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption,
                access controls, and regular security audits to protect your data.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data.
                Contact us at hello@cuzec.com to exercise these rights.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p>
                For privacy-related questions, contact us at{" "}
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
