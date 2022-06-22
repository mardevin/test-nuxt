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
              <NuxtLink to="/FeaturedProducts">ALL PRODUCTS</NuxtLink>
            </li>
            <li class="relative inline mx-3 p-2">
              <NuxtLink to="/Cart">
                <ShoppingCartIcon class="inline-block" />
                <div v-if="!isCartEmpty" class="text-white bg-red-500 text-[12px] absolute top-0.5 right-0.5 flex justify-center items-center w-3.5 h-3.5 p-2 border border-white rounded-full">{{ cartItems }}</div>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="search-products hidden mlg:block">
          <input type="search" name="search" id="search" ref="searchField" class="border-2 border-normal rounded-lg" @input="searchProducts" :value="searchInput" />
          <div class="products bg-white fixed max-h-[22rem] overflow-scroll">
            <NuxtLink v-for="product in searchResults" :key="product.id" :to="`/FeaturedProduct/${product.id}`" class="product flex py-1 px-3 border" @keydown.esc="focusOnSearchField">
              <div class="product-image relative inline-block w-16 mr-3 pb-[17%]">
                <img :src="product.thumbnail" :alt="product.title" class="absolute w-full h-full object-cover" />
              </div>
              <div class="product-title inline-block">
                {{ product.title }}
              </div>
            </NuxtLink>  
          </div>
        </div>
      </div>

      <nav v-if="showDropdownMenu" class="text-center mlg:hidden">
        <div class="search-products">
          <input type="search" name="search" id="search" class="mb-2 border-2 border-normal rounded-lg" @input="searchProducts" :value="searchInput" />
          <div class="products bg-white fixed sm:left-1/4 max-h-[22rem] overflow-scroll">
            <NuxtLink v-for="product in searchResults" :key="product.id" :to="`/FeaturedProduct/${product.id}`" class="product flex py-1 px-3 border">
              <div class="product-image relative inline-block w-16 mr-3 pb-[17%]">
                <img :src="product.thumbnail" :alt="product.title" class="absolute w-full h-full object-cover" />
              </div>
              <div class="product-title inline-block">
                {{ product.title }}
              </div>
            </NuxtLink>  
          </div>
        </div>
        <ul class="text-normal mb-2">
          <li>
            <NuxtLink to="/FeaturedProducts">ALL PRODUCTS</NuxtLink>
          </li>
          <li class="text-center pb-2">
            <div class="relative inline mx-3 p-2">
              <NuxtLink to="/Cart">
                <ShoppingCartIcon class="inline-block" />
                <div v-if="!isCartEmpty" class="text-white bg-red-500 text-[12px] absolute top-0.5 right-0.5 flex justify-center items-center w-3.5 h-3.5 p-2 border border-white rounded-full">{{ cartItems }}</div>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store';
import { ref, computed } from 'vue';
import SportsBaseballIcon from '~/assets/icons/sports-baseball.svg';
import MenuIcon from '~/assets/icons/menu.svg';
import ShoppingCartIcon from '~/assets/icons/shopping-cart.svg';
import axios from 'axios';

const store = useStore();

const showDropdownMenu = ref(false);
const searchField = ref(null);
const searchInput = ref('');
const searchResults = ref([]);
const cartItems = computed(() => store.getNumberOfCartItems);
const isCartEmpty = computed(() => cartItems.value === 0);

function toggleShowDropdownMenu() {
  showDropdownMenu.value = !showDropdownMenu.value;
}

async function searchProducts(e) {
  searchInput.value = e.target.value;

  if (searchInput.value === '') {
    searchResults.value = [];
    return;
  }

  const url = `https://dummyjson.com/products/search?q=${searchInput.value}`;

  try {
    const { data } = await axios.get(url);

    searchResults.value = data.products;
  } catch (error) {
    store.setError(error.response.data.message);
  }
}

function focusOnSearchField() {
  searchField.value.focus();
}
</script>