/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00302E",

          secondary: "#FBDDBB",

          accent: "#0B0D17",

          neutral: "#FFFFFF",

          "base-100": "#2A303C",

          info: "#06E775",

          success: "#3A8F4D",

          warning: "#F3C294",

          error: "#C92C33",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
