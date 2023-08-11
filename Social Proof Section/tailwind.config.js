/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
      LeagueSpartan: "'League Spartan', sans-serif",
    },
    colors: {
      White: "hsl(0, 0%, 100%)",
      "Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
      "Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
      "Ver-Dark-Magenta": "hsl(300, 43%, 22%)",
      "Soft-Pink": "hsl(333, 80%, 67%)",
    },
    extend: {},
  },
  plugins: [],
};
