import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

type ResponsiveCols = Partial<Record<Breakpoint, GridCols>>;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: GridCols;
  responsive?: ResponsiveCols;
  gap?: "sm" | "md" | "lg" | "xl";
}

const colClasses: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const responsivePrefix: Record<Breakpoint, string> = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
};

const gapClasses = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export default function Grid({ className, cols = 1, responsive, gap = "md", ...props }: GridProps) {
  const responsiveClasses = Object.entries(responsive ?? {}).map(
    ([breakpoint, value]) => `${responsivePrefix[breakpoint as Breakpoint]}:${colClasses[value as GridCols]}`
  );

  return <div className={cn("grid", colClasses[cols], gapClasses[gap], responsiveClasses, className)} {...props} />;
}
