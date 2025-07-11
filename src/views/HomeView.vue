<template>
  <section id="hero" class="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32 overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-20">
      <svg class="h-full w-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0 0h100v100H0z" />
        <path fill="#ffffff" d="M0 0c25 0 50 25 50 50S25 100 0 100z" opacity=".2" />
        <path fill="#ffffff" d="M100 0c-25 0-50 25-50 50S75 100 100 100z" opacity=".2" />
      </svg>
    </div>

    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
      <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <p class="text-lg md:text-xl mb-3">Chào, tôi là</p>
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          [Tên của bạn]
        </h1>
        <p class="text-2xl md:text-3xl font-light mb-8">
          <span class="block">Nhà phát triển Full-stack</span>
          <span class="block text-blue-200">Biến ý tưởng thành hiện thực</span>
        </p>
        <div class="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            class="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Xem Dự án
          </a>
          <a
            href="#contact"
            class="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Liên hệ
          </a>
        </div>
      </div>

      <div class="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="../assets/duong39.jpg"
          alt="Ảnh chân dung của [Tên của bạn]"
          class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg animate-fade-in-up"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
/* Bạn có thể thêm các keyframe cho animate-fade-in-up nếu muốn */
@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInFromBottom 1s ease-out forwards;
}
</style>