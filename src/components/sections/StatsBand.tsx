import Container from "@/components/ui/Container";
import type { Stat } from "@/lib/content";

interface StatsBandProps {
  id?: string;
  items: Stat[];
}

export default function StatsBand({ id, items }: StatsBandProps) {
  return (
    <section id={id} className="relative z-20 -mt-16 pb-4 md:-mt-20">
      <Container>
        <div className="grid divide-y divide-navy-800/60 rounded-3xl bg-navy-900 p-2 shadow-premium sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {items.map((item) => (
            <div key={item.label} className="p-6 sm:p-8">
              <p className="text-3xl font-bold text-white md:text-4xl">{item.value}</p>
              <p className="mt-2 text-base font-semibold text-electric-300">{item.label}</p>
              {item.detail ? <p className="mt-2 text-sm leading-6 text-navy-300">{item.detail}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

