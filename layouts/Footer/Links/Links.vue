<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
    <Logo />
    <Shop />
    <Info /> 
    <Newsletter />
    <Payment />
  </div> 
</template>

<script setup>
import Logo from './Logo/Logo.vue';
import Shop from './Shop/Shop.vue';
import Info from './Info/Info.vue';
import Newsletter from './Newsletter/Newsletter.vue';
import Payment from './Payment/Payment.vue';
</script>
