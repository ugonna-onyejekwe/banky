import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#0179FE",
          2: "#F3F9FF",
        },

        dark: {
          1: "#0d0d0d",
          2: "#475467",
        },

        background: {
          1: "#fff",
        },
      },
      boxShadow: {
        customShadow: "0 0 5px #c7c7c7",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
