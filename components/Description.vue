<template>
  <div class="description text-normal text-left  mb-6 md:mr-3">
    <p class="mb-3">{{ product.description }}</p>
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