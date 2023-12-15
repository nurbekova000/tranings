/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: "0px",
      s: "480px",
      sm: "640px",
      md: "768px",
      mg: "992px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1990px",
    },
  },
  plugins: [],
};
