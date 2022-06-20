<template>
  <main class="max-w-screen-xl mx-auto">
    <Hero />
    <Banners />
    <Featuredproducts />
  </main>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    { name: 'keywords', content: 'product, e-commerce'},
    { name: 'description', content: 'Buy any product you want, affordable prices and great quality' },
  ],
})
</script>