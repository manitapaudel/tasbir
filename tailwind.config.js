/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-beige-100": "#F5F3F0",
        "gray-beige-200": "#E0D9D0",
      },
      fontFamily: {
        montserrat: '"Montserrat", "serif"',
        inconsolata: '"Inconsolata", "serif"',
        indieFlower: '"Indie Flower", "cursive"',
      },
      screens: {
        500: "500px",
      },

      keyframes: {
        textFocus: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.5)", opacity: "1", color: "#991B1B" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        textFocus: "textFocus 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
