import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageIntro from "@/components/sections/PageIntro";
import { buildBreadcrumbs, buildMetadata, productApproach, productsCatalog } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description: "Explore the kinds of internal tools, website systems, and commerce-support products Qarsam can offer and adapt for clients.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Reusable product foundations for teams that need to move faster."
        description="Alongside custom delivery, Qarsam can package repeatable capabilities into productized solutions and modular starting points."
        supportingText="These offerings are presented as realistic placeholders and can be refined into production-ready product pages as the catalog evolves."
        breadcrumbs={buildBreadcrumbs("Products", "/products")}
      />
      <FeatureGrid
        eyebrow="Current product areas"
        title="Examples of productized capabilities"
        description="Useful when businesses need a faster starting point without giving up the flexibility to adapt later."
        items={productsCatalog}
      />
      <FeatureGrid
        eyebrow="Approach"
        title="How we think about product offerings"
        description="Reusable does not mean rigid. We keep room for integration, customization, and staged rollout."
        items={productApproach}
        columns="3"
        muted
      />
      <CTASection
        title="Interested in a reusable solution tailored to your business?"
        description="We can help identify whether a productized foundation or fully custom build is the better fit."
        secondaryHref="/services"
        secondaryLabel="Compare services"
      />
    </>
  );
}
