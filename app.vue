<template>
  <Navbar />
  
  <NuxtPage />

  <footer>footer</footer>
</template>

<script setup>
  useHead({
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
  })
</script>