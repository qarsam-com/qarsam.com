import type { LinkItem } from "@/types/common";

export const siteConfig = {
  name: "Qarsam",
  title: "Qarsam | Software Development & Digital Solutions",
  description:
    "We build modern digital solutions that help businesses grow. Custom software, web development, WordPress, e-commerce, hosting & cloud infrastructure.",
  url: "https://qarsam.com",
  locale: "en_US",
  email: "info@qarsam.com",
  phone: "+923001234567",
  social: {
    linkedin: "#",
    x: "#",
    github: "#",
  } satisfies Record<string, string>,
  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/documentation" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  } satisfies Record<string, LinkItem[]>,
} as const;

export type SiteConfig = typeof siteConfig;
