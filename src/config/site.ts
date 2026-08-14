import type { LinkItem } from "@/types/common";

export const siteConfig = {
  name: "Qarsam",
  title: "Qarsam | Software Development & Digital Solutions",
  description:
    "We build modern digital solutions that help businesses grow. Custom software, web development, WordPress, e-commerce, hosting & cloud infrastructure.",
  url: "https://qarsam.com",
  locale: "en_US",
  email: "qarsam.com@gmail.com",
  phone: "+923396520107",
  social: {
    linkedin: "#",
    x: "#",
    github: "#",
  } satisfies Record<string, string>,
  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Software Development", href: "/services" },
      { label: "Web Development", href: "/services" },
      { label: "Cloud Infrastructure", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
    ],
    resources: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Products", href: "/products" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  } satisfies Record<string, LinkItem[]>,
} as const;

export type SiteConfig = typeof siteConfig;
