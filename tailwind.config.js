import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        "bg-light": "#ffffff",
        "bg-card": "#ffffff",
        accent: "#135bec",
        "accent-secondary": "#06b6d4",
        "text-primary": "#1a1a2e",
        "text-secondary": "#64748b",

        // Dark mode colors
        "bg-dark": "#0a0a0f",
        "bg-elevated": "#12121a",
        "accent-dark": "#2bcdee",
        "accent-purple": "#8b5cf6",
        "text-primary-dark": "#f8fafc",
        "text-secondary-dark": "#94a3b8",

        // Legacy colors (for compatibility)
        darkblue: "#134B73",
        lightblue: "#E6F2FB",
        midblue: "#71B7E9",
        lightgray: "#D9D9D9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #06b6d4 0%, #ffffff 50%, #d4f1f9 100%)",
        "gradient-hero-dark":
          "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)",
        "gradient-accent": "linear-gradient(135deg, #135bec 0%, #06b6d4 100%)",
        "gradient-accent-dark":
          "linear-gradient(135deg, #2bcdee 0%, #8b5cf6 100%)",
        "gradient-border": "linear-gradient(135deg, #06b6d4, #ffffff, #d4f1f9)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(43, 205, 238, 0.3)",
        "glow-lg": "0 0 40px rgba(43, 205, 238, 0.4)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-dark": "0 4px 20px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(43, 205, 238, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(43, 205, 238, 0.5)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
