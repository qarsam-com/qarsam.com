import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageIntro from "@/components/sections/PageIntro";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import { buildBreadcrumbs, buildMetadata, solutionIndustries } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description: "See how Qarsam adapts digital solutions for industries including FinTech, e-commerce, healthcare, and SaaS.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Industry-aware solutions shaped around real workflows."
        description="Different industries carry different operational needs. We help translate those realities into clearer systems, better user experiences, and more dependable delivery foundations."
        supportingText="These examples illustrate the types of business contexts we commonly support."
        breadcrumbs={buildBreadcrumbs("Solutions", "/solutions")}
      />
      <FeatureGrid
        eyebrow="Industry focus"
        title="Where our approach fits"
        description="We tailor planning, implementation, and improvement work to the context each industry operates in."
        items={solutionIndustries}
      />
      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <SectionHeading>Built around context, not templates.</SectionHeading>
            <SectionSubheading>
              Rather than forcing every project into a standard shape, we align product decisions with the realities of your market, team structure, and customer experience.
            </SectionSubheading>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Compliance and operational constraints", "We account for the review, approval, and reporting needs that influence delivery in regulated or process-heavy environments."],
              ["Growth readiness", "Solutions are scoped with future change in mind, from content expansion to integrations and internal coordination."],
              ["Usability for multiple audiences", "We consider the needs of customers, internal teams, and administrators so systems remain practical to use day-to-day."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-navy-900">{title}</h3>
                <p className="mt-3 leading-7 text-navy-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Need a solution aligned to your industry and operating model?"
        description="We can help define a practical delivery approach tailored to your customers, team, and goals."
        secondaryHref="/portfolio"
        secondaryLabel="View portfolio"
      />
    </>
  );
}
