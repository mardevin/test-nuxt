<template>
  <section class="suggested-products p-6">
    <h2 class="text-normal text-3xl font-bold text-left mb-6">You may also be interested in:</h2>

    <div class="featured-products-grid-container grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-4 gap-6 mb-6">
      <FeaturedProduct v-for="product in featuredProducts" :key="product.id" :product="product" />
    </div>

  </section>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const featuredProducts = computed(() => store.getProducts.slice(0, 4));
</script>
