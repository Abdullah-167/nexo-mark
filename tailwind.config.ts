import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Haas Grotesk"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Neue Haas Display"', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
