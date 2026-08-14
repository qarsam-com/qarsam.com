import type { ElementType, ReactNode } from "react";
import type { LinkItem, Orientation, Responsive, Size, StatusTone } from "@/types/common";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface BreadcrumbItem extends LinkItem {
  current?: boolean;
}

export interface PaginationItem {
  label: string;
  page: number;
  isCurrent?: boolean;
}

export interface StackProps extends BaseComponentProps {
  as?: ElementType;
  direction?: Responsive<Orientation>;
  gap?: Responsive<Size>;
  align?: Responsive<"start" | "center" | "end" | "stretch">;
  justify?: Responsive<"start" | "center" | "end" | "between" | "around">;
  wrap?: boolean;
}

export interface AlertProps extends BaseComponentProps {
  title?: string;
  tone?: StatusTone;
}
