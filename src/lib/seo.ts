/**
 * SEO utilities for generating metadata and structured data
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

/**
 * Generate Open Graph metadata
 */
export function generateOpenGraphMeta(metadata: SEOMetadata) {
  return {
    "og:title": metadata.title,
    "og:description": metadata.description,
    "og:image": metadata.image || "https://qarsam.com/og-image.png",
    "og:url": metadata.url || "https://qarsam.com",
    "og:type": metadata.type || "website",
  };
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterCardMeta(metadata: SEOMetadata) {
  return {
    "twitter:card": "summary_large_image",
    "twitter:title": metadata.title,
    "twitter:description": metadata.description,
    "twitter:image": metadata.image || "https://qarsam.com/og-image.png",
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qarsam",
    url: "https://qarsam.com",
    logo: "https://qarsam.com/logo.svg",
    description: "We build modern digital solutions that help businesses grow.",
    sameAs: [
      // Social media URLs to be added
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "qarsam.com@gmail.com",
    },
  };
}

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Qarsam",
    image: "https://qarsam.com/logo.svg",
    description: "Software Development & Digital Solutions",
    url: "https://qarsam.com",
    telephone: "+923396520107",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pakistan",
      addressLocality: "Pakistan",
      postalCode: "",
      addressCountry: "PK",
    },
  };
}

/**
 * Generate JSON-LD for Service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    image: service.image,
    provider: {
      "@type": "Organization",
      name: "Qarsam",
      url: "https://qarsam.com",
    },
  };
}
