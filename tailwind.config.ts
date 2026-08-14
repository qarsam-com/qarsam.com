import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Primary: Deep Navy / Charcoal
        "navy": {
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
        "electric": {
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
        "success": {
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
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
