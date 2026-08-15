import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { FeatureItem } from "@/lib/content";

interface FeatureGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
  columns?: "2" | "3";
  muted?: boolean;
}

export default function FeatureGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  columns = "3",
  muted = false,
}: FeatureGridProps) {
  return (
    <section id={id} className={muted ? "relative scroll-mt-20 bg-navy-50/60 py-14 sm:py-20" : "relative scroll-mt-20 py-14 sm:py-20"}>
      <Container>
        <Reveal className="max-w-3xl space-y-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <SectionHeading>{title}</SectionHeading>
          {description ? <SectionSubheading>{description}</SectionSubheading> : null}
        </Reveal>
        <div className={`mt-12 grid gap-6 ${columns === "2" ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <Card hover className="group h-full overflow-hidden">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-success-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="space-y-4">
                  {item.icon ? <IconBadge icon={item.icon} tone={index % 2 === 0 ? "electric" : "navy"} /> : null}
                  <h3 className="text-xl font-semibold text-navy-900">{item.title}</h3>
                  <p className="leading-7 text-navy-600">{item.description}</p>
                  {item.bullets?.length ? (
                    <ul className="space-y-2 text-sm text-navy-700">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

