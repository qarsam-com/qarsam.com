import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/icons";
import type { FeatureItem } from "@/lib/content";

interface WhyChooseSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
}

export default function WhyChooseSection({ id, eyebrow, title, description, items }: WhyChooseSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-navy-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">{eyebrow}</p> : null}
          <SectionHeading>{title}</SectionHeading>
          {description ? <SectionSubheading>{description}</SectionSubheading> : null}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 leading-7 text-navy-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
