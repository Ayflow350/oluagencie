/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        centralBlack: "#0F0F0F",
        sectionBlack: "#1A1A1A",
        inputBlack: "#0F0F0F",
        backgroundOrange: "#CE7D63",
        textOrange: "#DA9E8B",
        headingColor: "#F9EFEC",
        grey: "#B3B3B2",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};
