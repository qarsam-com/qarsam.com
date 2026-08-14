import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3";
}

export const SectionHeading = React.forwardRef<
  HTMLHeadingElement,
  SectionHeadingProps
>(({ className, children, level = "h2", ...props }, ref) => {
  const Component = level;
  const baseStyles =
    "font-poppins font-bold tracking-tight text-navy-900 mb-4";

  const levels = {
    h1: "text-5xl md:text-6xl",
    h2: "text-4xl md:text-5xl",
    h3: "text-2xl md:text-3xl",
  };

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, levels[level], className)}
      {...props}
    >
      {children}
    </Component>
  );
});

SectionHeading.displayName = "SectionHeading";

interface SectionSubheadingProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const SectionSubheading = React.forwardRef<
  HTMLParagraphElement,
  SectionSubheadingProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-lg md:text-xl text-navy-600 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

SectionSubheading.displayName = "SectionSubheading";
