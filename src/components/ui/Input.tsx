import React from "react";
import { cn } from "@/lib/utils";
import { focusRingClassName } from "@/constants/ui";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
  hasError?: boolean;
}

const sizeClasses = {
  sm: "h-10 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-4 text-lg",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", inputSize = "md", hasError = false, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full rounded-lg border bg-white text-navy-900 placeholder:text-navy-400 transition-colors disabled:cursor-not-allowed disabled:bg-navy-50 disabled:text-navy-500",
        sizeClasses[inputSize],
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

Input.displayName = "Input";

export default Input;
