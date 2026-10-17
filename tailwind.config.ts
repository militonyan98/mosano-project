import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mosano: {
          blue: "#1E22AA",
          theme: "#3D63AE",
          navy: "#0C0D44",
          magenta: "#E31C79",
          yellow: "#FEDC2B",
          mint: "#C6EBBE",
          violet: "#8D6CF1",
          plum: "#540D6E",
          surface: "#F6F7FC",
          dark: "#222831",
          border: "#E2E2E2",
        },
      },
      fontFamily: {
        clan: ["Clan", "var(--font-clan)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        lora: ["var(--font-lora)", "Lora", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "Source Sans Pro", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "mosano-gradient": "linear-gradient(180deg, #1E22AA 0%, #E31C79 100%)",
        "mosano-horizontal": "linear-gradient(90deg, #1E22AA 0%, #E31C79 100%)",
        "mosano-glow": "radial-gradient(circle at 50% 50%, rgba(30, 34, 170, 0.15) 0%, rgba(227, 28, 121, 0.05) 50%, transparent 80%)",
      },
      boxShadow: {
        "mosano-card": "0 10px 30px -10px rgba(12, 13, 68, 0.08), 0 4px 6px -2px rgba(12, 13, 68, 0.04)",
        "mosano-hover": "0 20px 40px -15px rgba(30, 34, 170, 0.18)",
        "mosano-elevated": "0 25px 50px -12px rgba(12, 13, 68, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
