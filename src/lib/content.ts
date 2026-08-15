import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BRAND, SERVICE_OPTIONS } from "@/lib/constants";
import type { BreadcrumbItem } from "@/types/components";
import type { IconName } from "@/components/icons";

export type Stat = {
  label: string;
  value: string;
  detail?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  bullets?: string[];
  icon?: IconName;
};

export type TimelineItem = {
  title: string;
  description: string;
  icon?: IconName;
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

export const companyStats: Stat[] = [
  { value: "10+", label: "Years of delivery experience", detail: "Practical experience helping organizations modernize operations and technology." },
  { value: "Business-first", label: "Consulting approach", detail: "Every engagement starts with understanding your workflows, not selling technology." },
  { value: "End-to-end", label: "Delivery model", detail: "Strategy, engineering, infrastructure, and long-term support in one partnership." },
];

export const businessChallenges: FeatureItem[] = [
  {
    title: "Manual & paper-based operations",
    description: "Teams still rely on paperwork and manual handoffs that slow decisions and introduce errors.",
    icon: "layers",
  },
  {
    title: "Repetitive business processes",
    description: "Valuable staff time is spent on repetitive tasks that could be automated or streamlined.",
    icon: "refresh",
  },
  {
    title: "Legacy software & disconnected systems",
    description: "Outdated applications and disconnected tools make it hard to get a unified view of the business.",
    icon: "puzzle",
  },
  {
    title: "Spreadsheet dependency",
    description: "Critical operations run on spreadsheets that are difficult to scale, audit, or share safely.",
    icon: "database",
  },
  {
    title: "Slow approval workflows",
    description: "Approvals and case handling move slowly across departments, delaying outcomes for customers and staff.",
    icon: "clock",
  },
  {
    title: "Limited reporting & visibility",
    description: "Leadership lacks timely, reliable data to monitor performance and make confident decisions.",
    icon: "chart",
  },
];

export const coreSolutions: FeatureItem[] = [
  {
    title: "Digital Transformation",
    description: "Modernize operations end-to-end with a clear roadmap tied to measurable business outcomes.",
    icon: "rocket",
  },
  {
    title: "Business Process Automation",
    description: "Replace manual, repetitive work with automated workflows that save time and reduce errors.",
    icon: "workflow",
  },
  {
    title: "Enterprise Software",
    description: "Purpose-built platforms that support how your organization actually operates and grows.",
    icon: "layers",
  },
  {
    title: "Workflow & Case Management",
    description: "Digital forms, approvals, and case tracking that speed up decisions across departments.",
    icon: "target",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable infrastructure that supports growth without unnecessary operational overhead.",
    icon: "cloud",
  },
  {
    title: "System Integration",
    description: "Connect disconnected tools into a unified digital ecosystem for better collaboration.",
    icon: "puzzle",
  },
  {
    title: "AI-Enabled Business Solutions",
    description: "Practical AI and automation that reduce workload and improve responsiveness.",
    icon: "cpu",
  },
  {
    title: "IT Modernization",
    description: "Upgrade legacy systems and infrastructure without disrupting day-to-day operations.",
    icon: "server",
  },
];

export const serviceCatalog: FeatureItem[] = [
  {
    title: "Software Engineering & Custom Applications",
    description: "Custom software, enterprise platforms, and integrations built around your business logic.",
    bullets: ["Custom & enterprise software development", "Web & mobile application development", "API development & system integration"],
    icon: "code",
  },
  {
    title: "IT Consulting & Digital Transformation",
    description: "Strategic guidance that connects technology decisions to business objectives.",
    bullets: ["IT consultation & technology advisory", "Business process analysis", "Solution architecture & IT infrastructure planning"],
    icon: "target",
  },
  {
    title: "Business Process Automation",
    description: "Digitize workflows, approvals, and reporting to remove manual bottlenecks.",
    bullets: ["Workflow design & automation", "Digital forms & document management", "Business dashboards & analytics"],
    icon: "workflow",
  },
  {
    title: "Cloud & Infrastructure",
    description: "Reliable, secure infrastructure that scales with your organization.",
    bullets: ["Cloud migration & infrastructure design", "Server administration & deployment", "Backup & disaster recovery planning"],
    icon: "cloud",
  },
  {
    title: "WordPress Development & Management",
    description: "Custom WordPress builds, stores, and ongoing management for content-driven teams.",
    bullets: ["Custom themes & plugin development", "WooCommerce development", "Performance & security hardening"],
    icon: "globe",
  },
  {
    title: "AI & Intelligent Automation",
    description: "Practical AI integration that automates decisions and improves customer experience.",
    bullets: ["AI integration for business applications", "Intelligent chatbots & virtual assistants", "AI workflow automation"],
    icon: "cpu",
  },
  {
    title: "Managed IT & Cybersecurity",
    description: "Ongoing protection, monitoring, and support that keeps systems reliable.",
    bullets: ["Security audits & website security", "Performance monitoring", "Managed IT services & technical support"],
    icon: "shield",
  },
  {
    title: "Digital Experience & E-Commerce",
    description: "Corporate websites and online stores designed to convert and perform.",
    bullets: ["Corporate website development", "E-commerce & WooCommerce stores", "Website optimization & SEO"],
    icon: "search",
  },
];

export const whyChooseUs: FeatureItem[] = [
  {
    title: "Business-first consulting approach",
    description: "We understand your operations before recommending any technology.",
    icon: "target",
  },
  {
    title: "Technology-independent recommendations",
    description: "We recommend the right tools for your goals, not the tools we prefer to sell.",
    icon: "sparkles",
  },
  {
    title: "Experienced engineering team",
    description: "A team that has delivered software, infrastructure, and automation across diverse industries.",
    icon: "users",
  },
  {
    title: "Secure & scalable solutions",
    description: "Every solution is designed to remain reliable and secure as your organization grows.",
    icon: "shield",
  },
  {
    title: "Modern development practices",
    description: "Clean architecture, maintainable code, and current engineering standards throughout delivery.",
    icon: "code",
  },
  {
    title: "Long-term technical partnership",
    description: "We stay involved after launch to support, optimize, and evolve your solutions.",
    icon: "handshake",
  },
];

export const deliveryProcess: TimelineItem[] = [
  { title: "Consultation", description: "We start by listening — understanding your organization, goals, and challenges.", icon: "handshake" },
  { title: "Business Analysis", description: "We evaluate current workflows and identify where technology can create the most value.", icon: "search" },
  { title: "Solution Strategy", description: "We recommend the most effective technology approach based on your business needs.", icon: "target" },
  { title: "Design & Development", description: "We design, build, and implement secure, scalable solutions aligned with your goals.", icon: "code" },
  { title: "Testing & Deployment", description: "We validate quality, performance, and security before a confident rollout.", icon: "shield" },
  { title: "Support & Continuous Improvement", description: "We provide ongoing support, monitoring, and optimization as your business grows.", icon: "refresh" },
];

export type TechnologyGroup = {
  title: string;
  items: string[];
  icon?: IconName;
};

export const technologyGroups: TechnologyGroup[] = [
  { title: "Frontend & Web", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: "code" },
  { title: "Backend & APIs", items: ["Node.js", "PHP", "REST & GraphQL APIs", "Microservices"], icon: "server" },
  { title: "CMS & Commerce", items: ["WordPress", "WooCommerce", "Headless CMS"], icon: "globe" },
  { title: "Cloud & DevOps", items: ["AWS", "Linux Servers", "Docker", "CI/CD Pipelines"], icon: "cloud" },
  { title: "Data & Databases", items: ["MySQL", "PostgreSQL", "MongoDB"], icon: "database" },
  { title: "AI & Automation", items: ["AI Integrations", "Chatbots", "Workflow Automation", "Prompt Engineering"], icon: "cpu" },
];

export const industriesServed: string[] = [
  "Government & Public Sector",
  "Small & Medium Businesses",
  "Large Enterprises",
  "Educational Institutions",
  "Healthcare",
  "Logistics & Transportation",
  "Manufacturing",
  "Financial Services",
  "Retail & Commerce",
  "Professional Services",
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
    id: "faq-technologies",
    title: "Do you recommend specific technologies?",
    content:
      "We recommend technology based on your business requirements rather than a fixed stack. Our team works across modern software, cloud, WordPress, and automation platforms to fit each engagement.",
  },
  {
    id: "faq-pricing",
    title: "How does pricing and consultation work?",
    content:
      "Every engagement starts with a free consultation to understand your goals. From there we provide a scope-based proposal so pricing stays transparent and tied to the value delivered.",
  },
  {
    id: "faq-teamwork",
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

export const contactDetails: Array<{ title: string; value: string; href?: string; description: string; icon: IconName }> = [
  {
    title: "Phone",
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, "")}`,
    description: "Call us directly to discuss your business challenges.",
    icon: "phone",
  },
  {
    title: "WhatsApp",
    value: BRAND.whatsapp,
    href: `https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`,
    description: "Start a quick conversation about scope, timelines, or support.",
    icon: "whatsapp",
  },
  {
    title: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    description: "For project inquiries, partnerships, and general questions.",
    icon: "email",
  },
  {
    title: "Office",
    value: "Remote-first, serving clients globally",
    href: undefined,
    description: "Available for remote delivery, hybrid coordination, and scheduled workshops.",
    icon: "mapPin",
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
