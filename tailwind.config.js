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
        // Đặt tên font chính của bạn (ví dụ: 'sans' sẽ là font mặc định)
        sans: ['Roboto', 'sans-serif'],
        // Font cho tiêu đề hoặc các phần nhấn mạnh
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}