import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Container from "@/components/ui/Container";
import { buildBreadcrumbs, buildMetadata, privacySections } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Review the placeholder privacy policy structure for the Qarsam website, including information use and retention guidance.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="Privacy policy placeholder"
        description="This page provides a professionally structured privacy policy draft for the website. It should be reviewed and finalized with legal counsel before production use."
        breadcrumbs={buildBreadcrumbs("Privacy", "/privacy")}
      />
      <section className="py-16 sm:py-20">
        <Container maxWidth="xl">
          <div className="space-y-10">
            {privacySections.map((section) => (
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
