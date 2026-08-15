import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { TechnologyGroup } from "@/lib/content";

interface TechnologyExpertiseProps {
  id?: string;
  title: string;
  description?: string;
  groups: TechnologyGroup[];
}

export default function TechnologyExpertise({ id, title, description, groups }: TechnologyExpertiseProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-4">
          <SectionHeading>{title}</SectionHeading>
          {description ? <SectionSubheading>{description}</SectionSubheading> : null}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-navy-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-navy-900">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
