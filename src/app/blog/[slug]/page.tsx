import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container, Badge } from "@/components/ui/Section";
import { CTASection, BlogCard } from "@/components/shared/Cards";
import {
  ReadingProgress,
  TableOfContents,
  MarkdownContent,
} from "@/components/blog/BlogContent";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author.name],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <ReadingProgress />

      <section className="relative py-24 md:py-32">
        <Container className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted">{post.readingTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span className="text-accent-light font-bold text-sm">
                {post.author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <p className="font-medium text-sm">{post.author.name}</p>
              <p className="text-xs text-muted">
                {post.author.role} · {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-border pt-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="hidden lg:block lg:col-span-1">
              <TableOfContents content={post.content} />
            </aside>
            <article className="lg:col-span-3 max-w-3xl">
              <p className="text-lg text-muted leading-relaxed mb-8 border-b border-border pb-8">
                {post.excerpt}
              </p>
              <MarkdownContent content={post.content} />
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-card border border-border text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="bg-card/30">
          <Container>
            <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        title="Ready to Automate?"
        description="Put these insights into action. Book a demo to see Cuzec in action."
      />
    </>
  );
}
