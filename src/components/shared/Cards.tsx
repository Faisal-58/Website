import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Card, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL, industries } from "@/data/site";

export function ServiceCard({ service }: { service: import("@/types").Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <Card hover className="h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>
        <ul className="space-y-1.5 mb-4">
          {service.benefits.slice(0, 3).map((b) => (
            <li key={b} className="text-xs text-muted flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              {b}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-sm text-accent-light group-hover:gap-2 transition-all">
          Explore service <ArrowRight className="w-4 h-4" />
        </span>
      </Card>
    </Link>
  );
}

export function CaseStudyCard({ study }: { study: import("@/types").CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block h-full">
      <Card hover className="h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Badge>{study.industry}</Badge>
          {study.featured && (
            <span className="text-xs text-accent-light font-medium">Featured</span>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {study.shortDescription}
        </p>
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          <div>
            <p className="text-lg font-bold text-accent-light">{study.hoursSaved.toLocaleString()}</p>
            <p className="text-xs text-muted">Hours Saved</p>
          </div>
          <div>
            <p className="text-lg font-bold text-success">{study.revenueImpact.split(" ")[0]}</p>
            <p className="text-xs text-muted">Impact</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">{study.efficiencyImprovement.split(" ")[0]}</p>
            <p className="text-xs text-muted">Efficiency</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function BlogCard({ post }: { post: import("@/types").BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card hover className="h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Badge>{post.category}</Badge>
          <span className="text-xs text-muted">{post.readingTime} min read</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted">{post.author.name}</span>
          <span className="inline-flex items-center gap-1 text-sm text-accent-light group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Card>
    </Link>
  );
}

export function IndustriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {industries.map((industry) => (
        <Link key={industry.name} href={industry.href} className="group block h-full">
          <Card hover className="h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-light transition-colors">
              {industry.name}
            </h3>
            <ul className="space-y-2 flex-1">
              {industry.automations.map((a) => (
                <li key={a} className="text-[15px] leading-[1.45] text-muted flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  {a}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1 text-sm text-accent-light mt-4 group-hover:gap-2 transition-all">
              See {industry.project} <ArrowRight className="w-4 h-4" />
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function CTASection({
  title = "Ready to Automate Your Business?",
  description = "Book a free 30-minute call. Tell us how things work today and we'll show you what can be automated.",
  primaryLabel = "Book a free 30-minute session",
  primaryHref = BOOKING_URL,
  secondaryLabel = "Send a Message",
  secondaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden glow">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">{description}</p>
            <div className="flex flex-col items-center gap-3">
              <Button href={primaryHref} variant="primary" size="lg">
                {primaryLabel}
              </Button>
              {secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="text-sm font-semibold text-accent-light hover:underline"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DemoVideoEmbed({ url, title }: { url?: string; title: string }) {
  if (!url) return null;
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
      <iframe
        src={url}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
        <Play className="w-16 h-16 text-white/80" />
      </div>
    </div>
  );
}
