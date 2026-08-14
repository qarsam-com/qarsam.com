import type { ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import { SectionHeading, SectionSubheading } from "@/components/ui/SectionHeading";
import type { BreadcrumbItem } from "@/types/components";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  supportingText?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  supportingText,
  breadcrumbs,
  children,
}: PageIntroProps) {
  return (
    <section className="bg-gradient-to-b from-navy-50 via-white to-white py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-6">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          <Badge variant="accent" size="md">
            {eyebrow}
          </Badge>
          <div className="space-y-4">
            <SectionHeading level="h1" className="text-4xl md:text-5xl">
              {title}
            </SectionHeading>
            <SectionSubheading>{description}</SectionSubheading>
            {supportingText ? <p className="text-base leading-7 text-navy-600">{supportingText}</p> : null}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
