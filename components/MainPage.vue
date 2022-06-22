<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<script setup>
import { useStore } from '~/stores/store';
import Navbar from '~/layouts/Navbar/Navbar.vue';
import Footer from '~/layouts/Footer/Footer.vue';

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ],
})

const store = useStore();

onMounted(async () => {
  try {
    await store.fetchProducts();
  } catch (error) {
    console.log(error);
  }
})
</script>