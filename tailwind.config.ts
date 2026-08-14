import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        ivory: "#F6F1E8",
        charcoal: "#222222",
        ocean: "#3F6F78",
        basalt: "#6B6965",
        olive: "#7C876A",
        sand: "#D9CBB8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "var(--font-sans)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        h1: ["42px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "h1-lg": ["84px", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        h2: ["32px", { lineHeight: "1.15" }],
        "h2-lg": ["56px", { lineHeight: "1.1" }],
        h3: ["24px", { lineHeight: "1.25" }],
        "h3-lg": ["33px", { lineHeight: "1.25" }],
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
