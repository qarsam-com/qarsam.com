import type { LinkItem } from "@/types/common";

export const primaryNavigation: LinkItem[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technologies", href: "#technologies" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerNavigation = {
  social: [
    { label: "LinkedIn", href: "#", ariaLabel: "Visit Qarsam on LinkedIn" },
    { label: "X", href: "#", ariaLabel: "Visit Qarsam on X" },
    { label: "GitHub", href: "#", ariaLabel: "Visit Qarsam on GitHub" },
  ] satisfies LinkItem[],
};
