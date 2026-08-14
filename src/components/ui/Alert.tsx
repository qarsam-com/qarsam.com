import { cn } from "@/lib/utils";
import type { AlertProps } from "@/types/components";

const toneClasses = {
  info: "border-electric-200 bg-electric-50 text-electric-900",
  success: "border-success-200 bg-success-50 text-success-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  error: "border-red-200 bg-red-50 text-red-900",
  neutral: "border-navy-200 bg-navy-50 text-navy-900",
};

export default function Alert({ className, title, tone = "info", children }: AlertProps) {
  return (
    <div className={cn("rounded-xl border p-4", toneClasses[tone], className)} role="alert" aria-live="polite">
      {title ? <p className="font-semibold">{title}</p> : null}
      {children ? <div className={cn(title && "mt-2", "text-sm")}>{children}</div> : null}
    </div>
  );
}
