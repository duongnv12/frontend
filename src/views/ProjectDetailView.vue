<script>
import { ref, onMounted, watch, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ProjectDetailView',
  props: { id: { type: String, required: true } },
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
        document.title = `Dự án: ${project.value.title} - Portfolio của Dương`; // <-- Cập nhật tiêu đề tại đây
      } catch (err) {
        error.value = err;
        console.error('Error fetching project details:', err);
        document.title = 'Lỗi tải dự án - Portfolio của Dương'; // Tiêu đề lỗi
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

    return { project, loading, error };
  },
};
</script>