import type { LinkItem } from "@/types/common";

export const siteConfig = {
  name: "Qarsam",
  title: "Qarsam | Software Engineering, IT Consulting & Digital Transformation",
  description:
    "Qarsam helps organizations modernize operations, automate workflows, and build secure, scalable digital solutions as a trusted business technology partner.",
  url: "https://qarsam.com",
  locale: "en_US",
  email: "qarsam.com@gmail.com",
  phone: "+923396520107",
  social: {
    linkedin: "https://www.linkedin.com/in/qarsam-com-34862642b/",
    facebook: "https://www.facebook.com/profile.php?id=61593421386531",
    instagram: "https://www.instagram.com/qarsam.com2026/",
    whatsapp: "https://wa.me/923396520107",
  } satisfies Record<string, string>,
  footerLinks: {
    company: [
      { label: "Solutions", href: "/#solutions" },
      { label: "Services", href: "/#services" },
      { label: "Why Qarsam", href: "/#why-choose" },
      { label: "Contact", href: "/#contact" },
    ],
    services: [
      { label: "Software Engineering", href: "/#services" },
      { label: "IT Consulting", href: "/#services" },
      { label: "Business Automation", href: "/#services" },
      { label: "Cloud & Infrastructure", href: "/#services" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  } satisfies Record<string, LinkItem[]>,
} as const;

export type SiteConfig = typeof siteConfig;
