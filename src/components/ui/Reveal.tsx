"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Delay in milliseconds before the reveal transition starts once visible */
  delay?: number;
  as?: "div" | "li";
}

/**
 * Fades and lifts content into view the first time it enters the viewport.
 * Falls back to fully visible if IntersectionObserver is unavailable.
 */
export default function Reveal({ children, delay = 0, className, style, as = "div", ...props }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = as as "div";

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      data-reveal
      data-revealed={isVisible}
      className={cn(className)}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}

