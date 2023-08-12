/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      SpaceGrotesk: "'Space Grotesk', sans-serif",
    },
    colors: {
      White: "hsl(0, 0%, 100%)",
      Lightgrayishviolet: "hsl(270, 3%, 87%)",
      Darkgrayishviolet: "hsl(279, 6%, 55%)",
      Verydarkviolet: "hsl(278, 68%, 11%)",
      Red: "hsl(0, 100%, 66%)",
      LinearGradient1: "hsl(249, 99%, 64%)",
      LinearGradient2: "hsl(278, 94%, 30%)",
    },
    extend: {},
  },
  plugins: [],
};
