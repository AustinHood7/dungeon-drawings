import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at center, red, yellow, green)', // radial gradient
        'gradient-linear': 'linear-gradient(to bottom right, #121212, hsla(168, 96%, 50%, 0.3) 99%)', // linear gradient
     }),
      colors: {
        'bg': '#121212',
        'primary': '#959797',
        'text': '#f0f0f0',
        'secondary': '#242423',
        'accent': '#4FACF7',
      }
    }
  },
  plugins: [],
} satisfies Config;
