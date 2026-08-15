import React from "react";
import { cn } from "@/lib/utils";
import { focusRingClassName } from "@/constants/ui";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex shrink-0 items-center justify-center whitespace-nowrap font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
      primary:
        "bg-electric-600 text-white shadow-glow hover:bg-electric-700 hover:-translate-y-0.5 hover:shadow-xl",
      secondary:
        "bg-navy-900 text-white shadow-card hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lg",
      outline:
        "border-2 border-navy-200 text-navy-900 bg-white hover:border-electric-400 hover:bg-electric-50 hover:-translate-y-0.5",
      ghost: "text-navy-900 hover:bg-navy-50",
      link: "text-electric-600 underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], focusRingClassName, className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
