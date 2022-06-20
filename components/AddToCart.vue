<template>
  <div class="add-to-cart text-normal font-bold md:ml-3">
    <div class="price flex justify-between mb-2">
      <span>Price:</span>
      <span>$ {{ product.price }}</span>
    </div>

    <div class="quantity flex justify-between mb-2">
      <span>Quantity:</span>
      <span class="number-of-items text-2xl">{{ numberOfItems(product) }}</span>
    </div>

    <div class="quantity text-right flex justify-end items-center">
      <div class="buttons ml-3">
        <button class="text-white bg-normal font-light mb-3 p-3 rounded-full" @click="addToCart(product)">
          <AddIcon />
        </button>
        <button class="text-normal font-light ml-3 p-3 rounded-full border border-3 border-normal" @click="removeFromCart(product)">
          <RemoveIcon />
        </button>
      </div>
    </div>

    <span class="font-medium text-left block">Share this</span>
  </div> 
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';
import AddIcon from '~/assets/icons/add.svg';
import RemoveIcon from '~/assets/icons/remove.svg';

const store = useStore();
const route = useRoute();

const productId = computed(() => route.params.productId);
const products = computed(() => store.getProducts);
const product = computed(() => products.value.find((product) => product.id === Number(productId.value)));

const numberOfItems = computed(() => store.getNumberOfCartItemsForAnItem);

const addToCart = (product) => store.addToCart(product);
const removeFromCart = (product) => store.removeFromCart(product);
</script>