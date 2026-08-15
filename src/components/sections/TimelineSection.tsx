import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { TimelineItem } from "@/lib/content";

interface TimelineSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  items: TimelineItem[];
}

export default function TimelineSection({ id, eyebrow, title, description, items }: TimelineSectionProps) {
  return (
    <section id={id} className="relative scroll-mt-20 py-14 sm:py-20">
      <Container>
        <Reveal className="max-w-3xl space-y-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <SectionHeading>{title}</SectionHeading>
          <SectionSubheading>{description}</SectionSubheading>
        </Reveal>
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block" aria-hidden="true" />
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100} as="li">
              <div className="group relative h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-electric-200 hover:shadow-premium">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-electric-700 text-sm font-bold text-white shadow-glow">
                    {index + 1}
                  </span>
                  {item.icon ? <IconBadge icon={item.icon} tone="white" size="sm" /> : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-navy-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

