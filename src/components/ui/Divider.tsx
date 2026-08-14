import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "subtle" | "normal" | "bold";
  className?: string;
}

const variantStyles = {
  subtle: "bg-navy-100",
  normal: "bg-navy-200",
  bold: "bg-navy-300",
};

/**
 * Divider Component
 * Separates content visually
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "normal",
      className,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        className={cn(
          variantStyles[variant],
          isHorizontal ? "h-px w-full" : "w-px h-full",
          className
        )}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export default Divider;
