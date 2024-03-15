/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#42A4F5",
      },
      maxWidth: {
        pc: "500px",
      },
    },
  },
  plugins: [],
};
