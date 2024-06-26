import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "375px",
      sm: "425px",
      // => @media (min-width: 426px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1025px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1440px",
      // => @media (min-width: 1536px) { ... }

      "4xl": "2560px",
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
    require("@xpd/tailwind-3dtransforms"),
  ],
};
export default config;
