import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'image' : "url('/user.png')",
      },
      colors: {
        ungu :  '#5D00FF',
        navy : '#211B3D',
        lightpurple: '#FBF9FF',
        soft : '#EFE6FF'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
