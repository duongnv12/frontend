<template>
  <section id="projects" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-gray-800" data-aos="fade-up">
        Dự án của tôi
      </h2>

      <div v-if="loading" class="text-center text-gray-600 text-lg">Đang tải dự án...</div>
      <div v-else-if="error" class="text-center text-red-600 text-lg">
        Đã xảy ra lỗi khi tải dự án: {{ error.message }}
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="project in projects"
          :key="project._id"
          :to="{ name: 'project-detail', params: { id: project._id } }"
          class="block bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          :data-aos-delay="project.aosDelay"
        >
          <img
            :src="project.imageUrl || 'https://via.placeholder.com/400x250?text=Project+Image'"
            :alt="project.title"
            class="w-full h-48 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex justify-between items-center mt-4">
              <span
                class="text-blue-600 hover:text-blue-800 font-semibold transition duration-300 flex items-center"
              >
                Xem chi tiết
              </span>
              <div class="flex space-x-3">
                <a
                  v-if="project.liveDemoUrl"
                  :href="project.liveDemoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="bg-green-500 text-white text-sm px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="bg-gray-800 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300"
                >
                  GitHub
                </a>
              </div>
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
import { ref, onMounted, getCurrentInstance } from 'vue';

export default {
  name: 'ProjectsSection',
  setup() {
    const projects = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const { proxy } = getCurrentInstance();

    const fetchProjects = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await proxy.$axios.get('/projects');
        projects.value = response.data.data.map((p, index) => ({
          ...p,
          aosDelay: index * 100 // Mỗi thẻ chậm hơn 100ms
        }));
      } catch (err) {
        error.value = err;
        console.error('Error fetching projects:', err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchProjects);

    return {
      projects,
      loading,
      error
    };
  }
};
</script>

<style scoped>
/* Không cần CSS scoped nếu chỉ dùng Tailwind hoặc các class tiện ích */
</style>