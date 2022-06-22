<template>
  <section class="banners p-6">
    <div class="banners-container grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-3 gap-6 mb-6">
      <div 
        v-for="banner in bannersToShow"
        :key="banner" 
        tabindex="0"
        class="banner text-normal bg-weak text-4xl font-bold italic h-36 flex justify-center items-center rounded-lg cursor-pointer"
        @click="goToFeaturedProductsPage(banner)"
        @keypress.enter="goToFeaturedProductsPage(banner)"
      >
        {{ banner }}
      </div>
    </div>

    <div class="dots text-center mt-6">
      <span 
        v-for="page in pages"
        :key="page" 
        tabindex="0"
        class="page bg-weak hover:bg-normal inline-block w-3 h-3 my-0 mx-2 rounded-full cursor-pointer"
        :class="{
          'bg-strong': activePage === page
        }"
        @click="activePage = page"
        @keypress.enter="activePage = page"
        @keypress.space.prevent="activePage = page"
      ></span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Category } from '~~/stores/types/types';

const router = useRouter();

const banners = ref([]);
const activePage = ref(1);
const bannersPerPage = 3;

const { data } = await useFetch('https://dummyjson.com/products/categories');
banners.value = data.value as Category[];

const pages = computed(() => Math.ceil(banners.value.length / 3));
const bannersToShow = computed(() => banners.value.slice(activePage.value * bannersPerPage - bannersPerPage, activePage.value * bannersPerPage));

function goToFeaturedProductsPage(category: Category) {
  router.push(`/FeaturedProducts?category=${category}`)
}
</script>