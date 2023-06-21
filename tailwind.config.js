/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-custom-image': "url('/public/apartment.jpg')"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'cc': '612px auto',
      }
    },
  },
  plugins: [],
}
