import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import HeroSection from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import TimelineSection from "@/components/sections/TimelineSection";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import {
  buildMetadata,
  companyStats,
  deliveryProcess,
  serviceCatalog,
  solutionIndustries,
} from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description: "Qarsam delivers modern software, web, commerce, hosting, cloud, and digital growth solutions for ambitious businesses.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBand items={companyStats} />
      <FeatureGrid
        eyebrow="Services"
        title="End-to-end digital delivery"
        description="From planning and software engineering to web presence, commerce, and infrastructure, Qarsam supports the capabilities businesses need to move forward."
        items={serviceCatalog.slice(0, 6)}
      />
      <FeatureGrid
        eyebrow="Solutions"
        title="Support shaped around your business context"
        description="We adapt delivery to your market, team structure, and operating requirements rather than forcing a one-size-fits-all process."
        items={solutionIndustries}
        muted
      />
      <TimelineSection
        title="A straightforward way of working"
        description="We aim to keep delivery transparent, organized, and aligned with the outcomes you care about most."
        items={deliveryProcess}
      />
      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <SectionHeading>Built for long-term usefulness, not just launch day.</SectionHeading>
            <SectionSubheading>
              Qarsam combines product thinking, engineering, and operational awareness so websites and software continue to support your team after initial delivery.
            </SectionSubheading>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Clear communication", "Regular visibility into priorities, risks, milestones, and trade-offs throughout the work."],
              ["Maintainable foundations", "Architecture, content structure, and deployment decisions that remain practical to evolve over time."],
              ["Flexible engagement", "Suitable for new initiatives, improvement work, or ongoing support once a product is live."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-navy-900">{title}</h2>
                <p className="mt-3 leading-7 text-navy-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Ready to explore your next digital initiative?"
        description="We can help you scope the work, identify the right delivery path, and move toward launch with confidence."
        primaryHref="/contact"
        primaryLabel="Start your project"
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </>
  );
}
