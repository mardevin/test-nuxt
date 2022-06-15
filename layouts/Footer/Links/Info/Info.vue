<template>
 <div class="text-left">
    <h3 class="text-strong font-bold mb-3">INFO</h3>

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

const list = ref(['COMPANY', 'FRANCHISE', 'PARTNERS', 'CONTACT', 'FAQ']);
</script>