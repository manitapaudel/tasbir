/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-beige-100": "#F5F3F0", // Light Gray-Beige
        "gray-beige-200": "#E0D9D0", // Soft Beige
        "gray-beige-300": "#D1C8B6", // Warm Beige
        "gray-beige-400": "#B8A895", // Muted Beige
        "gray-beige-500": "#9E8C7B", // Medium Gray-Beige
        "gray-beige-600": "#8A7766", // Dusty Beige
        "gray-beige-700": "#7D6B59", // Rich Gray-Beige
        "gray-beige-800": "#6A5A47", // Deep Beige
        "gray-beige-900": "#5A4A3C", // Dark Gray-Beige
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
