import Container from "@/components/ui/Container";
import type { Stat } from "@/lib/content";

interface StatsBandProps {
  items: Stat[];
}

export default function StatsBand({ items }: StatsBandProps) {
  return (
    <section className="border-y border-navy-100 bg-white py-10">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <p className="text-3xl font-bold text-navy-900">{item.value}</p>
              <p className="mt-2 text-base font-medium text-navy-800">{item.label}</p>
              {item.detail ? <p className="mt-2 text-sm leading-6 text-navy-600">{item.detail}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
