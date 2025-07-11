<template>
  <nav class="bg-blue-700 p-4 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-white text-2xl font-bold hover:text-blue-100 transition duration-300">
        [Tên của bạn]
      </a>

      <div class="hidden md:flex space-x-6">
        <a href="#about" class="nav-link">Về tôi</a>
        <a href="#projects" class="nav-link">Dự án</a>
        <a href="#contact" class="nav-link">Liên hệ</a>
      </div>

      <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
        <svg v-if="!isMobileMenuOpen" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-blue-800 py-4 mt-2 rounded-b-lg shadow-lg">
      <a @click="closeMenuAndScroll('#about')" class="block px-4 py-2 text-white hover:bg-blue-700 transition duration-300">Về tôi</a>
      <a @click="closeMenuAndScroll('#projects')" class="block px-4 py-2 text-white hover:bg-blue-700 transition duration-300">Dự án</a>
      <a @click="closeMenuAndScroll('#contact')" class="block px-4 py-2 text-white hover:bg-blue-700 transition duration-300">Liên hệ</a>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppNavbar', // Đã đổi tên ở bước trước
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMenuAndScroll = (id) => {
      isMobileMenuOpen.value = false;
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      isMobileMenuOpen,
      // Add these two functions to the return object
      toggleMobileMenu, // <--- ADD THIS LINE
      closeMenuAndScroll, // <--- ADD THIS LINE
    };
  },
};
</script>

<style scoped>
.nav-link {
  @apply text-white hover:text-blue-100 transition duration-300 font-semibold;
}
</style>