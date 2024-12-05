/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts,jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0e7fe",
          500: "#3e38a7",
          600: "#5046e4",
        }
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'display': ['Oswald'],
        'body': ["Open Sans"],
        'sour':['Sour Gummy']
      }
    },
  },
  plugins: [],
}

