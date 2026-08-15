import type { LinkItem } from "@/types/common";
import { NAV_ITEMS } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export const primaryNavigation: LinkItem[] = NAV_ITEMS;

export const footerNavigation = {
  social: [
    { label: "LinkedIn", href: siteConfig.social.linkedin, ariaLabel: "Visit Qarsam on LinkedIn" },
    { label: "Facebook", href: siteConfig.social.facebook, ariaLabel: "Visit Qarsam on Facebook" },
    { label: "Instagram", href: siteConfig.social.instagram, ariaLabel: "Visit Qarsam on Instagram" },
    { label: "WhatsApp", href: siteConfig.social.whatsapp, ariaLabel: "Message Qarsam on WhatsApp" },
    { label: "Email", href: `mailto:${siteConfig.email}`, ariaLabel: "Email Qarsam" },
  ] satisfies LinkItem[],
};
