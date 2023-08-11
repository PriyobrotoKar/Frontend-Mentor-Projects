/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    colors: {
      Red: "hsl(0, 78%, 62%)",
      Cyan: "hsl(180, 62%, 55%)",
      Orange: "hsl(34, 97%, 64%)",
      Blue: "hsl(212, 86%, 64%)",
      "Very-Dark-Blue": "hsl(234, 12%, 34%)",
      "Grayish-Blue": "hsl(229, 6%, 66%)",
      "Very-Light-Gray": "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      Poppins: "'Poppins', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
