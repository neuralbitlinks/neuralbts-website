import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        "bg-soft": "#f4f6fb",
        "bg-softer": "#e9edf6",
        ink: "#0b1120",
        "ink-soft": "#475569",
        "ink-faint": "#94a3b8",
        line: "#e6e9f2",
        brand: "#0b1120",
        accent: "#5b6bff",
        "accent-2": "#9b6bff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "16px",
        lg: "28px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15,23,42,.06), 0 1px 3px rgba(15,23,42,.04)",
        DEFAULT: "0 10px 30px rgba(15,23,42,.08)",
        lg: "0 24px 60px rgba(15,23,42,.12)",
        glow: "0 0 60px rgba(91,107,255,.35)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
