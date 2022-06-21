<template>
  <div class="pictures mlg:w-1/2 mb-6">
    <div class="main-picture mb-6 relative pb-[50%]">
      <img :src="product.thumbnail" :alt="product.title" class="w-full h-full absolute object-cover" />
    </div>
    <div class="other-pictures grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="image in product.images" :key="image" class="picture relative pb-[80%]">
        <img :src="image" class="w-full h-full absolute object-cover" />
      </div>
    </div>
  </div> 
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const route = useRoute();

const productId = computed(() => route.params.productId);
const products = computed(() => store.getProducts);
const product = computed(() => products.value.find((product) => product.id === Number(productId.value)));
</script>