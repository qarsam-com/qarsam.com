import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { Orientation, Responsive, Size } from "@/types/common";
import type { StackProps } from "@/types/components";

const directionClasses = {
  base: { horizontal: "flex-row", vertical: "flex-col" },
  sm: { horizontal: "sm:flex-row", vertical: "sm:flex-col" },
  md: { horizontal: "md:flex-row", vertical: "md:flex-col" },
  lg: { horizontal: "lg:flex-row", vertical: "lg:flex-col" },
  xl: { horizontal: "xl:flex-row", vertical: "xl:flex-col" },
  "2xl": { horizontal: "2xl:flex-row", vertical: "2xl:flex-col" },
} as const;

const gapClasses = {
  base: { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" },
  sm: { xs: "sm:gap-1", sm: "sm:gap-2", md: "sm:gap-4", lg: "sm:gap-6", xl: "sm:gap-8" },
  md: { xs: "md:gap-1", sm: "md:gap-2", md: "md:gap-4", lg: "md:gap-6", xl: "md:gap-8" },
  lg: { xs: "lg:gap-1", sm: "lg:gap-2", md: "lg:gap-4", lg: "lg:gap-6", xl: "lg:gap-8" },
  xl: { xs: "xl:gap-1", sm: "xl:gap-2", md: "xl:gap-4", lg: "xl:gap-6", xl: "xl:gap-8" },
  "2xl": { xs: "2xl:gap-1", sm: "2xl:gap-2", md: "2xl:gap-4", lg: "2xl:gap-6", xl: "2xl:gap-8" },
} as const;

const alignBaseClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const justifyBaseClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
} as const;

const breakpointPrefixes = { base: "", sm: "sm:", md: "md:", lg: "lg:", xl: "xl:", "2xl": "2xl:" } as const;

function resolveFlexResponsive<T extends string>(
  value: Responsive<T>,
  classes: Record<string, Record<T, string>>
) {
  if (typeof value === "string") return [classes.base[value]];
  return Object.entries(value).map(([breakpoint, current]) => classes[breakpoint][current as T]);
}

function resolvePrefixedResponsive<T extends string>(
  value: Responsive<T>,
  classes: Record<T, string>
) {
  if (typeof value === "string") return [classes[value]];

  return Object.entries(value).map(([breakpoint, current]) => {
    const baseClass = classes[current as T];
    const prefix = breakpointPrefixes[breakpoint as keyof typeof breakpointPrefixes];
    return prefix ? `${prefix}${baseClass}` : baseClass;
  });
}

export default function Stack({
  as: Component = "div",
  className,
  children,
  direction = "vertical",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  ...props
}: StackProps & HTMLAttributes<HTMLElement>) {
  return (
    <Component
      className={cn(
        "flex",
        resolveFlexResponsive(direction as Responsive<Orientation>, directionClasses),
        resolveFlexResponsive(gap as Responsive<Size>, gapClasses),
        resolvePrefixedResponsive(align, alignBaseClasses),
        resolvePrefixedResponsive(justify, justifyBaseClasses),
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
