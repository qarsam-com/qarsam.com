import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageIntro from "@/components/sections/PageIntro";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { buildBreadcrumbs, buildMetadata, cultureHighlights, openings } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Explore opportunities at Qarsam and learn about our collaborative, growth-oriented working environment.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Careers"
        title="Build thoughtful digital work with a collaborative team."
        description="Qarsam looks for people who care about delivery quality, clear communication, and useful digital experiences."
        supportingText="Open roles below are illustrative placeholders and can be connected to a recruitment workflow later."
        breadcrumbs={buildBreadcrumbs("Careers", "/careers")}
      />
      <FeatureGrid
        eyebrow="Culture"
        title="What we value internally"
        description="We want a working environment where team members can contribute meaningfully and grow with the work."
        items={cultureHighlights}
        columns="3"
      />
      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">Open roles</p>
            <h2 className="text-4xl font-bold tracking-tight text-navy-900">Current opportunities</h2>
            <p className="text-lg text-navy-600">These sample listings show how a careers page can present role context, responsibilities, and working arrangements.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {openings.map((opening) => (
              <Card key={opening.id} className="h-full">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-electric-600">{opening.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-navy-900">{opening.title}</h3>
                    <p className="mt-1 text-sm text-navy-500">{opening.location}</p>
                  </div>
                  <p className="leading-7 text-navy-600">{opening.summary}</p>
                  <ul className="space-y-2 border-t border-navy-100 pt-4 text-sm text-navy-700">
                    {opening.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-electric-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Don’t see the perfect role?"
        description="We are still happy to hear from people with relevant experience in delivery, engineering, design, and digital growth."
        primaryHref="/contact"
        primaryLabel="Get in touch"
      />
    </>
  );
}
