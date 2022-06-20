<template>
  <div class="cart-item bg-gray-100 mb-6 p-6 rounded-lg">
    <div class="cart-item-container mb-3">
      <div class="cart-item-info flex">
        <div class="cart-item-image w-16 h-16 mr-3">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-full" />
        </div>
        <div class="cart-item main md:flex md:justify-between w-full">
          <div class="cart-item-general">
            <h1 class="cart-item-title mb-1">
              {{ product.title }}
            </h1>
            <div class="cart-item-brand text-sm">
              <span class="text-gray-400">Brand: </span> {{ product.brand }}
            </div>
          </div>

          <div class="cart-item-price text-xl font-bold">
            <h2>$ {{ product.price }}</h2>
          </div>
        </div>
      </div>
    </div>
    
    <div class="cart-item-call-to-action flex justify-between items-center">
      <div class="remove">
        <button type="button" class="text-red-400" @click="removeProductFromCart(product)">
          <span class="material-icons text-3xl">delete</span>
        </button>
      </div>
      <div class="buttons ml-3">
        <span class="number-of-items text-3xl">{{ numberOfItems }}</span>
        <button class="text-white bg-normal font-light ml-3 py-2 px-3 rounded-full" @click="addToCart(product)">
          <span class="material-icons">add</span>
        </button>
        <button class="text-normal font-light ml-3 py-2 px-3 rounded-full border border-3 border-normal" @click="removeFromCart(product)">
          <span class="material-icons">remove</span>
        </button>
      </div>
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

const holder = store.getNumberOfCartItemsForAnItem;
const numberOfItems = computed(() => holder(props.product));
const isItemInCart = computed(() => numberOfItems.value > 0);

const addToCart = (product) => store.addToCart(product);
const removeFromCart = (product) => store.removeFromCart(product);
const removeProductFromCart = (product) => store.removeProductFromCart(product);
</script>