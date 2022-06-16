<template>
  <header class="fixed w-full">
    <div class="header-nav bg-white">
      <div class="flex justify-between items-center p-3">
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
            <li class="inline mx-3">CATEGORIES</li>
            <li class="inline mx-3 relative">
              <span class="material-icons">
                shopping_cart
              </span>
              <div v-if="!isCartEmpty" class="bg-red-500 absolute right-0.5 bottom-0.5 w-2 h-2 rounded-full"></div>
            </li>
            <li v-if="!isCartEmpty" class="text-strong font-bold bg-weak text-center inline mx-3">{{ cartItems }} items</li>
          </ul>
        </nav>
        <input type="search" name="search" id="search" class="hidden mlg:inline-block mlg:mb-2 border-2 border-blue-400" />
      </div>

      <nav v-if="showDropdownMenu" class=" text-center mlg:hidden">
        <div class="search">
          <input type="search" name="search" id="search" class="mb-2 border-2 border-normal" />
        </div>
        <ul class="text-normal mb-2">
          <li>
            <span class="material-icons">home</span>
          </li>
          <li>CATEGORIES</li>
          <li class="text-center">
            <div class="inline-block relative">
              <span class="material-icons block">
                shopping_cart
              </span>
              <div v-if="!isCartEmpty" class="bg-red-500 absolute right-0.5 bottom-0.5 w-2 h-2 rounded-full"></div>
            </div>
          </li>
          <li v-if="!isCartEmpty" class="text-strong font-bold bg-weak text-center inline mx-3">{{ cartItems }} items</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { ref, computed } from 'vue';

const store = useStore();

const showDropdownMenu = ref(false);
const cartItems = computed(() => store.getNumberOfCartItems);
const isCartEmpty = computed(() => cartItems.value === 0);

function toggleShowDropdownMenu() {
  showDropdownMenu.value = !showDropdownMenu.value;
}
</script>