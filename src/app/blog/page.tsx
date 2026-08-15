import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import PageIntro from "@/components/sections/PageIntro";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { blogPosts, buildBreadcrumbs, buildMetadata } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Read Qarsam articles on software planning, web strategy, e-commerce foundations, and practical digital delivery.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Practical perspectives on digital product delivery."
        description="Our blog shares guidance on planning, building, and improving digital systems in ways that stay grounded in business realities."
        supportingText="Articles below are sample editorial content suitable for a professional services website."
        breadcrumbs={buildBreadcrumbs("Blog", "/blog")}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-navy-500">
                    <Badge variant="secondary" size="sm">{post.category}</Badge>
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-navy-900">{post.title}</h2>
                    <p className="mt-3 leading-7 text-navy-600">{post.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-navy-600">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-navy-50 px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4">
                  <p className="text-sm text-navy-500">{post.readingTime}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link">Read article</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Looking for insights tailored to your project?"
        description="We can discuss your goals directly and recommend an approach specific to your context."
        primaryHref="/#contact"
        primaryLabel="Talk to Qarsam"
      />
    </>
  );
}
