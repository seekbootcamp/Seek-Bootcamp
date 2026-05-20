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
        background: "#05010F",
        purple: {
          DEFAULT: "#6D28D9",
          light: "#8B5CF6",
          dark: "#4C1D95",
          glow: "#7C3AED",
        },
        pink: {
          DEFAULT: "#EC4899",
          glow: "#DB2777",
        },
        gold: {
          DEFAULT: "#FBBF24",
          light: "#FCD34D",
          dark: "#F59E0B",
        },
        surface: {
          DEFAULT: "#0D0820",
          elevated: "#130F2A",
          glass: "rgba(13, 8, 32, 0.6)",
        },
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.4) 0%, transparent 70%)",
        "purple-pink":
          "linear-gradient(135deg, #6D28D9 0%, #EC4899 100%)",
        "purple-gold":
          "linear-gradient(135deg, #6D28D9 0%, #FBBF24 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(236,72,153,0.05) 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(109,40,217,0.5), 0 0 60px rgba(109,40,217,0.2)",
        "glow-pink": "0 0 20px rgba(236,72,153,0.5), 0 0 60px rgba(236,72,153,0.2)",
        "glow-gold": "0 0 20px rgba(251,191,36,0.5), 0 0 60px rgba(251,191,36,0.2)",
        "card": "0 0 0 1px rgba(109,40,217,0.2), 0 20px 60px rgba(0,0,0,0.5)",
        "card-hover": "0 0 0 1px rgba(109,40,217,0.5), 0 20px 80px rgba(109,40,217,0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
