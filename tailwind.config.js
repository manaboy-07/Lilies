/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00302E",

          secondary: "#FBDDBB",

          accent: "#1FB2A6",

          neutral: "#FFFFFF",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#3A8F4D",

          warning: "#FBBD23",

          error: "#C92C33",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
