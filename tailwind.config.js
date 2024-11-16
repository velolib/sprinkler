/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
        "colors": {
          "gengar": {
            50: "#E2E3EE",
            100: "#D1D1E6",
            200: "#AFB1DA",
            300: "#8C8ECF",
            400: "#6669C7",
            500: "#3F44C0",
            600: "#3034A1",
            700: "#21247D",
            800: "#16185A",
            900: "#0C0D36",
            950: "#070825"
          }
        }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

