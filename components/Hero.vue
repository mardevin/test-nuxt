<template>
  <section id="slide" ref="carousel" class="carousel-container splide relative max-w-full mx-auto mb-12 p-6">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide lg:flex lg:items-center w-full" v-for="i in 3" :key="i">
          <div class="lg:w-1/2">
            <div class="relative pb-[66%]">
              <img :src="getImage(i)" class="absolute h-full w-full object-cover rounded-lg" /> 
            </div>
          </div>

          <div class="lg:w-1/2 mt-6 lg:mt-0 lg:px-6">
            <h1 class="text-normal text-3xl sm:text-6xl font-bold mb-8">{{ i }} Suspendisse interdum rutrum nise.</h1>
            <p class="text-normal text-2xl">Ut tellus quam, venenatis non tempus vitae, volupat blandit libero eget elos</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div v-for="slide in slides" :key="slide" class="carousel">
      <div v-show="slide === activeSlide" class="lg:flex lg:items-center">
        <div class="lg:w-1/2">
          <div class="relative pb-[66%]">
            <img :src="image" class="absolute h-full w-full object-cover rounded-lg" /> 
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
    </div> -->
  </section>
</template>

<!-- <script lang="ts">
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default {
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    this.slide = new Splide('#slide', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      arrows: false,
    })

    this.slide.mount();
  }
}
</script> -->

<script lang="ts" setup>
import { ref, computed, Ref } from 'vue';
import photo1 from '@/assets/images/photo-1.jpg';
import photo2 from '@/assets/images/photo-2.jpg';
import photo3 from '@/assets/images/photo-3.jpg' 
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const carousel = ref(null);
let splide;

onMounted(() => {
  splide = ref(new Splide('#slide', {
    perPage: 1,
    arrows: false,
    classes: {
      page: 'splide__pagination__page bg-strong',
    }
  }));

  splide.value.mount();
})

onUnmounted(() => splide.value.destroy());

function getImage(slide: number) {
  switch(slide) {
    case 1:
      return photo1;
    case 2:
      return photo2;
    case 3:
      return photo3;
  }
}
</script>