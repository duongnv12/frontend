<template>
  <section id="about" class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-10 text-gray-800">Về tôi</h2>
      <div class="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center">
        <p class="mb-6">
          Xin chào! Tôi là một nhà phát triển phần mềm full-stack đam mê tạo ra các giải pháp web hiệu quả và thân thiện với người dùng. Với nền tảng vững chắc về Front-end và Back-end, tôi luôn cố gắng biến những ý tưởng phức tạp thành các ứng dụng hoạt động mượt mà.
        </p>
        <p class="mb-6">
          Trong vai trò Front-end, tôi chuyên về <strong class="text-blue-600">Vue.js</strong>, xây dựng các giao diện người dùng tương tác và đẹp mắt. Về phía Back-end, tôi làm việc với <strong class="text-green-600">Node.js (Express.js)</strong> để phát triển các API mạnh mẽ và xử lý logic nghiệp vụ. Tôi cũng có kinh nghiệm với cơ sở dữ liệu <strong class="text-gray-600">MongoDB</strong>.
        </p>
        <p>
          Tôi luôn tìm kiếm những thử thách mới và cơ hội để học hỏi, phát triển kỹ năng của mình. Hãy cùng khám phá các dự án của tôi để hiểu rõ hơn về những gì tôi có thể mang lại!
        </p>
      </div>

      <div class="mt-12 text-center">
        <h3 class="text-3xl font-bold mb-6 text-gray-800">Kỹ năng của tôi</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="skill-tag">HTML5</span>
          <span class="skill-tag">CSS3</span>
          <span class="skill-tag">JavaScript (ES6+)</span>
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">Vue Router</span>
          <span class="skill-tag">Tailwind CSS</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Express.js</span>
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">RESTful APIs</span>
          <span class="skill-tag">Git & GitHub</span>
          <span class="skill-tag">Deployment (Render/Netlify)</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.skill-tag {
  @apply bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-md font-semibold transition duration-300 hover:bg-indigo-200;
}
</style>