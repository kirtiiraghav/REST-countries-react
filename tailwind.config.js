/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
            'nunito':["Nunito Sans", 'sans-serif']
          },
      },
    },
    plugins: [],
  }