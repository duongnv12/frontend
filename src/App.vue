<template>
  <div id="app" class="font-sans text-gray-800 antialiased min-h-screen flex flex-col">
    <AppNavbar />

    <main class="flex-grow">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
/* CSS toàn cục (ví dụ: cho font, reset) */
/* Các Tailwind directives đã được import trong main.css */
</style>