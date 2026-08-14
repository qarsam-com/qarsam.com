import { cn } from "@/lib/utils";

export interface SkeletonProps {
  className?: string;
  rounded?: "sm" | "md" | "lg" | "full";
}

const roundedClasses = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export default function Skeleton({ className, rounded = "md" }: SkeletonProps) {
  return <div className={cn("animate-pulse bg-navy-100", roundedClasses[rounded], className)} aria-hidden="true" />;
}
