/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'block-craft': ['"Block_Craft"', 'sans-serif'],
        'robotika': ['"Robotika_Pixel_Greek"', 'monospace'],
        'coretta': ['"Coretta"', 'monospace'],
      },
      spacing: {
        '120': '30rem',
        '160': '40rem',
        '190': '47.5rem',
        '200': '50rem',
      }
    },
  },
  plugins: [],
}