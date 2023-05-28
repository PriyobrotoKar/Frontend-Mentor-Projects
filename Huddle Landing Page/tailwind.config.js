/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/index.html"],
  theme: {
    fontFamily:{
      "Poppins":"'Poppins', sans-serif",
    },
    extend: {
      colors: {
        Violet: "hsl(257, 40%, 49%)",
        "Soft-Magenta": "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
