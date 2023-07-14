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
        'radial-gradient-start': 'rgba(252,211,77,0.64)', // the start color of your radial gradient
        'radial-gradient-end': 'rgba(28,25,23,1)', // the end color of your radial gradient
        'opaque': 'rgba(198, 208, 216, 0.15)',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown .5s ease-out',
      },
      boxShadow: {
        glow: '0 0 10px 0 #000000', 
        blueGlow: '0 0 20px 0 #4FACF7',
        sBlueGlow: '0 0 10px 0 #4FACF7',
      },
      textShadow: {
        'white' : '0 0 1em #f4f4f5',
      },
    },
    variants: {
      extend: {
        animation: ['hover'],
      },
    }
  },
  plugins: [require('tailwindcss-textshadow')],
} satisfies Config;
