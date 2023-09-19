/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(36, 36, 36)",
        primary: "rgb(228, 250, 191)",
        secondary: "rgb(6, 122, 70)",
      },
    },
  },
  plugins: ['@tailwindcss/aspect-ratio'],
}

