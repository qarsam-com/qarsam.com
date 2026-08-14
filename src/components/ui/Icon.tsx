import React from "react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "accent" | "success" | "error";
  className?: string;
  children: React.ReactNode;
}

const sizeMap = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

const variantMap = {
  primary: "text-navy-900",
  secondary: "text-navy-600",
  accent: "text-electric-600",
  success: "text-success-600",
  error: "text-red-600",
};

/**
 * Icon Wrapper Component
 * Use with SVG icon components as children
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = "md", variant = "primary", className, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(sizeMap[size], variantMap[variant], className)}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
