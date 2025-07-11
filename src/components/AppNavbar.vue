<template>
  <nav class="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-3xl font-extrabold tracking-wide hover:text-blue-300 transition duration-300">
        Nguyễn Văn Dương
      </router-link>

      <div class="hidden md:flex space-x-6">
        <a href="#about" :class="['nav-link', { 'active-link': activeSection === 'about' }]" @click="closeMenuAndScroll('#about')">Về tôi</a>
        <a href="#projects" :class="['nav-link', { 'active-link': activeSection === 'projects' }]" @click="closeMenuAndScroll('#projects')">Dự án</a>
        <a href="#contact" :class="['nav-link', { 'active-link': activeSection === 'contact' }]" @click="closeMenuAndScroll('#contact')">Liên hệ</a>
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

    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-700 py-4 mt-2 rounded-b-lg shadow-lg">
      <a @click="closeMenuAndScroll('#about')" :class="['block px-4 py-2 text-white hover:bg-gray-600 transition duration-300', { 'active-mobile-link': activeSection === 'about' }]">Về tôi</a>
      <a @click="closeMenuAndScroll('#projects')" :class="['block px-4 py-2 text-white hover:bg-gray-600 transition duration-300', { 'active-mobile-link': activeSection === 'projects' }]">Dự án</a>
      <a @click="closeMenuAndScroll('#contact')" :class="['block px-4 py-2 text-white hover:bg-gray-600 transition duration-300', { 'active-mobile-link': activeSection === 'contact' }]">Liên hệ</a>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'AppNavbar',
  setup() {
    const isMobileMenuOpen = ref(false);
    const activeSection = ref('home'); // Mặc định là 'home'

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

    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact']; // Đảm bảo đúng ID của các section
      let currentActive = 'hero'; // Mặc định nếu cuộn lên đầu

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          // Lấy vị trí của section so với đầu viewport
          const rect = section.getBoundingClientRect();
          // Kiểm tra nếu phần trên của section nằm trong khoảng nhìn thấy (thêm offset nhỏ để tính cho Navbar)
          // Hoặc nếu người dùng cuộn qua phần giữa của section
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      activeSection.value = currentActive;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Gọi lần đầu để thiết lập active section khi tải trang
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isMobileMenuOpen,
      activeSection, // Thêm activeSection vào return
      toggleMobileMenu,
      closeMenuAndScroll,
    };
  },
};
</script>

<style scoped>
.nav-link {
  @apply relative text-white text-lg hover:text-blue-300 transition duration-300 font-semibold py-2;
}
.nav-link::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300;
  content: '';
}
.nav-link:hover::after,
.nav-link.active-link::after {
  @apply w-full;
}
.nav-link.active-link {
  @apply text-blue-300;
}

.active-mobile-link {
  @apply bg-gray-600 text-blue-300;
}
</style>