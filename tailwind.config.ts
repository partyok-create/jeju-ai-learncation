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
        ivory: "#F4F0E8",
        paper: "#FBFAF6",
        charcoal: "#252521",
        ocean: "#315D62",
        basalt: "#575754",
        moss: "#727B65",
        sand: "#D9CBB8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "var(--font-sans)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        h1: ["44px", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "h1-lg": ["92px", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        h2: ["34px", { lineHeight: "1.12" }],
        "h2-lg": ["60px", { lineHeight: "1.08" }],
        h3: ["24px", { lineHeight: "1.25" }],
        "h3-lg": ["33px", { lineHeight: "1.25" }],
        body: ["17px", { lineHeight: "1.7" }],
        "body-lg": ["18px", { lineHeight: "1.75" }],
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
      },
      maxWidth: {
        content: "1240px",
      },
      spacing: {
        section: "72px",
        "section-lg": "140px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
