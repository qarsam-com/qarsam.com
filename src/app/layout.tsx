import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qarsam | Software Development & Digital Solutions",
  description:
    "We build modern digital solutions that help businesses grow. Custom software, web development, WordPress, e-commerce, hosting & cloud infrastructure.",
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
  authors: [{ name: "Qarsam" }],
  creator: "Qarsam",
  metadataBase: new URL("https://qarsam.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qarsam.com",
    siteName: "Qarsam",
    title: "Qarsam | Software Development & Digital Solutions",
    description:
      "We build modern digital solutions that help businesses grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qarsam | Software Development & Digital Solutions",
    description:
      "We build modern digital solutions that help businesses grow.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to Google Fonts for optimal font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Fonts - loaded with display=swap for optimal font loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
