import Link from "next/link";
import { footerNavigation } from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

const sections = [
  { title: "Company", links: siteConfig.footerLinks.company },
  { title: "Services", links: siteConfig.footerLinks.services },
  { title: "Resources", links: siteConfig.footerLinks.resources },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-200 bg-navy-900 text-white" aria-labelledby="footer-heading">
      <Container className="py-12 sm:py-16">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="max-w-md text-sm text-navy-100">{siteConfig.description}</p>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex rounded-sm text-sm text-electric-300 hover:text-electric-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900">
              {siteConfig.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <nav key={section.title} aria-label={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-100">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="rounded-sm text-sm text-navy-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-navy-700 pt-6 text-sm text-navy-200 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4" aria-label="Social links">
            {footerNavigation.social.map((link) => (
              <li key={link.label}>
                <Link href={link.href} aria-label={link.ariaLabel ?? link.label} className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
