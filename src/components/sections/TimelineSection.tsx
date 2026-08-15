import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { TimelineItem } from "@/lib/content";

interface TimelineSectionProps {
  id?: string;
  title: string;
  description: string;
  items: TimelineItem[];
}

export default function TimelineSection({ id, title, description, items }: TimelineSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-4">
          <SectionHeading>{title}</SectionHeading>
          <SectionSubheading>{description}</SectionSubheading>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-600 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-navy-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
