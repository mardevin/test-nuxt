<template>
  <section class="carousel-container relative max-w-full mx-auto mb-12 p-6">
    <div v-for="slide in slides" :key="slide" class="carousel">
      <div v-show="slide === activeSlide" class="bg-weak flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div class="picture hidden lg:flex lg:justify-center lg:items-center lg:min-w-[50%] min-h-[24rem]">
          <img :src="image" class="mx-auto w-full object-contain" /> 
        </div>
        <div class="description lg:text-right py-10 px-6">
          <h1 class="text-normal text-3xl sm:text-6xl font-bold mb-8">{{ slide }} Suspendisse interdum rutrum nise.</h1>
          <p class="text-normal text-2xl">Ut tellus quam, venenatis non tempus vitae, volupat blandit libero eget elos</p>
        </div>
      </div>
    </div>

    <div class="dots text-center mt-6">
      <span 
        v-for="slide in slides" 
        :key="slide" 
        class="dot bg-weak hover:bg-normal inline-block w-3 h-3 my-0 mx-2 rounded-full cursor-pointer"
        :class="{
          'bg-strong': activeSlide === slide
        }"
        @click="activeSlide = slide"
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
})
</script>