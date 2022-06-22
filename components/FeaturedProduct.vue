<template>
  <div class="featured-product p-3 border-2 border-normal rounded-lg">
    <div class="featured-product__picture relative pb-[67%]">
      <NuxtLink :to="`/FeaturedProduct/${product.id}`">
        <img :src="product.thumbnail" :alt="product.title" class="absolute w-full h-full object-cover cursor-pointer rounded-lg" />
      </NuxtLink>
    </div>

    <div class="featured-product__info flex justify-between py-3">
      <NuxtLink :to="`/FeaturedProduct/${product.id}`" class="featured-product__info_name text-normal text-left w-3/5 cursor-pointer">{{ productTitle }}</NuxtLink>
      <div class="featured-product__info_price text-normal font-bold">$ {{ product.price }}</div>
    </div>

    <div class="featured-product__call_to_action text-right flex justify-end items-center">
      <button v-if="!isItemInCart" class="text-white bg-normal hover:bg-strong font-light p-3 w-full rounded-lg" @click="addToCart(product)">Add to Cart</button>
      <div v-else class="buttons">
        <span class="number-of-items text-2xl">{{ numberOfItems }}</span>

        <button class="text-white bg-normal font-light ml-3 p-2 rounded-full" @click="addToCart(product)">
          <AddIcon />
        </button>
        <button class="text-normal font-light ml-3 p-2 rounded-full border border-3 border-normal" @click="removeFromCart(product)">
          <RemoveIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';
import AddIcon from '~/assets/icons/add.svg';
import RemoveIcon from '~/assets/icons/remove.svg';

const store = useStore();

const props = defineProps({
  product: Object,
});

const title = computed(() => props.product.title)

const productTitle = computed(() => title.value.length > 16 ? title.value.slice(0, 17) + '...' : title.value );

const holder = store.getNumberOfCartItemsForAnItem;
const numberOfItems = computed(() => holder(props.product));
const isItemInCart = computed(() => numberOfItems.value > 0);

const addToCart = (product) => store.addToCart(product);
const removeFromCart = (product) => store.removeFromCart(product);
</script>