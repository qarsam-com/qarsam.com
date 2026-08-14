export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type StatusTone = "info" | "success" | "warning" | "error" | "neutral";

export type Orientation = "horizontal" | "vertical";

export type Responsive<T> = T | Partial<Record<"base" | "sm" | "md" | "lg" | "xl" | "2xl", T>>;

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
};
