import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BRAND, SERVICE_OPTIONS } from "@/lib/constants";
import type { BreadcrumbItem } from "@/types/components";

export type Stat = {
  label: string;
  value: string;
  detail?: string;
};

export type PageIntro = {
  eyebrow: string;
  title: string;
  description: string;
  supportingText?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  bullets?: string[];
};

export type TimelineItem = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  services: string[];
  outcome: string;
  highlights: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  tags: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export type JobOpening = {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
};

export const companyStats: Stat[] = [
  { value: "10+", label: "Years building digital products", detail: "Practical delivery experience across product, marketing, and operations." },
  { value: "Cross-functional", label: "Delivery model", detail: "Engineering, design, content, and infrastructure aligned around measurable outcomes." },
  { value: "Flexible", label: "Engagement options", detail: "Project-based delivery, ongoing retainers, or embedded team support." },
];

export const aboutIntro: PageIntro = {
  eyebrow: "About Qarsam",
  title: "A practical technology partner for ambitious teams.",
  description:
    "Qarsam helps businesses launch, improve, and scale digital products with a balanced approach to engineering quality, usability, and commercial impact.",
  supportingText:
    "We focus on clear communication, steady execution, and solutions that remain maintainable after launch.",
};

export const aboutValues: FeatureItem[] = [
  {
    title: "Outcome-focused delivery",
    description: "We start with business goals and user needs so product decisions stay grounded in measurable outcomes.",
  },
  {
    title: "Sustainable engineering",
    description: "We prioritize maintainable architecture, documentation, and handoff readiness instead of short-term fixes.",
  },
  {
    title: "Transparent collaboration",
    description: "Clients get visibility into priorities, trade-offs, timelines, and progress throughout the engagement.",
  },
  {
    title: "Continuous improvement",
    description: "We review performance after launch and iterate on product, content, and infrastructure based on evidence.",
  },
];

export const teamHighlights: FeatureItem[] = [
  {
    title: "Product-minded engineers",
    description: "Teams that translate requirements into scalable software, integrations, and operational workflows.",
  },
  {
    title: "Web and commerce specialists",
    description: "Experts in content-led websites, storefronts, and conversion-oriented user journeys.",
  },
  {
    title: "Infrastructure and growth support",
    description: "Hosting, deployment, cloud, analytics, and digital marketing support designed to complement product delivery.",
  },
];

export const serviceCatalog: FeatureItem[] = [
  {
    title: "Software Development",
    description: "Custom software for internal operations, client platforms, SaaS products, and business automation.",
    bullets: ["Discovery and architecture", "API and backend development", "Integrations and workflows"],
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites with strong performance, accessibility, and content flexibility.",
    bullets: ["Marketing sites", "Corporate websites", "Performance optimization"],
  },
  {
    title: "WordPress Solutions",
    description: "Custom WordPress implementations for editorial teams that need ease of publishing and dependable maintenance.",
    bullets: ["Theme customization", "Plugin integration", "Managed support"],
  },
  {
    title: "E-Commerce",
    description: "Commerce experiences that connect product merchandising, checkout flows, and operational processes.",
    bullets: ["Storefront UX", "Catalog management", "Payments and fulfillment"],
  },
  {
    title: "Hosting & Managed Support",
    description: "Reliable environments, routine maintenance, monitoring, and operational support for business continuity.",
    bullets: ["Managed hosting", "Backups and monitoring", "Maintenance plans"],
  },
  {
    title: "Cloud Infrastructure",
    description: "Cloud setups that support secure deployments, scaling, and operational resilience.",
    bullets: ["Cloud planning", "Deployment automation", "Environment hardening"],
  },
  {
    title: "Digital Marketing",
    description: "Strategy and execution support for attracting relevant traffic and improving lead quality.",
    bullets: ["Landing page strategy", "Search visibility", "Analytics and reporting"],
  },
];

export const deliveryProcess: TimelineItem[] = [
  { title: "Discover", description: "Clarify goals, user needs, constraints, and success criteria before building." },
  { title: "Plan", description: "Define solution scope, technical approach, milestones, and delivery priorities." },
  { title: "Build", description: "Implement in increments with regular reviews, quality checks, and stakeholder feedback." },
  { title: "Launch & Improve", description: "Support rollout, track results, and iterate based on usage and business feedback." },
];

export const solutionIndustries: FeatureItem[] = [
  {
    title: "FinTech",
    description: "Operational dashboards, onboarding flows, reporting tools, and secure transaction-related interfaces.",
    bullets: ["Workflow automation", "Customer portals", "Data visibility"],
  },
  {
    title: "E-Commerce",
    description: "Commerce systems that connect storefront experience with merchandising, marketing, and fulfillment.",
    bullets: ["Storefront improvements", "Order operations", "Conversion optimization"],
  },
  {
    title: "Healthcare",
    description: "Information platforms and internal tools that emphasize usability, clarity, and dependable access.",
    bullets: ["Appointment flows", "Content publishing", "Operational coordination"],
  },
  {
    title: "SaaS",
    description: "Product marketing sites, application experiences, admin tooling, and customer lifecycle support.",
    bullets: ["Product UX", "User onboarding", "Internal admin systems"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "commerce-operations-platform",
    title: "Commerce operations platform",
    summary: "A unified platform concept for managing catalog updates, order workflows, and reporting across multiple channels.",
    industry: "E-Commerce",
    services: ["Software Development", "Web Development", "Cloud Infrastructure"],
    outcome: "Improved visibility across storefront and operations with a streamlined internal workflow.",
    highlights: ["Centralized order monitoring", "Faster catalog publishing", "Operational reporting foundations"],
  },
  {
    slug: "fintech-client-portal",
    title: "FinTech client portal",
    summary: "A secure portal concept for onboarding, document exchange, and status visibility for financial service clients.",
    industry: "FinTech",
    services: ["Software Development", "UX Planning", "Managed Support"],
    outcome: "Clearer client communication and reduced manual status updates for the operations team.",
    highlights: ["Guided onboarding", "Self-service status tracking", "Role-based views"],
  },
  {
    slug: "content-led-brand-refresh",
    title: "Content-led brand refresh",
    summary: "A modern website framework for a growing company that needed clearer positioning, stronger SEO foundations, and faster publishing.",
    industry: "SaaS",
    services: ["Web Development", "WordPress Solutions", "Digital Marketing"],
    outcome: "Better content organization and a more scalable publishing workflow for ongoing campaigns.",
    highlights: ["Reusable page templates", "Improved performance baseline", "Editorial flexibility"],
  },
];

export const productsCatalog: FeatureItem[] = [
  {
    title: "Operations dashboards",
    description: "Internal reporting and visibility tools that help teams track performance, tasks, and exceptions in one place.",
  },
  {
    title: "Website starter systems",
    description: "Reusable website foundations with performance, accessibility, and content structure already considered.",
  },
  {
    title: "Commerce enablement tools",
    description: "Utilities and workflows that support product publishing, order coordination, and post-purchase communication.",
  },
];

export const productApproach: FeatureItem[] = [
  {
    title: "Built for real workflows",
    description: "We shape products around actual team processes rather than generic feature lists.",
  },
  {
    title: "Designed for extension",
    description: "Foundations are structured to accommodate future integrations, content needs, and business changes.",
  },
  {
    title: "Supported after launch",
    description: "We can continue with iteration, maintenance, and roadmap support as products evolve.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "planning-software-projects-for-business-growth",
    title: "Planning software projects for sustainable business growth",
    description: "How to define scope, priorities, and delivery expectations before development begins.",
    category: "Strategy",
    publishedAt: "2026-07-10",
    readingTime: "6 min read",
    author: "Qarsam Team",
    tags: ["Planning", "Software Development", "Delivery"],
    sections: [
      {
        heading: "Start with the business problem",
        paragraphs: [
          "A strong software initiative begins with clarity about the operational problem, customer pain point, or growth constraint you are trying to solve.",
          "When teams define success in business terms, prioritization becomes easier and technical decisions stay aligned with outcomes.",
        ],
      },
      {
        heading: "Turn requirements into milestones",
        paragraphs: [
          "Breaking scope into milestones reduces risk and creates useful checkpoints for feedback.",
          "It also helps stakeholders distinguish essential functionality from nice-to-have enhancements.",
        ],
        bullets: ["Define core workflows first", "Agree on acceptance criteria", "Review dependencies early"],
      },
      {
        heading: "Plan for the post-launch phase",
        paragraphs: [
          "Maintenance, monitoring, training, and analytics should be part of delivery planning, not an afterthought.",
          "Teams that prepare for iteration from the start usually see better long-term product quality and adoption.",
        ],
      },
    ],
  },
  {
    slug: "what-modern-business-websites-need-in-2026",
    title: "What modern business websites need in 2026",
    description: "A practical look at performance, clarity, accessibility, and content operations for company websites.",
    category: "Web Development",
    publishedAt: "2026-06-21",
    readingTime: "5 min read",
    author: "Qarsam Team",
    tags: ["Web Development", "SEO", "Accessibility"],
    sections: [
      {
        heading: "Performance still shapes trust",
        paragraphs: [
          "Visitors often judge credibility through page speed and responsiveness before they ever read your message.",
          "Modern websites should be optimized for loading performance, device responsiveness, and content clarity across key landing pages.",
        ],
      },
      {
        heading: "Accessibility supports usability",
        paragraphs: [
          "Accessible structure improves the experience for all users, not only those relying on assistive technology.",
          "Clear headings, good contrast, keyboard navigation, and predictable content patterns make websites easier to use and maintain.",
        ],
      },
      {
        heading: "Content operations matter",
        paragraphs: [
          "A site should not only launch well; it should also be easy for teams to keep current.",
          "Reusable sections, sensible CMS structures, and clear ownership improve long-term consistency.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-commerce-foundation",
    title: "Choosing the right commerce foundation",
    description: "Questions to ask when evaluating your e-commerce setup, integrations, and growth readiness.",
    category: "E-Commerce",
    publishedAt: "2026-05-29",
    readingTime: "7 min read",
    author: "Qarsam Team",
    tags: ["E-Commerce", "Operations", "Growth"],
    sections: [
      {
        heading: "Map customer and team workflows",
        paragraphs: [
          "The right platform depends on how customers shop and how your team manages products, orders, promotions, and support.",
          "Understanding both sides of the workflow reveals where flexibility and automation matter most.",
        ],
      },
      {
        heading: "Review operational dependencies",
        paragraphs: [
          "Commerce decisions are rarely isolated. Payments, fulfillment, analytics, and content publishing all influence the final architecture.",
          "A good foundation should reduce manual coordination rather than create new operational friction.",
        ],
        bullets: ["Payment and checkout requirements", "Catalog complexity", "Reporting expectations"],
      },
      {
        heading: "Think beyond launch",
        paragraphs: [
          "Promotions, product expansion, internationalization, and new integrations usually arrive soon after launch.",
          "Choosing a flexible foundation early can lower future migration and maintenance costs.",
        ],
      },
    ],
  },
];

export const openings: JobOpening[] = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote / Hybrid",
    summary: "Help design and build modern web experiences with strong attention to usability, performance, and maintainability.",
    responsibilities: [
      "Build responsive interfaces using modern frontend frameworks.",
      "Collaborate with design and backend stakeholders to shape implementation details.",
      "Contribute to component quality, accessibility, and performance improvements.",
    ],
  },
  {
    id: "wordpress-specialist",
    title: "WordPress Specialist",
    type: "Contract",
    location: "Remote",
    summary: "Support content-rich websites with custom themes, integrations, and managed improvements.",
    responsibilities: [
      "Implement custom WordPress features and reusable content structures.",
      "Maintain site health, updates, and plugin compatibility.",
      "Coordinate publishing requirements with marketing or editorial teams.",
    ],
  },
  {
    id: "project-coordinator",
    title: "Project Coordinator",
    type: "Full-time",
    location: "Remote / On-site",
    summary: "Keep delivery organized through clear communication, planning support, and stakeholder coordination.",
    responsibilities: [
      "Track milestones, action items, and delivery risks across active projects.",
      "Support client communication and meeting follow-up.",
      "Help improve internal processes and documentation quality.",
    ],
  },
];

export const cultureHighlights: FeatureItem[] = [
  {
    title: "Collaborative delivery",
    description: "We value thoughtful communication, constructive feedback, and shared ownership of outcomes.",
  },
  {
    title: "Room to grow",
    description: "Team members are encouraged to strengthen technical depth, communication, and product thinking.",
  },
  {
    title: "Meaningful work",
    description: "Projects span real business problems where clarity, reliability, and user experience matter.",
  },
];

export const faqItems = [
  {
    id: "faq-services",
    title: "What types of projects does Qarsam take on?",
    content:
      "We support a mix of custom software, websites, WordPress implementations, e-commerce work, infrastructure support, and digital growth initiatives. Engagements can be scoped as focused projects or ongoing support relationships.",
  },
  {
    id: "faq-process",
    title: "How do you usually start a new engagement?",
    content:
      "We begin by understanding goals, constraints, and priorities. From there we recommend an approach, outline scope, and define a delivery path that fits the stage of the business and the complexity of the work.",
  },
  {
    id: "faq-support",
    title: "Do you provide support after launch?",
    content:
      "Yes. We can provide maintenance, hosting support, incremental improvements, and advisory support after launch depending on the needs of the project.",
  },
  {
    id: "faq-timeline",
    title: "How are timelines and scope managed?",
    content:
      "We break work into milestones, communicate trade-offs early, and review progress regularly so decisions can be made with good visibility into timing and priorities.",
  },
  {
    id: "faq-pricing",
    title: "Can you work with an existing internal team?",
    content:
      "Yes. We can collaborate with in-house teams by contributing implementation capacity, specialized expertise, or structured delivery support where it is most useful.",
  },
];

export const privacySections: Array<{ title: string; body: string[] }> = [
  {
    title: "Information we receive",
    body: [
      "When you contact Qarsam, we may receive information such as your name, company, email address, phone number, and project details you choose to share.",
      "We may also receive technical information needed to operate the website, such as basic analytics, browser data, or server logs.",
    ],
  },
  {
    title: "How information is used",
    body: [
      "We use submitted information to respond to inquiries, understand project requirements, improve our services, and maintain the website.",
      "We do not present placeholder policy statements as legal advice. This page should be reviewed and finalized with your legal counsel before production use.",
    ],
  },
  {
    title: "Retention and protection",
    body: [
      "We aim to retain information only as long as reasonably necessary for communication, service delivery, record-keeping, or compliance purposes.",
      "Reasonable technical and organizational measures should be maintained to protect the information entrusted to the business.",
    ],
  },
];

export const termsSections: Array<{ title: string; body: string[] }> = [
  {
    title: "Website use",
    body: [
      "By using this website, visitors agree to use it lawfully and in a way that does not disrupt access, misuse content, or interfere with the website's operation.",
      "Information on the website is provided for general business and service information purposes and may be updated over time.",
    ],
  },
  {
    title: "Project engagements",
    body: [
      "Any formal project engagement, scope, timeline, pricing, or support arrangement should be governed by separate written agreements between Qarsam and the client.",
      "Nothing on this page should replace properly reviewed contractual terms tailored to a specific engagement.",
    ],
  },
  {
    title: "Limitation and review",
    body: [
      "This page is a professional placeholder and should be reviewed by qualified legal counsel before being relied upon as final terms.",
      "Qarsam may update these terms as the website and business operations evolve.",
    ],
  },
];

export const contactDetails = [
  {
    title: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    description: "For project inquiries, partnerships, and general questions.",
  },
  {
    title: "Phone / WhatsApp",
    value: BRAND.phone,
    href: `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`,
    description: "For direct conversations about timelines, scope, or support.",
  },
  {
    title: "Working approach",
    value: "Remote-first collaboration",
    href: undefined,
    description: "Available for remote delivery, hybrid coordination, and scheduled workshops.",
  },
];

export const contactFormOptions = SERVICE_OPTIONS.map((service) => ({
  label: service,
  value: service,
}));

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function buildBreadcrumbs(label: string, href: string): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label, href, current: true },
  ];
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
