import React from "react";
import { cn } from "@/lib/utils";
import { focusRingClassName } from "@/constants/ui";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError = false, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full rounded-lg border bg-white px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors disabled:cursor-not-allowed disabled:bg-navy-50",
        hasError
          ? "border-red-500 focus:border-red-500"
          : "border-navy-200 hover:border-navy-300 focus:border-electric-500",
        focusRingClassName,
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
