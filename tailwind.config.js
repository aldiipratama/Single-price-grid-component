/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
        colors: {
            "light-gray": "#e5eff5",
            "grayish-blue": "#98a6bd",
            "bright-yellow": "#c0df34",
            "cyan": "#2ab2af"
        }
    },
  },
  plugins: [],
};
