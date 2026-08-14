import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { FeatureItem } from "@/lib/content";

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
  columns?: "2" | "3";
  muted?: boolean;
}

export default function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
  columns = "3",
  muted = false,
}: FeatureGridProps) {
  return (
    <section className={muted ? "bg-navy-50 py-16 sm:py-20" : "py-16 sm:py-20"}>
      <Container>
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">{eyebrow}</p> : null}
          <SectionHeading>{title}</SectionHeading>
          {description ? <SectionSubheading>{description}</SectionSubheading> : null}
        </div>
        <div className={`mt-10 grid gap-6 ${columns === "2" ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {items.map((item) => (
            <Card key={item.title} hover={false} className="h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-navy-900">{item.title}</h3>
                <p className="leading-7 text-navy-600">{item.description}</p>
                {item.bullets?.length ? (
                  <ul className="space-y-2 text-sm text-navy-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-electric-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
