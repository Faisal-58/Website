"use client";

import { useState } from "react";
import { Section, Container, Card } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, Linkedin, MapPin, Calendar } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "37be53af-7089-470a-8cdd-df061b2d68b7";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [demoState, setDemoState] = useState({ name: "", email: "", company: "", useCase: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState<"contact" | "demo" | null>(null);
  const [error, setError] = useState<"contact" | "demo" | null>(null);

  // Web3Forms delivers submissions to info@cuzec.io. The access key is public by design.
  const sendToWeb3Forms = async (
    form: "contact" | "demo",
    subject: string,
    fields: Record<string, string>
  ) => {
    setSending(form);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: "CUZEC Website",
          replyto: fields.email,
          ...fields,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setSubmitted(true);
    } catch {
      setError(form);
    } finally {
      setSending(null);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWeb3Forms("contact", `New message from ${formState.name}`, formState);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWeb3Forms("demo", `Demo request from ${demoState.name} (${demoState.company})`, demoState);
  };

  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Ready to transform your business with automation? Reach out to our team
            or book a demo to see CUZEC in action.
          </p>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>

              <a
                href="mailto:info@cuzec.io"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-light" />
                info@cuzec.io
              </a>

              <a
                href="tel:+923085007407"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent-light" />
                +923085007407
              </a>

              <a
                href="https://linkedin.com/company/cuzec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5 text-accent-light" />
                LinkedIn
              </a>

              <div className="flex items-start gap-3 text-muted">
                <MapPin className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Office</p>
                  <p className="text-sm">DHA Phase 6</p>
                  <p className="text-sm">Lahore, Pakistan</p>
                </div>
              </div>

              <Card className="bg-accent/5 border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-accent-light" />
                  <h3 className="font-semibold">Book a Demo</h3>
                </div>
                <p className="text-sm text-muted mb-4">
                  Schedule a 30-minute demo with our automation experts.
                </p>
                <a
                  href="https://calendar.app.google/fEJpyVjydUgHbBgP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm font-medium transition-colors"
                >
                  Book a Time Slot
                </a>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </Card>
              ) : (
                <div className="space-y-8">
                  <form onSubmit={handleContactSubmit}>
                    <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50 mb-4"
                    />
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50 mb-4 resize-none"
                    />
                    <Button type="submit" variant="primary" size="lg" disabled={sending !== null}>
                      {sending === "contact" ? "Sending..." : "Send Message"}
                    </Button>
                    {error === "contact" && (
                      <p className="text-sm text-red-700 mt-3">
                        Something went wrong. Please email us at{" "}
                        <a href="mailto:info@cuzec.io" className="underline">info@cuzec.io</a>.
                      </p>
                    )}
                  </form>

                  <form onSubmit={handleDemoSubmit} className="pt-8 border-t border-border">
                    <h2 className="text-xl font-semibold mb-6">Request a Demo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={demoState.name}
                        onChange={(e) => setDemoState({ ...demoState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50"
                      />
                      <input
                        type="email"
                        placeholder="Work Email"
                        required
                        value={demoState.email}
                        onChange={(e) => setDemoState({ ...demoState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      required
                      value={demoState.company}
                      onChange={(e) => setDemoState({ ...demoState, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50 mb-4"
                    />
                    <textarea
                      placeholder="Describe your automation use case"
                      required
                      rows={3}
                      value={demoState.useCase}
                      onChange={(e) => setDemoState({ ...demoState, useCase: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-accent/50 mb-4 resize-none"
                    />
                    <Button type="submit" variant="primary" size="lg" disabled={sending !== null}>
                      {sending === "demo" ? "Sending..." : "Request Demo"}
                    </Button>
                    {error === "demo" && (
                      <p className="text-sm text-red-700 mt-3">
                        Something went wrong. Please email us at{" "}
                        <a href="mailto:info@cuzec.io" className="underline">info@cuzec.io</a>.
                      </p>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
