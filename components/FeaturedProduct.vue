<template>
  <div class="featured-product p-3 border-2 border-normal rounded-lg">
    <div class="featured-product__picture overflow-hidden w-full h-64">
      <img :src="product.image" :alt="product.title" />
    </div>

    <div class="featured-product__info flex justify-between py-3">
      <NuxtLink :to="`/FeaturedProduct/${product.id}`" class="featured-product__info_name text-normal text-left w-3/5">{{ product.title.slice(0, 18) }}...</NuxtLink>
      <div class="featured-product__info_price text-normal font-bold">$ {{ product.price }}</div>
    </div>

    <div class="featured-product__call_to_action text-right">
      <button class="text-white bg-normal font-light mb py-2 px-3 rounded-full" @click="addToCart(product)">
        <span class="material-icons">add</span>
      </button>
      <button class="text-normal font-light ml-3 py-2 px-3 rounded-full border border-3 border-normal" @click="removeFromCart(product)">
        <span class="material-icons">remove</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/stores/store';

const store = useStore();

const props = defineProps({
  product: Object,
});

const addToCart = (product) => store.addToCart(product);
const removeFromCart = (product) => store.removeFromCart(product);
</script>