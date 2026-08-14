import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import PageIntro from "@/components/sections/PageIntro";
import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import { buildBreadcrumbs, buildMetadata, faqItems } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Find answers to common questions about Qarsam services, engagement process, support, and collaboration model.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Common questions from teams exploring a new digital project."
        description="These answers provide a straightforward overview of how we typically work and what clients can expect when starting a conversation with Qarsam."
        breadcrumbs={buildBreadcrumbs("FAQ", "/faq")}
      />
      <section className="py-16 sm:py-20">
        <Container maxWidth="xl">
          <Accordion
            items={faqItems.map((item) => ({
              id: item.id,
              title: item.title,
              content: <p className="leading-7">{item.content}</p>,
            }))}
            defaultOpen={faqItems[0]?.id}
          />
        </Container>
      </section>
      <CTASection
        title="Still have questions?"
        description="We are happy to discuss scope, timelines, and fit in more detail."
        primaryHref="/contact"
        primaryLabel="Ask a question"
      />
    </>
  );
}
