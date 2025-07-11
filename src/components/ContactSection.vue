<template>
  <section id="contact" class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-10 text-gray-800">Liên hệ</h2>
      <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p class="text-center text-lg text-gray-700 mb-6">
          Bạn có dự án thú vị không? Hay chỉ muốn nói lời chào? Đừng ngần ngại liên hệ với tôi!
        </p>

        <div class="space-y-6">
          <div class="flex items-center justify-center">
            <svg class="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:your.email@example.com" class="text-xl text-blue-600 hover:underline">your.email@example.com</a>
          </div>

          <div class="flex items-center justify-center">
            <svg class="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.249 11.249 0 005.422 5.422l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <span class="text-xl text-gray-700">[Số điện thoại của bạn - Tùy chọn]</span>
          </div>
        </div>

        <div class="mt-8 text-center">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Kết nối với tôi</h3>
          <div class="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-blue-700 hover:text-blue-900 transition duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" class="w-10 h-10" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" class="text-gray-800 hover:text-gray-900 transition duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="w-10 h-10" />
            </a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
};
</script>

<style scoped>
/* Không cần CSS scoped nếu chỉ dùng Tailwind hoặc các class tiện ích */
</style>