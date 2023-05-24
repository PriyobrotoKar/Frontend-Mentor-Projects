/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      JosefinSans: "'Josefin Sans', sans-serif",
    },
    extend: {
      colors: {
        DesaturatedRed: "hsl(0, 36%, 70%)",
        SoftRed: "hsl(0, 93%, 68%)",
        DarkGrayishRed: "hsl(0, 6%, 24%)",
        grWhite: "hsl(0, 0%, 100%)",
        grWhitishPink: "hsl(0, 100%, 98%)",
        grPink: "hsl(0, 80%, 86%)",
        grOrange: "hsl(0, 74%, 74%)",
      },
    },
  },
  plugins: [],
};
