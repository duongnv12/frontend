<template>
  <footer class="bg-gray-800 text-white py-6 mt-auto">
    <div class="container mx-auto px-4 text-center text-sm">
      <p>&copy; {{ currentYear }} Dương. Mọi quyền được bảo lưu.</p>
      <p class="mt-2">Được xây dựng với Vue.js, Node.js & Tailwind CSS</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
/* Không cần CSS scoped nếu chỉ dùng Tailwind hoặc các class tiện ích */
</style>