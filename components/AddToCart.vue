<template>
  <div class="add-to-cart text-normal font-bold md:ml-3">
    <div class="price flex justify-between mb-2">
      <span>Price:</span>
      <span>$ {{ product.price }}</span>
    </div>

    <div class="quantity flex justify-between mb-2">
      <span>Quantity:</span>
      <input type="number" name="quantity" id="quantity" v-model="quantity" class="border-2 w-1/2" />
    </div>

    <div class="color flex justify-between mb-4">
      <span>Color:</span>
      <select name="color" id="color" class="border-2">
        <option v-for="option in colorOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>

    <button class="text-white bg-normal text-2xl font-bold block mb-2 py-2 px-3 rounded-lg" @click="addToCart">Add to Cart</button>

    <span class="font-medium text-left block">Share this</span>
  </div> 
</template>

<script setup>
import { useStore } from '~/stores/store';
import { ref, computed } from 'vue';

const store = useStore();
const route = useRoute();

const productId = computed(() => route.params.productId);
const products = computed(() => store.getProducts);
const product = computed(() => products.value.find((product) => product.id === Number(productId.value)));

const quantity = ref(0);
const colorOptions = ref(['Black', 'Orange', 'Green', 'Red', 'Blue']);

function addToCart() {
  store.addToCart();
}
</script>