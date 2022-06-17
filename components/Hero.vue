<template>

  <!-- Carousel work-in-progress -->
  <section class="carousel-container relative max-w-full mx-auto mb-12 p-6">
    <div class="carousel bg-weak flex flex-col md:flex-row md:justify-between">
      <div class="picture hidden md:block md:w-1/2"></div>
      <div class="description md:text-right py-10 px-6">
        <h1 class="text-normal text-3xl sm:text-6xl font-bold mb-8">Suspendisse interdum rutrum nise.</h1>
        <p class="text-normal text-2xl">Ut tellus quam, venenatis non tempus vitae, volupat blandit libero eget elos</p>
      </div>
    </div>
    <div class="carousel hidden bg-weak flex flex-col md:flex-row md:justify-between">
      <div class="picture md:w-1/2 bg-green-300 p-3"></div>
      <div class="description md:text-right p-3">
        <h1 class="text-normal text-2xl font-bold">Suspendisse interdum rutrum nise.</h1>
        <p class="text-normal">Ut tellus quam, venenatis non tempus vitae, volupat blandit libero eget elos</p>
      </div>
    </div>
    <div class="carousel hidden bg-weak flex flex-col md:flex-row md:justify-between">
      <div class="picture md:w-1/2 bg-green-300 p-3"></div>
      <div class="description md:text-right p-3">
        <h1 class="text-normal text-2xl font-bold">Suspendisse interdum rutrum nise.</h1>
        <p class="text-normal">Ut tellus quam, venenatis non tempus vitae, volupat blandit libero eget elos</p>
      </div>
    </div>

    <div class="dots text-center">
      <span class="dot bg-gray-400 inline-block w-2 h-2 my-0 mx-2 rounded-full cursor-pointer"></span>
      <span class="dot bg-gray-400 inline-block w-2 h-2 my-0 mx-2 rounded-full cursor-pointer"></span>
      <span class="dot bg-gray-400 inline-block w-2 h-2 my-0 mx-2 rounded-full cursor-pointer"></span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeSlide = ref(0);
</script>