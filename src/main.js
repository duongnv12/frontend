import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './assets/main.css'; // Đảm bảo Tailwind CSS được import
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import CSS của AOS

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
// Solid Icons (thường dùng cho các tính năng, biểu tượng chung)
import { 
  faCode, // Giữ lại nếu bạn có nền tảng kỹ thuật
  faServer, // Giữ lại nếu bạn có nền tảng kỹ thuật
  faDatabase, // Giữ lại nếu bạn có nền tảng kỹ thuật (đặc biệt cho SQL Testing)
  faMobileAlt, // Giữ lại nếu bạn có nền tảng kỹ thuật
  faCloud, // Giữ lại nếu bạn có nền tảng kỹ thuật
  faEnvelope,
  faClipboardList, // Icon cho Phân tích Yêu cầu
  faFileAlt,       // Icon cho Viết Tài liệu
  faComments,      // Icon cho Giao tiếp
  faBug,           // Icon cho Kiểm thử/Quản lý lỗi
  faRobot,         // Icon cho Test Automation
  faUserTie,       // Icon thay thế cho BA nếu muốn
  faVial,          // Icon cho Kiểm thử nói chung
  faChartBar,      // Icon cho Phân tích dữ liệu/Báo cáo
  faArrowLeft,     // Đã có trong ProjectDetailView
  faGlobe,          // Đã có trong ProjectDetailView
  faBrain, // ICON MỚI CHO TƯ DUY PHẢN BIỆN
  faUsers // ICON MỚI CHO LÀM VIỆC NHÓM
} from '@fortawesome/free-solid-svg-icons';
// Brand Icons (thường dùng cho các logo mạng xã hội)
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Thêm tất cả các icon bạn muốn sử dụng vào thư viện
library.add(
  faCode, faServer, faDatabase, faMobileAlt, faCloud, faEnvelope,
  faClipboardList, faFileAlt, faComments, faBug, faRobot, faUserTie, faVial, faChartBar,
  faLinkedin, faGithub, faArrowLeft, faGlobe,   
  faBrain, faUsers, // THÊM CÁC ICON NÀY
  faLinkedin, faGithub, faArrowLeft, faGlobe
);

const app = createApp(App);

// Cấu hình Axios
app.config.globalProperties.$axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

app.use(router);

// Đăng ký component FontAwesomeIcon toàn cục
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount ứng dụng trước khi khởi tạo AOS
app.mount('#app');

// Khởi tạo AOS sau khi ứng dụng Vue được mount
AOS.init({
  duration: 800, // thời gian animation mặc định
  once: true, // chỉ chạy animation một lần khi cuộn xuống
  offset: 100, // offset (px) from the top of the screen
});