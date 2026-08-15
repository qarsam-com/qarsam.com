"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/icons";
import { BRAND, CTA } from "@/lib/constants";

/**
 * Hero Section Component
 * Premium landing section with headline, CTA buttons, and trust indicators
 */
const HeroSection: React.FC = () => {
  // Trust indicators to build credibility
  const trustIndicators = [
    { text: "Business-first consulting", icon: true },
    { text: "Secure & scalable delivery", icon: true },
    { text: "Long-term technical partnership", icon: true },
  ];

  return (
    <section
      className={cn(
        "relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32",
        "bg-gradient-to-br from-white via-navy-50 to-electric-50",
        "overflow-hidden"
      )}
      aria-label="Hero section"
    >
      {/* Decorative gradient blobs */}
      <div
        className={cn(
          "absolute -top-40 -right-40 w-80 h-80 rounded-full",
          "bg-gradient-to-br from-electric-200 to-electric-100",
          "opacity-40 blur-3xl"
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -bottom-20 -left-40 w-80 h-80 rounded-full",
          "bg-gradient-to-tr from-navy-200 to-navy-100",
          "opacity-30 blur-3xl"
        )}
        aria-hidden="true"
      />

      {/* Main content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Content */}
          <div className="animate-fade-in-up space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <Badge variant="accent" size="md">
                Business Technology Partner
              </Badge>
            </div>

            {/* Headline */}
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold",
                "text-navy-900 leading-tight",
                "tracking-tight"
              )}
            >
              Modernize your business with{" "}
              <span className="text-electric-600">intelligent technology</span>
            </h1>

            {/* Subheading */}
            <p
              className={cn(
                "text-lg md:text-xl text-navy-600 leading-relaxed",
                "max-w-xl"
              )}
            >
              {BRAND.description} We partner with organizations to understand
              their business challenges and deliver secure, scalable digital
              solutions that create measurable value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton
                text={CTA.primary}
                variant="primary"
                size="lg"
                icon={<WhatsAppIcon className="w-5 h-5" />}
                className="animate-fade-in-up"
              />
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center justify-center gap-2 hover:bg-navy-50"
              >
                {CTA.secondary}
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-navy-200"
              aria-label="Trust indicators"
            >
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 animate-fade-in-up"
                  )}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                  } as React.CSSProperties}
                >
                  {indicator.icon && (
                    <CheckIcon className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm md:text-base font-medium text-navy-700">
                    {indicator.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Visual element */}
          <div className="relative hidden lg:block">
            {/* Premium gradient illustration area */}
            <div
              className={cn(
                "relative w-full h-96 rounded-2xl",
                "bg-gradient-to-br from-electric-400 to-electric-600",
                "shadow-2xl",
                "animate-fade-in"
              )}
            >
              {/* Inner content area */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl overflow-hidden",
                  "flex items-center justify-center"
                )}
              >
                {/* SVG Illustration Placeholder - Premium geometric design */}
                <svg
                  className="w-full h-full p-8"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Background pattern */}
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                      <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity="0.05"
                      />
                    </linearGradient>
                  </defs>

                  {/* Geometric shapes representing tech */}
                  <circle
                    cx="200"
                    cy="100"
                    r="60"
                    fill="url(#grad1)"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <rect
                    x="100"
                    y="200"
                    width="80"
                    height="80"
                    rx="8"
                    fill="url(#grad1)"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <rect
                    x="220"
                    y="200"
                    width="80"
                    height="80"
                    rx="8"
                    fill="url(#grad1)"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  {/* Connection lines */}
                  <line
                    x1="200"
                    y1="160"
                    x2="140"
                    y2="200"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <line
                    x1="200"
                    y1="160"
                    x2="260"
                    y2="200"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Floating cards for depth */}
              <div
                className={cn(
                  "absolute -bottom-4 -left-4 w-32 h-24 rounded-lg",
                  "bg-white shadow-lg p-4 backdrop-blur-sm",
                  "animate-fade-in-up"
                )}
                style={{
                  animationDelay: "200ms",
                } as React.CSSProperties}
              >
                <div className="text-sm font-semibold text-navy-900">
                  10+
                </div>
                <div className="text-xs text-navy-600">Years of Delivery</div>
              </div>

              <div
                className={cn(
                  "absolute -top-4 -right-4 w-32 h-24 rounded-lg",
                  "bg-white shadow-lg p-4 backdrop-blur-sm",
                  "animate-fade-in-up"
                )}
                style={{
                  animationDelay: "400ms",
                } as React.CSSProperties}
              >
                <div className="text-sm font-semibold text-navy-900">
                  End-to-End
                </div>
                <div className="text-xs text-navy-600">Business Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Featured solution categories */}
        <div
          className={cn(
            "mt-20 pt-12 border-t border-navy-200",
            "animate-fade-in-up"
          )}
          style={{
            animationDelay: "600ms",
          } as React.CSSProperties}
        >
          <p className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-6">
            How We Help
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Digital Transformation",
              "Business Automation",
              "Enterprise Software",
              "Cloud & IT Modernization",
            ].map((service, index) => (
              <div
                key={index}
                className={cn(
                  "px-4 py-3 rounded-lg",
                  "bg-white/50 border border-navy-100",
                  "text-sm font-medium text-navy-700",
                  "hover:bg-electric-50 hover:border-electric-200",
                  "transition-all duration-300"
                )}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
