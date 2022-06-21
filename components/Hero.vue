<template>
  <section class="carousel-container relative max-w-full mx-auto mb-12 p-6">
    <div v-for="slide in slides" :key="slide" class="carousel">
      <div v-show="slide === activeSlide" class="lg:flex lg:items-center">
        <div class="lg:w-1/2">
          <div class="relative pb-[66%]">
            <img :src="image" class="h-full w-full object-cover absolute" /> 
          </div>
        </div>
        <div class="lg:w-1/2 mt-6 lg:mt-0 lg:px-6">
          <h1 class="text-normal text-3xl sm:text-6xl font-bold mb-8">{{ slide }} Suspendisse interdum rutrum nise.</h1>
          <p class="text-normal text-2xl">Ut tellus quam, venenatis non tempus vitae, volupat blandit libero eget elos</p>
        </div>
      </div>
    </div>

    <div class="dots text-center mt-6">
      <span 
        v-for="slide in slides" 
        :key="slide" 
        tabindex="0"
        class="dot bg-weak hover:bg-normal inline-block w-3 h-3 my-0 mx-2 rounded-full cursor-pointer"
        :class="{
          'bg-strong': activeSlide === slide
        }"
        @click="activeSlide = slide"
        @keypress.enter="activeSlide = slide"
        @keypress.space.prevent="activeSlide = slide"
      ></span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import photo1 from '@/assets/images/photo-1.jpg';
import photo2 from '@/assets/images/photo-2.jpg';
import photo3 from '@/assets/images/photo-3.jpg';

const activeSlide = ref(1);
const slides = ref([1, 2, 3]);

const image = computed(() => {
  switch(activeSlide.value) {
    case 1:
      return photo1;
    case 2:
      return photo2;
    case 3:
      return photo3;
  }
});
</script>