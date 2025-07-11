// frontend/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Đảm bảo dòng này đúng đường dẫn
import axios from 'axios'
import './assets/main.css' // Import CSS của Tailwind (nếu đã cấu hình)

const app = createApp(App)

app.config.globalProperties.$axios = axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
app.use(router) // <-- Đảm bảo dòng này tồn tại và không bị comment

app.mount('#app')