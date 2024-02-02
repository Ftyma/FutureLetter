/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        green: "#86B18A",
        blue: "#008ECF",
        purple: "#9E28B5",
        white: "#FFFFFF",
        darkgreen: "#1a472a",
        beige: "#f6f1ee",
      },
    },
    screens: {
      ss: "240px",
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
