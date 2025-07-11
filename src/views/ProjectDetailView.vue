<template>
  <div class="project-detail-view py-12 px-4 bg-gray-50 min-h-screen">
    <div v-if="loading" class="text-center text-xl text-gray-600">Đang tải chi tiết dự án...</div>
    <div v-else-if="error" class="text-center text-red-500 text-xl">
      Lỗi khi tải dự án: {{ error.message }}
      <p class="mt-4"><router-link to="/" class="text-blue-600 hover:underline">Quay lại trang chủ</router-link></p>
    </div>
    <div v-else-if="project" class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-down">
      <img :src="project.imageUrl" :alt="project.title" class="w-full h-96 object-cover object-center">
      <div class="p-8">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-6 border-b pb-4">{{ project.title }}</h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">{{ project.description }}</p>

        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Công nghệ sử dụng:</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-green-100 text-green-800 text-md font-medium px-3 py-1.5 rounded-full shadow-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="flex justify-start gap-6 mt-8">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.304-1.144a1 1 0 01.765-.079l1.636.818a1 1 0 001.107-.271l2.002-3.003c.526-.789.288-1.896-.54-2.32L15 7.159V4.636A2 2 0 0013.382 3.5H9.618A2 2 0 008 4.636V7.16l-1.347.674c-.828.423-1.066 1.531-.54 2.32l2.002 3.003a1 1 0 001.107.271l1.636-.818a1 1 0 01.765.079l4.304 1.144a1 1 0 001.169-1.409l-7-14z"></path></svg>
            Xem Live Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.163 6.848 9.48.5.092.682-.217.682-.483 0-.237-.008-.865-.013-1.702-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.107-1.464-1.107-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.826.092-.644.35-1.087.636-1.336-2.22-.253-4.555-1.113-4.555-4.949 0-1.091.39-1.984 1.029-2.681-.103-.253-.447-1.274.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.634-.333 2.479-.336.845.003 1.681.114 2.479.336 1.909-1.295 2.747-1.025 2.747-1.025.546 1.376.202 2.398.099 2.651.64.697 1.028 1.59 1.028 2.681 0 3.844-2.339 4.694-4.566 4.943.359.309.678.92.678 1.855 0 1.335-.012 2.417-.012 2.747 0 .268.18.579.688.482C17.135 18.17 20 14.423 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg>
            Mã nguồn GitHub
          </a>
        </div>

        <div class="mt-10 pt-6 border-t border-gray-200 text-center">
            <router-link to="/" class="inline-flex items-center text-blue-600 hover:underline text-lg font-medium">
                <svg class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Quay lại các dự án
            </router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-600 text-xl">Không tìm thấy dự án này.</div>
  </div>
</template>

<script>
import { ref, onMounted, watch, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute hook

export default {
  name: 'ProjectDetailView',
  props: {
    id: { // Nhận ID dự án từ route params
      type: String,
      required: true
    }
  },
  setup(props) {
    const project = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const { proxy } = getCurrentInstance();
    const route = useRoute(); // Sử dụng useRoute để truy cập route object

    const fetchProject = async (projectId) => {
      loading.value = true;
      error.value = null;
      try {
        const response = await proxy.$axios.get(`/projects/${projectId}`);
        project.value = response.data.data;
      } catch (err) {
        error.value = err;
        console.error('Error fetching project details:', err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProject(props.id);
    });

    // Theo dõi sự thay đổi của route params (nếu bạn có thể chuyển từ dự án này sang dự án khác trên cùng trang)
    watch(() => route.params.id, (newId) => {
      if (newId) {
        fetchProject(newId);
      }
    });

    return {
      project,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out forwards;
}
</style>