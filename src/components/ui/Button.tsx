import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
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
      "font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-electric-600 text-white hover:bg-electric-700 focus-visible:outline-electric-500",
      secondary:
        "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-700",
      outline:
        "border-2 border-navy-300 text-navy-900 hover:bg-navy-50 focus-visible:outline-navy-600",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
