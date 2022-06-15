<template>
  <header class="p-6">
    <div class="search text-right">
      <input type="search" name="search" id="search" class="hidden mlg:inline-block mlg:mb-2 border-2 border-blue-400" />
    </div>
    <div class="header-nav flex justify-between items-center">
      <div class="logo text-weak text-2xl md:text-5xl flex items-center">
          <span class="material-icons text-5xl mr-2">sports_baseball</span>
        <div>
          InterGreen 
        </div>
      </div>
      <div class="hamburger-menu mlg:hidden" @click="toggleShowDropdownMenu">
        <span class="material-icons text-5xl mr-2">menu</span>
      </div>
      <nav class="hidden mlg:block">
        <ul class="text-normal">
          <li class="inline mx-3">
            <span class="material-icons">home</span>
          </li>
          <li class="inline mx-3">HOME</li>
          <li class="inline mx-3">CUPS</li>
          <li class="inline mx-3">SPOONS</li>
          <li class="inline mx-3">LIDS</li>
          <li class="inline mx-3">ACCESSORIES</li>
          <li class="inline mx-3">MARKETING</li>
        </ul>
      </nav>
    </div>
  </header>

  <nav v-if="showDropdownMenu" class=" text-center mlg:hidden">
    <div class="search">
      <input type="search" name="search" id="search" class="mb-2 border-2 border-normal" />
    </div>
    <ul class="text-normal mb-2">
      <li class="inline mx-3">
        <span class="material-icons">home</span>
      </li>
      <li>HOME</li>
      <li>CUPS</li>
      <li>SPOONS</li>
      <li>LIDS</li>
      <li>ACCESSORIES</li>
      <li>MARKETING</li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const showDropdownMenu = ref(false);

function toggleShowDropdownMenu() {
  showDropdownMenu.value = !showDropdownMenu.value;
}
</script>