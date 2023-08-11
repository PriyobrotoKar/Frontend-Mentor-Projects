/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Kumbh Sans": "'Kumbh Sans', sans-serif",
    },
    colors: {
      Verydarkdesaturatedblue: "hsl(238, 29%, 16%)",
      SoftRed: "hsl(14, 88%, 65%)",
      Lightgrayishblue: "hsl(240, 5%, 91%)",
      Verydarkgrayishblue: " hsl(237, 12%, 33%)",
      Darkgrayishblue: "hsl(240, 6%, 50%)",
      Softviolet: "hsl(273, 75%, 66%)",
      Softblue: "hsl(240, 73%, 65%)",
    },
    extend: {},
  },
  plugins: [],
};
