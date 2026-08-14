import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "success" | "neutral";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantStyles = {
  primary: "bg-navy-100 text-navy-900",
  secondary: "bg-navy-200 text-navy-800",
  accent: "bg-electric-100 text-electric-900",
  success: "bg-success-100 text-success-900",
  neutral: "bg-gray-200 text-gray-900",
};

const sizeStyles = {
  sm: "px-2 py-1 text-xs font-medium rounded-md",
  md: "px-3 py-1.5 text-sm font-medium rounded-lg",
  lg: "px-4 py-2 text-base font-medium rounded-lg",
};

/**
 * Badge Component
 * Compact label or status indicator
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "neutral",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-block whitespace-nowrap",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
