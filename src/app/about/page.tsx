import type { Metadata } from "next";
import { Section, SectionHeader, Container, Card } from "@/components/ui/Section";
import { CTASection, IndustriesGrid } from "@/components/shared/Cards";
import { teamMembers } from "@/data/blog";
import { CalendarCheck, Clock, FileText, LifeBuoy, MessageSquare, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "CUZEC is a small automation team led by its founders. 40+ automations built for clients in the US, UK, Australia, Germany, Sweden and Qatar.",
};

const stats = [
  { value: "40+", label: "Automations built" },
  { value: "6", label: "Countries served" },
  { value: "2–4 weeks", label: "Typical time to go live" },
  { value: "2 months", label: "Support after launch" },
];

const howWeWork = [
  {
    icon: Users,
    title: "You work with the founders",
    desc: "No account managers or hand-offs. The people on your first call are the people building your system.",
  },
  {
    icon: CalendarCheck,
    title: "Free first call",
    desc: "A 30-minute call to understand how things work today and where automation will actually save time.",
  },
  {
    icon: FileText,
    title: "Fixed price, agreed upfront",
    desc: "After the call you get a clear scope and a fixed quote. No hourly billing, no surprises.",
  },
  {
    icon: Clock,
    title: "Live in 2–4 weeks",
    desc: "Most projects go live within 2–4 weeks. Simple automations can be ready in a few days.",
  },
  {
    icon: LifeBuoy,
    title: "2 months of support",
    desc: "Every project includes 2 months of support after launch. Ongoing monthly support is available after that.",
  },
  {
    icon: MessageSquare,
    title: "Quick replies",
    desc: "We reply within 24 hours, usually much sooner, whatever your time zone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              About CUZEC
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Automation for businesses{" "}
              <span className="gradient-text">without an automation team</span>
            </h1>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                Growing businesses lose hours every week to manual work: replying to leads,
                booking appointments, chasing follow-ups and copying data between tools. Large
                companies have teams to automate this. Most businesses don&apos;t.
              </p>
              <p>
                We started CUZEC in 2026 to build those systems for them. Our team has built
                40+ automations for clients in the US, UK, Australia, Germany, Sweden and Qatar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30">
        <Container className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-semibold text-accent">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            label="Team"
            title="Who you'll work with"
            description="CUZEC is run by its two founders, who stay involved in every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-semibold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{member.bio}</p>
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  {member.education && (
                    <p className="text-xs text-muted">{member.education}</p>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container>
          <SectionHeader label="How We Work" title="What working with us looks like" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeWork.map((item) => (
              <Card key={item.title}>
                <item.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            label="Industries"
            title="Where we focus"
            description="We work mostly with four industries, so we already know their workflows and tools."
          />
          <IndustriesGrid />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
