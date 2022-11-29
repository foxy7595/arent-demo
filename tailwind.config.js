module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        "primary-300": "#FFCC21",
        "primary-400": "#FF963C",
        "primary-500": "#EA6C00",
        "secondary-300": "#8FE9D0",
        "dark-600": "#2E2E2E",
        "dark-500": "#414141",
        "gray-400": "#777777",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
