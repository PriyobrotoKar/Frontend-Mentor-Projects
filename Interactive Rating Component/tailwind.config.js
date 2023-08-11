/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Overpass: "'Overpass', sans-serif"
    },
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)',
        'LightGrey': 'hsl(217, 12%, 63%)',
        'MediumGrey': 'hsl(216, 12%, 54%)',
        'DarkBlue': 'hsl(213, 19%, 18%)',
        'VeryDarkBlue': 'hsl(216, 12%, 8%)',
        'orange':'hsl(25, 97%, 53%)',
      }
    },
  },
  plugins: [],
}

