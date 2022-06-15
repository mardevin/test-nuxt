<template>
  <div class="text-left">
    <h3 class="text-strong font-bold mb-3">SHOP</h3>

    <ul>
      <li v-for="listItem in list" :key="listItem" class="text-normal">
        <a href="#">
          {{ listItem }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(['CUPS', 'SPOONS', 'LIDS', 'ACCESSORIES', 'MARKETING']);
</script>