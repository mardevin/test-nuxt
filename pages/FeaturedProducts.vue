<template>
  <Category />
  
  <section class="flex flex-col lg:flex-row md:justify-between mb-9 p-6">
    <aside class="lg:w-60 lg:mr-3 mb-3">
      <h3 class="text-normal bg-weak text-left py-1 px-2">FILTER NAME</h3>
      <ul>
        <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
        <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
        <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
        <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
      </ul>
    </aside>

    <div class="featured-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-3">
      <FeaturedProduct v-for="product in featuredProducts" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const featuredProducts = computed(() => store.getProducts.slice(0, 9));
</script>