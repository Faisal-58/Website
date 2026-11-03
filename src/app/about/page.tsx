import Image from "next/image";
import { Section, SectionHeader, Container, Card } from "@/components/ui/Section";
import { CTASection, IndustriesGrid } from "@/components/shared/Cards";
import { Breadcrumbs } from "@/components/seo/ContentBlocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { teamMembers } from "@/data/blog";
import { pageMetadata, personJsonLd } from "@/lib/seo";
import { CalendarCheck, Clock, FileText, LifeBuoy, Users } from "lucide-react";

export const metadata = pageMetadata({
  title: "About the team",
  description:
    "Cuzec is a small automation team in Lahore, Pakistan, working remotely with clients mainly in the UK and US.",
  path: "/about",
});

const stats = [
  { value: "In weeks", label: "From discovery to deployment" },
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
    title: "Live in weeks",
    desc: "From discovery to deployment in weeks.",
  },
  {
    icon: LifeBuoy,
    title: "2 months of support",
    desc: "We go live, train your team and support you for 2 months, then keep improving as you grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {teamMembers.map((member) =>
        member.role ? (
          <JsonLd
            key={member.name}
            data={personJsonLd({
              name: member.name,
              jobTitle: member.role,
              sameAs: member.linkedin,
            })}
          />
        ) : null
      )}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              About Cuzec
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
                We started Cuzec in 2026 to build those systems for them. We are based in
                Lahore, Pakistan, deliver remotely, and work with clients mainly in the UK and US.
              </p>
              <p>
                <a href="mailto:info@cuzec.io" className="text-accent hover:text-accent-dark">
                  info@cuzec.io
                </a>
                {" · "}
                <a href="tel:+923085007407" className="text-accent hover:text-accent-dark">
                  +923085007407
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30">
        <Container className="py-10">
          <div className="grid grid-cols-2 gap-8 text-center max-w-xl mx-auto">
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
            description="Cuzec is run by its two founders, who stay involved in every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover border border-accent/30 shrink-0"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-accent font-semibold">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    {member.role ? <p className="text-sm text-accent">{member.role}</p> : null}
                  </div>
                </div>
                {member.bio ? (
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{member.bio}</p>
                ) : null}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
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
