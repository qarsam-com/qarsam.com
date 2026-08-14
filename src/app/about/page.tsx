import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageIntro from "@/components/sections/PageIntro";
import StatsBand from "@/components/sections/StatsBand";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import {
  aboutIntro,
  aboutValues,
  buildBreadcrumbs,
  buildMetadata,
  companyStats,
  teamHighlights,
} from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn about Qarsam, our values, our delivery approach, and the expertise behind our digital solutions work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro {...aboutIntro} breadcrumbs={buildBreadcrumbs("About", "/about")} />
      <StatsBand items={companyStats} />
      <FeatureGrid
        eyebrow="Our values"
        title="How we approach client work"
        description="We aim to combine practical execution with long-term thinking so the solutions we deliver continue to create value after launch."
        items={aboutValues}
        columns="2"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">Expertise</p>
              <SectionHeading>Cross-disciplinary support for product, platform, and growth needs.</SectionHeading>
              <SectionSubheading>
                Qarsam works across software, web experiences, commerce, and infrastructure so clients can move from idea to launch with fewer handoff gaps.
              </SectionSubheading>
              <p className="leading-7 text-navy-600">
                Our work is shaped by the practical needs of growing businesses: clearer operations, more dependable digital experiences, and delivery decisions that support both immediate goals and future flexibility.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-navy-200 bg-navy-50 p-8">
              {teamHighlights.map((item) => (
                <div key={item.title} className="space-y-2 border-b border-navy-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                  <p className="text-sm leading-6 text-navy-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection
        title="Looking for a team that can balance delivery quality and business priorities?"
        description="We would be happy to learn about your goals and recommend a practical next step."
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </>
  );
}
