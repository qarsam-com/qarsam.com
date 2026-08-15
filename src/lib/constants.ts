/**
 * Constants for the Qarsam website
 * Note: Color palette is defined in lib/design-tokens.ts (single source of truth)
 */

// Brand information
export const BRAND = {
  name: "Qarsam",
  tagline: "Software Engineering, IT Consulting & Digital Transformation",
  description:
    "We help organizations modernize operations, automate workflows, and build scalable digital solutions.",
  website: "https://qarsam.com",
  email: "qarsam.com@gmail.com",
  phone: "+923396520107",
  whatsapp: "+923396520107",
};

// Navigation items (anchors on the single-page landing site)
export const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Why Qarsam", href: "#why-choose" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#technologies" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

// CTA texts
export const CTA = {
  primary: "Chat on WhatsApp",
  secondary: "Request a Free Quote",
  contactUs: "Let's discuss your next project.",
};

// Form labels
export const FORM_LABELS = {
  name: "Full Name",
  company: "Company (Optional)",
  phone: "Phone / WhatsApp",
  email: "Email Address",
  serviceRequired: "Service Required",
  projectDetails: "Project Details",
  submit: "Send Inquiry",
};

// Services for the form
export const SERVICE_OPTIONS = [
  "Software Development",
  "Web Development",
  "WordPress Solutions",
  "E-Commerce",
  "Hosting & Cloud",
  "Networking & Infrastructure",
  "Digital Marketing",
  "Other",
];
