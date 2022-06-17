<template>
  <main>
    <div v-if="isCartEmpty">
      Your cart is currently empty. <NuxtLink to="FeaturedProducts">Go add some products</NuxtLink>.
    </div>

    <div v-else>
      YEEEEEE
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store';
import { computed } from 'vue';

const store = useStore();

const cartItems = computed(() => store.getNumberOfCartItems);
const isCartEmpty = computed(() => cartItems.value === 0);

</script>