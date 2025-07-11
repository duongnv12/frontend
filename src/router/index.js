import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
        title: 'Trang chủ - Portfolio của Dương'
    }
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    props: true,
    meta: {
        title: 'Chi tiết dự án' // Đây là tiêu đề mặc định, sẽ được cập nhật động trong component
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

// Navigation Guard để cập nhật tiêu đề trang
router.beforeEach((to, from, next) => {
  // Đặt tiêu đề mặc định từ meta nếu có, hoặc tiêu đề chung
  document.title = to.meta.title || 'Portfolio của Dương';

  next();
});

export default router;