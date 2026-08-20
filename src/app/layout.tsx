import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import { Providers } from "@/lib/providers";
import "./globals.css";

const OG_DESCRIPTION =
  "Qarsam is a software engineering and IT consulting partner helping businesses modernize operations, automate workflows, and build scalable digital solutions — including custom software, web development, cloud infrastructure, and AI-enabled automation.";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "software development",
    "web development",
    "WordPress development",
    "e-commerce",
    "hosting",
    "cloud solutions",
    "digital marketing",
    "Pakistan",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: OG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col bg-white text-navy-900">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
