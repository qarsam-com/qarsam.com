import type { LinkItem } from "@/types/common";

export const primaryNavigation: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  social: [
    { label: "LinkedIn", href: "#", ariaLabel: "Visit Qarsam on LinkedIn" },
    { label: "X", href: "#", ariaLabel: "Visit Qarsam on X" },
    { label: "GitHub", href: "#", ariaLabel: "Visit Qarsam on GitHub" },
  ] satisfies LinkItem[],
};
