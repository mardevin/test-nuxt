<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<script setup>
import { useStore } from '~/stores/store';
import Navbar from '~/layouts/Navbar/Navbar.vue';
import Footer from '~/layouts/Footer/Footer.vue';


const store = useStore();

const { data } = await useFetch('https://dummyjson.com/products');
store.setProducts(data.value.products);

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ],
})
</script>