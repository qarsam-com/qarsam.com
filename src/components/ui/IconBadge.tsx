import React from "react";
import { cn } from "@/lib/utils";
import { iconMap, type IconName } from "@/components/icons";

interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: IconName;
  size?: "sm" | "md" | "lg";
  tone?: "electric" | "navy" | "success" | "white";
}

const sizeStyles = {
  sm: "h-9 w-9 [&>svg]:h-4 [&>svg]:w-4",
  md: "h-12 w-12 [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
};

const toneStyles = {
  electric: "bg-gradient-to-br from-electric-500 to-electric-700 text-white",
  navy: "bg-gradient-to-br from-navy-800 to-navy-900 text-white",
  success: "bg-gradient-to-br from-success-500 to-success-700 text-white",
  white: "bg-white text-electric-600 border border-electric-100",
};

/**
 * Gradient icon badge used across feature/service/process cards for
 * consistent iconography throughout the landing page.
 */
export default function IconBadge({ icon, size = "md", tone = "electric", className, ...props }: IconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl shadow-card",
        sizeStyles[size],
        toneStyles[tone],
        className
      )}
      {...props}
    >
      <Icon aria-hidden="true" />
    </span>
  );
}
