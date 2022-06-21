<template>
  <section class="banners grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-3 gap-6 mb-16 p-6">
    <div 
      v-for="banner in banners"
      :key="banner" 
      class="banner text-normal bg-weak text-4xl font-bold italic h-36 flex justify-center items-center rounded-lg"
    >Banner {{ banner }}</div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const banners = ref(['One', 'Two', 'Three']);
</script>