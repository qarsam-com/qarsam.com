import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import PageIntro from "@/components/sections/PageIntro";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { buildBreadcrumbs, buildMetadata, caseStudies } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: "Review sample case studies and project highlights that reflect the kinds of digital product and platform work Qarsam supports.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Selected case study formats and delivery examples."
        description="This portfolio uses realistic placeholders to show how Qarsam can present project outcomes without inventing confidential client claims or unsupported testimonials."
        supportingText="Each example focuses on the type of business problem solved, the services involved, and the outcome created."
        breadcrumbs={buildBreadcrumbs("Portfolio", "/portfolio")}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="h-full">
                <div className="space-y-4">
                  <Badge variant="secondary" size="sm">{study.industry}</Badge>
                  <h2 className="text-2xl font-semibold text-navy-900">{study.title}</h2>
                  <p className="leading-7 text-navy-600">{study.summary}</p>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-500">Services</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <li key={service} className="rounded-full bg-navy-50 px-3 py-1 text-sm text-navy-700">{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-500">Outcome</p>
                    <p className="mt-2 text-sm leading-6 text-navy-700">{study.outcome}</p>
                  </div>
                  <ul className="space-y-2 border-t border-navy-100 pt-4 text-sm text-navy-700">
                    {study.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-success-600" />
                        <span>{highlight}</span>
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
        title="Want to discuss a similar initiative?"
        description="We can translate your requirements into a project plan, recommended scope, and phased delivery approach."
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </>
  );
}
