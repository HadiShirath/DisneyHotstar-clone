/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 16px 15px 0px rgba(0, 0, 0, 0.55)",
      },
      colors: {
        ringblue500: "#095ae6",
        ringBlue700: "#062794",
      },
    },
  },

  plugins: [require("tailwindcss-no-scrollbar")],
};
