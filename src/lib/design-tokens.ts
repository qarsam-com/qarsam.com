/**
 * Design Tokens for Qarsam Website
 * Centralized design system values for consistent, premium UI
 */

// Color Palette
export const COLORS = {
  // Primary: Deep Navy / Charcoal
  navy: {
    50: "#f8f9fa",
    100: "#e9ecf1",
    200: "#d4dce8",
    300: "#a8b5d1",
    400: "#7c8dba",
    500: "#5a6fa3",
    600: "#3d5185",
    700: "#2d3a5e",
    800: "#1a2340",
    900: "#0f1523",
  },
  // Accent: Electric Blue
  electric: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c3d66",
  },
  // Success: WhatsApp Green
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#145231",
  },
  // Neutral
  gray: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  white: "#ffffff",
  black: "#000000",
} as const;

// Typography Scale
export const TYPOGRAPHY = {
  // Headings - Poppins, Bold
  h1: {
    mobile: {
      fontSize: "2rem",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
      fontWeight: 700,
    },
    desktop: {
      fontSize: "3.75rem",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
      fontWeight: 700,
    },
  },
  h2: {
    mobile: {
      fontSize: "1.5rem",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
      fontWeight: 700,
    },
    desktop: {
      fontSize: "3rem",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
      fontWeight: 700,
    },
  },
  h3: {
    mobile: {
      fontSize: "1.25rem",
      lineHeight: "1.3",
      letterSpacing: "-0.3px",
      fontWeight: 700,
    },
    desktop: {
      fontSize: "1.875rem",
      lineHeight: "1.3",
      letterSpacing: "-0.3px",
      fontWeight: 700,
    },
  },
  // Body text - Inter, Regular
  body: {
    lg: {
      fontSize: "1.125rem",
      lineHeight: "1.6",
      fontWeight: 400,
    },
    base: {
      fontSize: "1rem",
      lineHeight: "1.6",
      fontWeight: 400,
    },
    sm: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
      fontWeight: 400,
    },
    xs: {
      fontSize: "0.75rem",
      lineHeight: "1.4",
      fontWeight: 400,
    },
  },
} as const;

// Spacing Scale
export const SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  "3xl": "3rem", // 48px
  "4xl": "4rem", // 64px
  "5xl": "5rem", // 80px
  "6xl": "6rem", // 96px
} as const;

// Border Radius
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.375rem", // 6px
  base: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  full: "9999px",
} as const;

// Shadow System
export const SHADOWS = {
  none: "none",
  xs: "0 1px 2px 0 rgba(15, 21, 35, 0.05)",
  sm: "0 1px 3px 0 rgba(15, 21, 35, 0.1), 0 1px 2px -1px rgba(15, 21, 35, 0.1)",
  md: "0 4px 6px -1px rgba(15, 21, 35, 0.1), 0 2px 4px -2px rgba(15, 21, 35, 0.1)",
  lg: "0 10px 15px -3px rgba(15, 21, 35, 0.1), 0 4px 6px -4px rgba(15, 21, 35, 0.1)",
  xl: "0 20px 25px -5px rgba(15, 21, 35, 0.1), 0 8px 10px -6px rgba(15, 21, 35, 0.1)",
  "2xl": "0 25px 50px -12px rgba(15, 21, 35, 0.15)",
} as const;

// Transition/Animation
export const TRANSITIONS = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  slowest: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// Z-Index Scale
export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

// Breakpoints (Mobile First)
export const BREAKPOINTS = {
  mobile: "0px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
  ultrawide: "1536px",
} as const;

// Content Width
export const CONTENT_WIDTH = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  full: "100%",
} as const;

// Container Padding
export const CONTAINER_PADDING = {
  mobile: "1rem", // 16px
  tablet: "1.5rem", // 24px
  desktop: "2rem", // 32px
} as const;

// Opacity Scale
export const OPACITY = {
  0: "0",
  5: "0.05",
  10: "0.1",
  20: "0.2",
  30: "0.3",
  40: "0.4",
  50: "0.5",
  60: "0.6",
  70: "0.7",
  75: "0.75",
  80: "0.8",
  90: "0.9",
  95: "0.95",
  100: "1",
} as const;

// Focus Ring
export const FOCUS_RING = {
  width: "2px",
  color: "#0ea5e9",
  offset: "2px",
} as const;

// Gradient Presets
export const GRADIENTS = {
  subtle: "linear-gradient(135deg, #f8f9fa 0%, #e9ecf1 100%)",
  accent: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
  dark: "linear-gradient(135deg, #0f1523 0%, #1a2340 100%)",
} as const;

/**
 * Get responsive value based on breakpoint
 * Usage: getResponsiveValue('mobile' | 'tablet' | 'desktop')
 */
export function getResponsivePadding(breakpoint: keyof typeof BREAKPOINTS): string {
  if (breakpoint === "mobile") return CONTAINER_PADDING.mobile;
  if (breakpoint === "tablet") return CONTAINER_PADDING.tablet;
  return CONTAINER_PADDING.desktop;
}

export default {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  TRANSITIONS,
  Z_INDEX,
  BREAKPOINTS,
  CONTENT_WIDTH,
  CONTAINER_PADDING,
  OPACITY,
  FOCUS_RING,
  GRADIENTS,
};
