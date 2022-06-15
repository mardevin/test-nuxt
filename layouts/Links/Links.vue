<template>
  <div class="links text-strong font-bold bg-weak text-center">
    {{ cartItems }} items
  </div>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const cartItems = computed(() => store.getNumberOfCartItems);
</script>