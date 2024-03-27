/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#eac7c7",
        secondary: "#a16466",
        tertiary: "#ece9f0",
        "black-100": "#261718",
        "black-200": "#12090a",
        "grey-100": "#525050",
        "white-100": "#c9c9c9",
        "grey-800" : "#2e2d2d"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xl: "1600px",
        xs: "450px",
        xxs: "300px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

