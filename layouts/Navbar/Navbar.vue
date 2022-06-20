<template>
  <header class="fixed top-0 w-full z-10 shadow-lg">
    <div class="max-w-screen-xl mx-auto header-nav bg-white">
      <div class="flex justify-between items-center py-3 px-6">
        <div class="logo text-weak text-2xl md:text-5xl">
          <NuxtLink to="/" class="flex items-center">
            <SportsBaseballIcon class="mr-2" />
            <div>
              InterGreen 
            </div>
            
          </NuxtLink>
        </div>
        <div class="hamburger-menu mlg:hidden" @click="toggleShowDropdownMenu">
          <MenuIcon />
        </div>
        <nav class="hidden mlg:block">
          <ul class="text-normal">
            <li class="inline mx-3">
              <NuxtLink to="/">
                <HomeIcon class="inline-block" />
              </NuxtLink>
            </li>
            <li class="inline mx-3">
              <NuxtLink to="/FeaturedProducts">ALL PRODUCTS</NuxtLink>
            </li>
            <li class="inline mx-3 relative">
              <NuxtLink to="/Cart">
                <ShoppingCartIcon class="inline-block" />
                <div v-if="!isCartEmpty" class="bg-red-500 absolute right-0.5 bottom-0.5 w-2 h-2 rounded-full"></div>
              </NuxtLink>
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
            <NuxtLink to="/">
              <HomeIcon class="inline-block" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/FeaturedProducts">ALL PRODUCTS</NuxtLink>
          </li>
          <li class="text-center pb-2">
            <div class="inline-block relative">
              <NuxtLink to="/Cart">
                <ShoppingCartIcon class="inline-block" />
                <div v-if="!isCartEmpty" class="bg-red-500 absolute right-0.5 bottom-0.5 w-2 h-2 rounded-full"></div>
              </NuxtLink>
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
import SportsBaseballIcon from '~/assets/icons/sports-baseball.svg';
import MenuIcon from '~/assets/icons/menu.svg';
import HomeIcon from '~/assets/icons/home.svg';
import ShoppingCartIcon from '~/assets/icons/shopping-cart.svg';

const store = useStore();

const showDropdownMenu = ref(false);
const cartItems = computed(() => store.getNumberOfCartItems);
const isCartEmpty = computed(() => cartItems.value === 0);

function toggleShowDropdownMenu() {
  showDropdownMenu.value = !showDropdownMenu.value;
}
</script>