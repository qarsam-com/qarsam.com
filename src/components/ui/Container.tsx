import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, maxWidth = "2xl", ...props }, ref) => {
    const maxWidths = {
      sm: "max-w-sm",
      md: "max-w-2xl",
      lg: "max-w-4xl",
      xl: "max-w-5xl",
      "2xl": "max-w-7xl",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          maxWidths[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
