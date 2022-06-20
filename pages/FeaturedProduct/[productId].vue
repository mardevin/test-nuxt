<template>
  <main class="max-w-screen-xl mx-auto">
    <ProductInfo />
    <hr class="mb-12" />
    <SuggestedProducts />
  </main>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const route = useRoute();

const productId = computed(() => route.params.productId);
const products = computed(() => store.getProducts);
const product = computed(() => products.value.find((product) => product.id === Number(productId.value)));

useHead({
  title: product.value.title,
  meta: [
    { name: 'keywords', content: 'product, e-commerce'},
    { name: 'description', content: product.value.description},
  ],
})
</script>