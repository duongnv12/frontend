// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Font chính cho nội dung (body text)
        sans: ['Inter', 'sans-serif'],
        // Font cho tiêu đề (headings)
        heading: ['Montserrat', 'sans-serif'],
      },
      // Thêm các màu sắc tùy chỉnh nếu muốn (như đã có)
      colors: {
        primary: '#3B82F6', // Blue-600
        secondary: '#A855F7', // Purple-600
        accent: '#FACC15', // Yellow-400
      }
    },
  },
  plugins: [],
}