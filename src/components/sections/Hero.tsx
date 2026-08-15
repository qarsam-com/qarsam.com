"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Button from "@/components/ui/Button";
import IconBadge from "@/components/ui/IconBadge";
import { WhatsAppIcon, ArrowRightIcon, CheckIcon, SparklesIcon } from "@/components/icons";
import { BRAND, CTA } from "@/lib/constants";
import type { IconName } from "@/components/icons";

/**
 * Hero Section Component
 * Premium landing section with headline, CTA buttons, and trust indicators
 */
const HeroSection: React.FC = () => {
  const trustIndicators = [
    "Business-first consulting",
    "Secure & scalable delivery",
    "Long-term technical partnership",
  ];

  const howWeHelp: Array<{ label: string; icon: IconName }> = [
    { label: "Digital Transformation", icon: "rocket" },
    { label: "Business Automation", icon: "workflow" },
    { label: "Enterprise Software", icon: "layers" },
    { label: "Cloud & IT Modernization", icon: "cloud" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
      aria-label="Hero section"
    >
      {/* Layered background: grid pattern + radial fade + gradient blobs */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] animate-float-slow rounded-full bg-gradient-to-br from-electric-200 to-electric-100 opacity-50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-8rem] left-[-10%] h-[24rem] w-[24rem] animate-float-slower rounded-full bg-gradient-to-tr from-success-100 to-electric-50 opacity-40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-navy-100 to-transparent opacity-40 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Content */}
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-electric-100 bg-electric-50/80 px-4 py-2 text-sm font-semibold text-electric-700 shadow-sm backdrop-blur-sm">
              <SparklesIcon className="h-4 w-4" aria-hidden="true" />
              Business Technology Partner
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-5xl lg:text-[3.75rem]">
              Modernize your business with{" "}
              <span className="text-gradient-brand">intelligent technology</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-navy-600 md:text-xl">
              {BRAND.description} We partner with organizations to understand
              their business challenges and deliver secure, scalable digital
              solutions that create measurable value.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <CTAButton text={CTA.primary} variant="primary" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />} />
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2"
              >
                {CTA.secondary}
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-navy-100 pt-8 sm:grid-cols-3" aria-label="Trust indicators">
              {trustIndicators.map((text, index) => (
                <div
                  key={text}
                  className="flex animate-fade-in-up items-start gap-2.5"
                  style={{ animationDelay: `${(index + 1) * 100}ms` } as React.CSSProperties}
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-success-600" aria-hidden="true" />
                  <span className="text-sm font-medium leading-snug text-navy-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Visual — abstract product / dashboard mockup */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="relative mx-auto w-full max-w-md">
              {/* Ambient glow behind the panel */}
              <div className="absolute inset-0 -z-10 bg-glow-electric blur-2xl" />

              {/* Main glass panel */}
              <div className="animate-fade-in rounded-3xl border border-white/60 bg-white/70 p-6 shadow-premium backdrop-blur-xl">
                <div className="flex items-center gap-1.5 border-b border-navy-100 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-electric-400" />
                  <span className="ml-3 text-xs font-semibold uppercase tracking-widest text-navy-400">
                    Solution Overview
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card">
                    <IconBadge icon="code" tone="electric" size="md" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy-900">Custom Platform Build</p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-electric-500 to-electric-600" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card">
                    <IconBadge icon="cpu" tone="navy" size="md" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy-900">Workflow Automation</p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
                        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-navy-700 to-navy-900" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card">
                    <IconBadge icon="cloud" tone="success" size="md" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy-900">Cloud Infrastructure</p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
                        <div className="h-full w-11/12 rounded-full bg-gradient-to-r from-success-500 to-success-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards for depth */}
              <div
                className="absolute -bottom-6 -left-8 w-36 animate-fade-in-up rounded-2xl border border-navy-100 bg-white p-4 shadow-premium"
                style={{ animationDelay: "300ms" } as React.CSSProperties}
              >
                <p className="text-2xl font-bold text-navy-900">10+</p>
                <p className="text-xs font-medium text-navy-500">Years of Delivery</p>
              </div>

              <div
                className="absolute -top-8 -right-6 w-40 animate-fade-in-up rounded-2xl border border-navy-100 bg-white p-4 shadow-premium"
                style={{ animationDelay: "450ms" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-100 text-success-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">End-to-End</p>
                    <p className="text-xs text-navy-500">Business Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Featured solution categories */}
        <div
          className="mt-20 animate-fade-in-up border-t border-navy-100 pt-10"
          style={{ animationDelay: "500ms" } as React.CSSProperties}
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-navy-500">How We Help</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {howWeHelp.map(({ label, icon }) => (
              <div
                key={label}
                className={cn(
                  "group flex items-center gap-3 rounded-xl border border-navy-100 bg-white/60 px-4 py-3.5 backdrop-blur-sm",
                  "transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-200 hover:bg-white hover:shadow-card"
                )}
              >
                <IconBadge
                  icon={icon}
                  tone="electric"
                  size="sm"
                  className="opacity-90 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium text-navy-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
