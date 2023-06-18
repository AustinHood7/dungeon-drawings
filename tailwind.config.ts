import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg': '#121212',
        'primary': '#959797',
        'text': '#f0f0f0',
        'secondary': '#242423',
        'accent': '#09f7d9',
      }
    }
  },
  plugins: [],
} satisfies Config;
