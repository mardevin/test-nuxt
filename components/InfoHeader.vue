<template>
  <div class="head">
    <h1 class="text-normal text-5xl font-bold">{{ product.title }}</h1>
    <h3 class="text-normal">Lorem ipsum dolor sit subtitle</h3>
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