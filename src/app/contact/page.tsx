import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import CTASection from "@/components/sections/CTASection";
import PageIntro from "@/components/sections/PageIntro";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { buildBreadcrumbs, buildMetadata, contactDetails } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact Qarsam to discuss software development, websites, infrastructure, or digital growth needs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk about what you need to build next."
        description="Share your goals, timeline, or current challenges and we will help shape a practical next step."
        supportingText="This contact experience is ready for backend integration and includes client-side validation for the main fields."
        breadcrumbs={buildBreadcrumbs("Contact", "/contact")}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card hover={false} className="p-8 sm:p-10">
              <div className="mb-6 space-y-2">
                <h2 className="text-3xl font-semibold text-navy-900">Project inquiry</h2>
                <p className="leading-7 text-navy-600">Tell us a little about your requirements so we can respond with relevant next steps.</p>
              </div>
              <ContactForm />
            </Card>
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <Card key={item.title} hover={false} className="p-6">
                  <h2 className="text-xl font-semibold text-navy-900">{item.title}</h2>
                  {item.href ? (
                    <a href={item.href} className="mt-3 inline-flex text-lg text-electric-600 hover:text-electric-700">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-lg text-navy-900">{item.value}</p>
                  )}
                  <p className="mt-2 leading-7 text-navy-600">{item.description}</p>
                </Card>
              ))}
              <Card hover={false} className="bg-navy-50 p-6">
                <h2 className="text-xl font-semibold text-navy-900">What to include</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-navy-700">
                  <li>Project goals and desired outcomes</li>
                  <li>Target timeline or important milestones</li>
                  <li>Any current tools, systems, or operational constraints</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <CTASection
        title="Prefer a direct conversation first?"
        description="You can also reach us by email or WhatsApp using the details above."
        primaryHref="mailto:qarsam.com@gmail.com"
        primaryLabel="Email Qarsam"
      />
    </>
  );
}
