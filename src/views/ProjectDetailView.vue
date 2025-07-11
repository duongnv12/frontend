<template>
  <div class="project-detail-view py-12 px-4 bg-gray-50 min-h-screen">
    <div v-if="loading" class="text-center text-xl text-gray-600">Đang tải chi tiết dự án...</div>
    <div v-else-if="error" class="text-center text-red-500 text-xl">
      Lỗi khi tải dự án: {{ error.message }}
      <p class="mt-4"><router-link to="/" class="text-blue-600 hover:underline">Quay lại trang chủ</router-link></p>
    </div>
    <div v-else-if="project" class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden" data-aos="zoom-in">
      <img :src="project.imageUrl || 'https://via.placeholder.com/800x600?text=Project+Detail'" :alt="project.title" class="w-full h-96 object-cover object-center" loading="lazy">
      <div class="p-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 border-b pb-4">{{ project.title }}</h1>
        
        <p class="text-xl font-semibold text-blue-700 mb-4" v-if="project.myRole">
          <font-awesome-icon :icon="['fas', 'user-tie']" class="mr-2" /> Vai trò của tôi: {{ project.myRole }}
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">{{ project.description }}</p>

        <div class="mb-8" v-if="project.myContributions && project.myContributions.length">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Các đóng góp chính:</h3>
          <ul class="list-disc list-inside text-gray-700 text-lg">
            <li v-for="contribution in project.myContributions" :key="contribution" class="mb-2">
              {{ contribution }}
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Công cụ & Công nghệ:</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tool in project.toolsUsed"
              :key="tool"
              class="bg-purple-100 text-purple-800 text-md font-medium px-3 py-1.5 rounded-full shadow-sm"
            >
              {{ tool }}
            </span>
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-blue-100 text-blue-800 text-md font-medium px-3 py-1.5 rounded-full shadow-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="flex justify-start gap-6 mt-8">
          <a
            v-if="project.liveDemoUrl"
            :href="project.liveDemoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            <font-awesome-icon :icon="['fas', 'globe']" class="w-5 h-5 mr-2" />
            Xem Live Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-300 transform hover:scale-105"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="w-5 h-5 mr-2" />
            Mã nguồn GitHub
          </a>
        </div>

        <div class="mt-10 pt-6 border-t border-gray-200 text-center">
            <router-link to="/" class="inline-flex items-center text-blue-600 hover:underline text-lg font-medium">
                <font-awesome-icon :icon="['fas', 'arrow-left']" class="w-5 h-5 mr-1" />
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
import { useRoute } from 'vue-router';
// Import icons cho ProjectDetailView
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faArrowLeft, faUserTie } from '@fortawesome/free-solid-svg-icons'; // Thêm faUserTie
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGlobe, faArrowLeft, faUserTie, faGithub); // Đảm bảo thêm faUserTie vào library

export default {
  name: 'ProjectDetailView',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const project = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const { proxy } = getCurrentInstance();
    const route = useRoute();

    const fetchProject = async (projectId) => {
      loading.value = true;
      error.value = null;
      try {
        const response = await proxy.$axios.get(`/projects/${projectId}`);
        project.value = response.data.data;
        // Cập nhật tiêu đề sau khi có dữ liệu dự án
        document.title = `Dự án: ${project.value.title} - Portfolio của [Tên của bạn]`;
      } catch (err) {
        error.value = err;
        console.error('Error fetching project details:', err);
        document.title = 'Lỗi tải dự án - Portfolio của [Tên của bạn]';
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProject(props.id);
    });

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
/* Không cần thay đổi */
</style>