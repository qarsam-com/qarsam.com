import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { TechnologyGroup } from "@/lib/content";

interface TechnologyExpertiseProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  groups: TechnologyGroup[];
}

export default function TechnologyExpertise({ id, eyebrow, title, description, groups }: TechnologyExpertiseProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-navy-50/60 py-14 sm:py-20">
      <Container>
        <Reveal className="max-w-3xl space-y-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <SectionHeading>{title}</SectionHeading>
          {description ? <SectionSubheading>{description}</SectionSubheading> : null}
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 100}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-electric-200 hover:shadow-premium">
                <div className="flex items-center gap-3">
                  {group.icon ? <IconBadge icon={group.icon} tone="electric" size="sm" /> : null}
                  <h3 className="text-lg font-semibold text-navy-900">{group.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-navy-100 bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-700 transition-colors duration-300 group-hover:border-electric-100 group-hover:bg-electric-50 group-hover:text-electric-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

