import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import { contactDetails } from "@/lib/content";

export default function ConsultationSection() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-navy-50/60 py-14 sm:py-20">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,black_10%,transparent_75%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="max-w-3xl space-y-4">
          <Eyebrow>Get in touch</Eyebrow>
          <SectionHeading>Let&apos;s solve your business challenges.</SectionHeading>
          <SectionSubheading>
            Tell us about your operations, workflows, or growth goals. We&apos;ll help you identify the right technology strategy and next step.
          </SectionSubheading>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card hover={false} className="p-8 shadow-premium sm:p-10">
              <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-semibold text-navy-900">Start a business conversation</h3>
                <p className="leading-7 text-navy-600">Share a few details and we will respond with practical next steps.</p>
              </div>
              <ContactForm />
            </Card>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            {contactDetails.map((item) => (
              <Card key={item.title} hover className="group flex gap-4 p-6">
                <IconBadge icon={item.icon} tone="electric" size="md" className="transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="mt-1 inline-flex text-lg font-medium text-electric-600 transition-colors hover:text-electric-700">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-medium text-navy-900">{item.value}</p>
                  )}
                  <p className="mt-2 leading-7 text-navy-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

