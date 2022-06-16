<template>
  <div class="featured-product p-3 border-2 border-normal rounded-lg">
    <div class="featured-product__picture overflow-hidden w-full h-64">
      <NuxtLink :to="`/FeaturedProduct/${product.id}`">
        <img :src="product.image" :alt="product.title" class="cursor-pointer w-full h-full" />
      </NuxtLink>
    </div>

    <div class="featured-product__info flex justify-between py-3">
      <NuxtLink :to="`/FeaturedProduct/${product.id}`" class="featured-product__info_name text-normal text-left w-3/5 cursor-pointer">{{ product.title.slice(0, 18) }}...</NuxtLink>
      <div class="featured-product__info_price text-normal font-bold">$ {{ product.price }}</div>
    </div>

    <div class="featured-product__call_to_action text-right flex justify-end items-center">
      <span class="number-of-items text-2xl">{{ numberOfItems(product) }}</span>
      <button class="text-white bg-normal font-light py-2 px-6 ml-3" @click="addToCart(product)">Add to Cart</button>
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

const numberOfItems = computed(() => store.getNumberOfCartItemsForAnItem);

const addToCart = (product) => store.addToCart(product);
const removeFromCart = (product) => store.removeFromCart(product);
</script>