/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all your files are included
  ],
  theme: {
    extend: {
      animation: {
        rainbow: 'rainbow 5s ease-in-out infinite',
      },
      keyframes: {
        rainbow: {
          '0%': { color: 'red' },
          '14%': { color: 'orange' },
          '28%': { color: 'yellow' },
          '42%': { color: 'green' },
          '57%': { color: 'blue' },
          '71%': { color: 'indigo' },
          '85%': { color: 'violet' },
          '100%': { color: 'red' },
        },
      },
      textShadow: {
        xl: '4px 4px 8px rgba(0, 0, 0, 0.25)', // Add the shadow utility
      },
    },
  },
  plugins: [],
};
