/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#111827",
        "green-active": "#16A34A",
      },
      zIndex: {
        100: "100",
      },
      screens:{
        "hdx":'900px'
      }
    },
  },
  plugins: [],
};
