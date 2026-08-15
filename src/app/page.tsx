import type { Metadata } from "next";
import ConsultationSection from "@/components/sections/ConsultationSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import HeroSection from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import TechnologyExpertise from "@/components/sections/TechnologyExpertise";
import TimelineSection from "@/components/sections/TimelineSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import {
  buildMetadata,
  businessChallenges,
  companyStats,
  coreSolutions,
  deliveryProcess,
  faqItems,
  serviceCatalog,
  technologyGroups,
  whyChooseUs,
} from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Qarsam is a Software Engineering, IT Consulting, and Digital Transformation partner helping organizations modernize operations, automate workflows, and build scalable digital solutions.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBand items={companyStats} />
      <FeatureGrid
        id="challenges"
        eyebrow="Business Challenges"
        title="Does this sound like your organization?"
        description="Many organizations lose time and momentum to the same operational challenges. Recognizing them is the first step toward a more efficient way of working."
        items={businessChallenges}
        muted
      />
      <FeatureGrid
        id="solutions"
        eyebrow="Our Solutions"
        title="We turn business challenges into efficient digital solutions."
        description="Rather than leading with technology, we start with the outcome you need and recommend the solution that gets you there."
        items={coreSolutions}
      />
      <FeatureGrid
        id="services"
        eyebrow="Our Services"
        title="End-to-end technology services for modern organizations."
        description="From engineering to infrastructure to intelligent automation, our services are organized around the business capabilities you need most."
        items={serviceCatalog}
        columns="2"
        muted
      />
      <WhyChooseSection
        id="why-choose"
        eyebrow="Why Choose Qarsam"
        title="A technology partner, not just a software vendor."
        description="We bring a business-first consulting approach that distinguishes us from conventional software development companies."
        items={whyChooseUs}
      />
      <TimelineSection
        id="process"
        eyebrow="Our Process"
        title="A transparent, structured methodology."
        description="Every engagement follows a transparent, structured methodology from first consultation to long-term support."
        items={deliveryProcess}
      />
      <TechnologyExpertise
        id="technologies"
        eyebrow="Technology Expertise"
        title="Proven technology, chosen for your business."
        description="We work across modern, proven technologies chosen to fit your business needs rather than trends."
        groups={technologyGroups}
      />
      <section id="faq" className="scroll-mt-20 py-14 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl space-y-4">
            <Eyebrow>FAQ</Eyebrow>
            <SectionHeading>Frequently asked questions</SectionHeading>
            <SectionSubheading>
              Answers to common questions about our services, process, technologies, and how to get started.
            </SectionSubheading>
          </Reveal>
          <Reveal delay={100} className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Accordion
              items={faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => ({
                id: item.id,
                title: item.title,
                content: <p className="leading-7">{item.content}</p>,
              }))}
              defaultOpen={faqItems[0]?.id}
            />
            <Accordion
              items={faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => ({
                id: item.id,
                title: item.title,
                content: <p className="leading-7">{item.content}</p>,
              }))}
            />
          </Reveal>
        </Container>
      </section>
      <ConsultationSection />
    </>
  );
}
