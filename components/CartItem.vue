<template>
  <div class="cart-item">
    <div class="cart-item-container">
      <div class="cart-item-info flex">
        <div class="cart-item-image">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="cart-item main md:flex md:justify-between">
          <div class="cart-item-general">
            <h1 class="cart-item-title">
              {{ product.title }}
            </h1>
            <div class="cart-item-brand">
              {{ product.brand }}
            </div>
          </div>
        </div>

        <div class="cart-item-price">
          <h2>$ {{ product.price }}</h2>
        </div>
      </div>
    </div>
    
    <div class="cart-item-call-to-action">
      <div class="remove">
        <button type="button" @click="removeProductFromCart(product)">
          <span class="material-icons">remove</span>
        </button>
      </div>
      <div class="buttons ml-3">
        <button class="text-white bg-normal font-light py-2 px-3 rounded-full" @click="addToCart(product)">
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