/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gallery-bg": "#eef0f6",
        "gallery-light": "#cfdaec",
        "gallery-algae": "#9cb9d1",
        "gallery-med": "#759cd8",
        "gallery-dark": "#094d74",
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
