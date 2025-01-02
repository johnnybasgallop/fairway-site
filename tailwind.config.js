/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans-serif font
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(to right, #1F6328, #019F0D, #1F6328)",
      },
    },
  },
  plugins: [],
};
