import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "@/components/sections/CTASection";
import PageIntro from "@/components/sections/PageIntro";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { blogPosts, buildMetadata, getBlogPostBySlug } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getBlogPostBySlug(slug);

    if (!post) {
      return buildMetadata({
        title: "Blog",
        description: "Article not found.",
        path: "/blog",
      });
    }

    return buildMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
    });
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <PageIntro
        eyebrow="Blog article"
        title={post.title}
        description={post.description}
        supportingText={`${post.author} · ${post.readingTime}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}`, current: true },
        ]}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Badge variant="secondary" size="sm">{post.category}</Badge>
          <p className="text-sm text-navy-500">
            {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </PageIntro>
      <article className="py-16 sm:py-20">
        <Container maxWidth="xl">
          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-3xl font-semibold text-navy-900">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-navy-700">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="space-y-3 rounded-2xl bg-navy-50 p-6 text-navy-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-electric-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </article>
      <CTASection
        title="Need help applying these ideas to your business?"
        description="We can help translate strategy into a practical product, website, or infrastructure plan."
        primaryHref="/#contact"
        primaryLabel="Discuss your project"
        secondaryHref="/blog"
        secondaryLabel="Back to blog"
      />
    </>
  );
}
