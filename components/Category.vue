<template>
  <header class="pt-16 p-6">
    <div class="category-banner text-normal bg-weak text-5xl font-bold text-left py-10 p-6 rounded-lg">
      {{ category }}
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  category: String,
});
</script>