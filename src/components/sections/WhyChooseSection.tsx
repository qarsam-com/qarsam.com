import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
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
    <section id={id} className="relative scroll-mt-20 overflow-hidden bg-navy-900 py-14 sm:py-20">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.06] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-electric-600/20 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <Reveal className="max-w-3xl space-y-4">
          {eyebrow ? <Eyebrow className="border-electric-400/30 bg-electric-500/10 text-electric-300">{eyebrow}</Eyebrow> : null}
          <SectionHeading className="text-white">{title}</SectionHeading>
          {description ? <SectionSubheading className="text-navy-200">{description}</SectionSubheading> : null}
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 100}>
              <div className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/30 hover:bg-white/[0.07]">
                {item.icon ? <IconBadge icon={item.icon} tone="electric" /> : null}
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-navy-300">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

