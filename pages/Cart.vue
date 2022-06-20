<template>
  <main class="max-w-screen-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Welcome to your cart</h1>
    <div v-if="isCartEmpty" class="text-md md:text-4xl flex justify-center items-center h-30 md:h-60 my-16">
      Your cart is currently empty. &nbsp; <NuxtLink to="FeaturedProducts" class="text-blue-600">Go add some products</NuxtLink>.
    </div>

    <div v-else class="flex items-start">
      <!-- <div class="grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-4 gap-6 mb-6">
        <FeaturedProduct v-for="cartItem in cart" :key="cartItem.product.id" :product="cartItem.product" />
      </div> -->
      <div class="cart-items grow-[4] mr-3">
        <CartItem v-for="cartItem in cart" :key="cartItem.product.id" :product="cartItem.product" />
      </div>

      <div class="cart-summary bg-gray-100 grow-[1] ml-3 p-6 rounded-xl">
        <h1>CART SUMMARY</h1>
        <hr class="bg-strong my-2" />
        <div class="subtotal flex justify-between mb-3">
          <span class="text-sm">Subtotal</span>
          <span class="font-lg font-bold">$ {{ subtotal }}</span>
        </div>
      
        <div class="checkout">
          <button type="button" class="text-white bg-normal w-full p-3 rounded-md shadow-lg">CHECKOUT ($ {{ subtotal }})</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const cart = computed(() => store.getCart);
const cartItems = computed(() => store.getNumberOfCartItems);
const isCartEmpty = computed(() => cartItems.value === 0);

const subtotal = computed(() => store.getTotalPriceForCartItems);
</script>