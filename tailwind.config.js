/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primaryhover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      secondaryhover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

