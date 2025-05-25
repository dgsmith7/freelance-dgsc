/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Use CSS variables for theme colors
        primary: 'var(--accent-primary)',
        secondary: 'var(--accent-secondary)',
        light: {
          text: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          bg: 'var(--bg-primary)',
          bgSecondary: 'var(--bg-secondary)',
        },
        dark: {
          text: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          bg: 'var(--bg-primary)',
          bgSecondary: 'var(--bg-secondary)',
        },
      },
      // Consider adding official Tailwind plugins for animations and more
    },
  },
  plugins: [
    // Consider adding the official aspect ratio plugin instead of custom CSS
    // require('@tailwindcss/aspect-ratio'),
  ],
}
