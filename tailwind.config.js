/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zzz: {
          black: "#0A0A0C",
          dark: "#141418",
          panel: "#1E1E24",
          yellow: "#D8FF00",
          orange: "#FF5500",
          cyan: "#00F0FF",
        }
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        tech: ['"Chakra Petch"', 'sans-serif'],
      },
      boxShadow: {
        'hard-white': '6px 6px 0px 0px #FFFFFF',
        'hard-yellow': '6px 6px 0px 0px #D8FF00',
        'hard-orange': '6px 6px 0px 0px #FF5500',
        'hard-black': '4px 4px 0px 0px #0A0A0C',
      }
    },
  },
  plugins: [],
}