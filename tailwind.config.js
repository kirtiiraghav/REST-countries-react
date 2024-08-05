/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    darkMode:'class',
    theme: {
      extend: {
        fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
            'nunito':["Nunito Sans", 'sans-serif']
          },
          colors: {
            'background-color': 'var(--background-color)',
            'text-color': 'var(--text-color)',
            'elements-color': 'var(--elements-color)',
            'image-border': 'var(--image-border)',
            'shimmer-color':'var(--shimmer-color)',
          },
      },
    },
    plugins: [],
  }