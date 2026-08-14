import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Container from "@/components/ui/Container";
import { buildBreadcrumbs, buildMetadata, termsSections } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Review the placeholder terms and conditions structure for the Qarsam website and future client-facing agreements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="Terms and conditions placeholder"
        description="This page offers a clear structure for website terms and conditions. It should be reviewed and finalized with legal counsel before publication as a final legal document."
        breadcrumbs={buildBreadcrumbs("Terms", "/terms")}
      />
      <section className="py-16 sm:py-20">
        <Container maxWidth="xl">
          <div className="space-y-10">
            {termsSections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-3xl font-semibold text-navy-900">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-navy-700">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
