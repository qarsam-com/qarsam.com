import { cn } from "@/lib/utils";

export interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

export default function Spinner({ className, size = "md", label = "Loading" }: SpinnerProps) {
  return (
    <span className="inline-flex items-center gap-2" role="status" aria-live="polite">
      <span className={cn("inline-block animate-spin rounded-full border-current border-r-transparent text-electric-600", sizeClasses[size], className)} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
