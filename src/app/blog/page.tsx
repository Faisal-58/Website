import type { Metadata } from "next";
import { Section, SectionHeader, Container } from "@/components/ui/Section";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCard, CTASection } from "@/components/shared/Cards";
import { blogPosts, getFeaturedBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Automation insights, guides, and industry trends from the CUZEC team.",
};

export default function BlogPage() {
  const featured = getFeaturedBlogPosts();

  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <Container className="relative">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Insights & Guides
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Expert perspectives on automation, AI, and business transformation.
          </p>
        </Container>
      </section>

      {featured.length > 0 && (
        <Section className="border-t border-border pt-12 pb-0">
          <Container>
            <SectionHeader
              label="Featured"
              title="Featured Articles"
              align="left"
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeader
            label="Latest"
            title="Latest Articles"
            align="left"
            className="mb-8"
          />
          <BlogGrid posts={blogPosts} />
        </Container>
      </Section>

      <CTASection
        title="Stay Updated"
        description="Subscribe to our newsletter for the latest automation insights."
        primaryLabel="Contact Us"
        secondaryLabel="View Resources"
        secondaryHref="/resources"
      />
    </>
  );
}
