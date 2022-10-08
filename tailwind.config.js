/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        biruMuda: "#67c7e0",
        biruTua: "#16719F",
        orangeMuda: "#F59024",
        orangeTua: "#e58e42",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
