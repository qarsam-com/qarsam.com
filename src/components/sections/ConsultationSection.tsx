import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import { contactDetails } from "@/lib/content";

export default function ConsultationSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-navy-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">Get in touch</p>
          <SectionHeading>Let&apos;s solve your business challenges.</SectionHeading>
          <SectionSubheading>
            Tell us about your operations, workflows, or growth goals. We&apos;ll help you identify the right technology strategy and next step.
          </SectionSubheading>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card hover={false} className="p-8 sm:p-10">
            <div className="mb-6 space-y-2">
              <h3 className="text-2xl font-semibold text-navy-900">Start a business conversation</h3>
              <p className="leading-7 text-navy-600">Share a few details and we will respond with practical next steps.</p>
            </div>
            <ContactForm />
          </Card>
          <div className="space-y-6">
            {contactDetails.map((item) => (
              <Card key={item.title} hover={false} className="p-6">
                <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="mt-2 inline-flex text-lg text-electric-600 hover:text-electric-700">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg text-navy-900">{item.value}</p>
                )}
                <p className="mt-2 leading-7 text-navy-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
