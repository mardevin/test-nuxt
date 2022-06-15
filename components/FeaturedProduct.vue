<template>
  <div class="featured-product p-3 border-2 border-normal rounded-lg">
    <div class="featured-product__picture overflow-hidden w-full h-64">
      <img :src="product.image" :alt="product.title" />
    </div>

    <div class="featured-product__info flex justify-between py-3">
      <!-- <NuxtLink :to="featuredProductRoute" class="featured-product__info_name text-normal text-left w-3/5">{{ product.title.slice(0, 18) }}...</NuxtLink> -->
      <div class="featured-product__info_price text-normal font-bold">$ {{ product.price }}</div>
    </div>

    <div class="featured-product__call_to_action">
      <button class="text-white bg-normal font-light py-2 px-6" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const props = defineProps({
  product: Object,
});

const featuredProductRoute = computed(() => ({
  name: 'featured-product',
  params: {
    productId: props.product.id,
  }   
}))

const addToCart = () => store.addToCart();
</script>