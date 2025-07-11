<template>
  <div id="app" class="font-sans text-gray-800 antialiased min-h-screen flex flex-col">
    <AppNavbar /> <main class="flex-grow">
      <router-view />
    </main>

    <AppFooter /> </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'; // Cập nhật đường dẫn import
import AppFooter from './components/AppFooter.vue'; // Cập nhật đường dẫn import

export default {
  name: 'App',
  components: {
    AppNavbar, // Cập nhật tên component
    AppFooter, // Cập nhật tên component
  },
};
</script>