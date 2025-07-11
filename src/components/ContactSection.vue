<template>
  <section id="contact" class="py-16 md:py-24 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold font-heading text-center mb-12" data-aos="fade-up">
        Liên hệ tôi
      </h2>

      <div class="flex flex-col md:flex-row items-center justify-center gap-12">
        <div class="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl" data-aos="fade-right">
          <h3 class="text-2xl font-bold mb-6">Gửi tin nhắn cho tôi</h3>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-300 text-sm font-bold mb-2">Tên của bạn</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Email của bạn</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                required
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block text-gray-300 text-sm font-bold mb-2">Tin nhắn</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                required
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
                :disabled="loading"
              >
                <span v-if="loading">Đang gửi...</span>
                <span v-else>Gửi tin nhắn</span>
              </button>
            </div>
            <p v-if="successMessage" class="text-green-400 mt-4 text-center">{{ successMessage }}</p>
            <p v-if="errorMessage" class="text-red-400 mt-4 text-center">{{ errorMessage }}</p>
          </form>
        </div>

        <div class="w-full md:w-1/3 text-center md:text-left" data-aos="fade-left">
          <h3 class="text-2xl font-bold mb-6">Kết nối với tôi</h3>
          <p class="mb-6 text-gray-300">
            Bạn cũng có thể tìm thấy tôi trên các nền tảng sau:
          </p>
          <div class="flex justify-center md:justify-start space-x-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-400 hover:text-blue-300 transition duration-300 transform hover:scale-110"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-gray-300 transition duration-300 transform hover:scale-110"
            >
              <font-awesome-icon :icon="['fab', 'github']" class="text-4xl" />
            </a>
            <a
              href="mailto:your_email@example.com"
              class="text-red-400 hover:text-red-300 transition duration-300 transform hover:scale-110"
            >
              <font-awesome-icon :icon="['fas', 'envelope']" class="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, getCurrentInstance } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faGithub, faEnvelope);

export default {
  name: 'ContactSection',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: '',
    });
    const loading = ref(false);
    const successMessage = ref('');
    const errorMessage = ref('');
    const { proxy } = getCurrentInstance();

    const submitForm = async () => {
      loading.value = true;
      successMessage.value = '';
      errorMessage.value = '';

      try {
        const response = await proxy.$axios.post('/contact', formData.value);
        successMessage.value = response.data.message;
        formData.value = { name: '', email: '', message: '' }; // Reset form
      } catch (error) {
        errorMessage.value = error.response?.data?.message || 'Không thể gửi tin nhắn. Vui lòng thử lại.';
      } finally {
        loading.value = false;
      }
    };

    return {
      formData,
      loading,
      successMessage,
      errorMessage,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* Không cần CSS scoped nếu chỉ dùng Tailwind hoặc các class tiện ích */
</style>