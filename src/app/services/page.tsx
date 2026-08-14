import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageIntro from "@/components/sections/PageIntro";
import TimelineSection from "@/components/sections/TimelineSection";
import { buildBreadcrumbs, buildMetadata, deliveryProcess, serviceCatalog } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: "Explore Qarsam services including custom software, web development, WordPress, e-commerce, hosting, cloud infrastructure, and digital marketing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Delivery support across product, web, commerce, and infrastructure."
        description="Our services are designed to help businesses move from planning to launch with the right mix of technical execution, operational support, and ongoing improvement."
        supportingText="Whether you need a single project partner or broader ongoing support, we tailor scope to the stage of your business."
        breadcrumbs={buildBreadcrumbs("Services", "/services")}
      />
      <FeatureGrid
        eyebrow="What we do"
        title="Core service areas"
        description="Each service can be delivered independently or combined into a broader roadmap, depending on the outcome you need."
        items={serviceCatalog}
      />
      <TimelineSection
        title="A delivery process built for clarity"
        description="We structure projects in a way that keeps priorities visible and decisions easier to make."
        items={deliveryProcess}
      />
      <CTASection
        title="Need help choosing the right engagement model?"
        description="Tell us what you are trying to improve, and we can help shape a suitable path forward."
        secondaryHref="/contact"
        secondaryLabel="Request a quote"
      />
    </>
  );
}
