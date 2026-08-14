import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";

interface CTASectionProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CTASection({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Start a conversation",
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-10 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <SectionHeading className="text-white">{title}</SectionHeading>
            <SectionSubheading className="text-navy-100">{description}</SectionSubheading>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref}>
              <Button className="w-full sm:w-auto" size="lg">{primaryLabel}</Button>
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref}>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-900 sm:w-auto" size="lg">
                  {secondaryLabel}
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
