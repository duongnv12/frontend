<template>
  <section id="hero" class="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 md:py-32 flex items-center justify-center min-h-screen">
    <div class="container mx-auto px-4 text-center z-10">
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div class="md:w-1/2" data-aos="fade-right">
          <p class="text-lg md:text-xl mb-3 text-blue-200">Chào, tôi là</p>
          <h1 class="text-4xl md:text-6xl font-bold font-heading mb-4 leading-tight">
            Nguyễn Văn Dương
          </h1>
          <p class="text-lg md:text-2xl mb-8 font-light">
            Một sinh viên ngành Công nghệ thông tin với đam mê trở thành Chuyên gia Phân tích Nghiệp vụ & Đảm bảo Chất lượng, kiến tạo giải pháp và sản phẩm hoàn hảo.
          </p>
          <div class="flex justify-center md:justify-center gap-4">
            <a
              href="#projects"
              class="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            >
              Xem Dự án
            </a>
            <a
              href="#contact"
              class="border border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            >
              Liên hệ
            </a>
          </div>
        </div>

        <div class="md:w-1/3 mt-8 md:mt-0" data-aos="fade-left">
          <img
            src="@/assets/duong39.jpg"
            alt="Ảnh chân dung của Nguyễn Văn Dương"
            class="rounded-full border-4 border-yellow-400 shadow-2xl mx-auto w-48 h-48 md:w-64 md:h-64 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="absolute inset-0 opacity-20 z-0">
      <div class="w-full h-full bg-pattern-dots"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>