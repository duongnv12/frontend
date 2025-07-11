<template>
  <div class="home-view">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/ContactSection.vue';
import { onMounted } from 'vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    ContactSection,
  },
  setup() {
    onMounted(() => {
      // Tiêu đề đã được đặt bởi router guard, nhưng bạn có thể ghi đè nếu cần
      // document.title = 'Trang chủ - Portfolio của [Tên của bạn]';
    });
    return {};
  }
};
</script>

<style scoped>
/* Không cần CSS scoped nếu chỉ dùng Tailwind hoặc các class tiện ích */
</style>