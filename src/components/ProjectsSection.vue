<template>
  <section id="projects" class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-10 text-gray-800">Dự án của tôi</h2>
      <div v-if="loading" class="text-center text-lg text-gray-600">Đang tải dự án...</div>
      <div v-else-if="error" class="text-center text-red-500 text-lg">
        Lỗi khi tải dự án: {{ error.message }}
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link 
          v-for="project in projects"
          :key="project._id"
          :to="{ name: 'project-detail', params: { id: project._id } }"
          class="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-gray-900">{{ project.title }}</h3>
            <p class="text-gray-700 text-base mb-4 line-clamp-3">{{ project.description }}</p> <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                @click.stop
                class="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                Xem Live <span class="ml-1 text-lg">🚀</span>
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                @click.stop
                class="text-gray-600 hover:text-gray-800 font-semibold flex items-center"
              >
                GitHub <span class="ml-1 text-lg">🔗</span>
              </a>
            </div>
          </div>
        </router-link>
        <div v-if="!projects.length && !loading && !error" class="md:col-span-3 text-center text-gray-600">
            Chưa có dự án nào được thêm. Vui lòng thêm dự án từ Backend!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Giữ nguyên phần script
import { ref, onMounted, getCurrentInstance } from 'vue';

export default {
  name: 'ProjectsSection',
  setup() {
    const projects = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const { proxy } = getCurrentInstance();

    onMounted(async () => {
      try {
        const response = await proxy.$axios.get('/projects');
        projects.value = response.data.data;
      } catch (err) {
        error.value = err;
        console.error('Error fetching projects:', err);
      } finally {
        loading.value = false;
      }
    });

    return {
      projects,
      loading,
      error
    };
  }
};
</script>

<style scoped>
/* Bạn có thể thêm CSS tùy chỉnh ở đây nếu không dùng Tailwind CSS */
.container {
    max-width: 1200px;
}
</style>