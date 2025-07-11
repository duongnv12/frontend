// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
        title: 'Trang chủ - Portfolio của Dương' // <-- Thêm meta title
    }
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    props: true,
    meta: {
        title: 'Dự án' // Tiêu đề cơ bản, sẽ được cập nhật động sau
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

// Navigation Guard để cập nhật tiêu đề
router.beforeEach((to, from, next) => {
  // Đặt tiêu đề mặc định nếu không có meta title
  document.title = to.meta.title || 'Portfolio của [Tên của bạn]';

  next();
});

export default router;