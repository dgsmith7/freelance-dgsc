/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Use 'class' strategy for dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: "#4A90E2", // Calm blue for primary elements
        secondary: "#1C1C1E", // Dark gray for secondary elements
        lightBackground: "#FFFFFF", // Bright white for light mode background
        darkBackground: "#1A1A1A", // Deep black for dark mode background
        lightText: "#1A1A1A", // Deep black for light mode text
        darkText: "#E5E5E5", // Light gray for dark mode text
        accent: "#50E3C2", // Soft green accent for highlights
      },
    },
  },
  plugins: [],
};
