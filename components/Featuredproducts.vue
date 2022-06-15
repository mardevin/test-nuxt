<template>
  <section class="featured-products mb-6 p-6">
    <h1 class="text-normal text-3xl font-bold pb-9">Featured Products</h1>

    <div class="featured-products-grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      <FeaturedProduct v-for="product in featuredProducts" :key="product.id" :product="product" />
    </div>

    <div class="view-all text-center">
      <!-- <NuxtLink :to="featuredProductsRoute" class="text-normal text-xl font-bold"> -->
      <NuxtLink to="/FeaturedProducts" class="text-normal text-xl font-bold">
          <span class="material-icons">arrow_right_alt</span>
        <br />
        <span>View All</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const featuredProductsRoute = computed(() => ({
  name: 'FeaturedProducts',
}))

const featuredProducts = computed(() => store.getProducts.slice(0, 4));
</script>