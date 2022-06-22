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
        <input type="search" list="products" name="search" id="search" class="hidden mlg:inline-block mlg:mb-2 border-2 border-blue-400 rounded-lg" @input="searchProducts" :value="searchInput" />
        <datalist id="products">
          <option v-for="product in searchResults" :key="product.id" @click="goToProductPage(product.id)" @keypress.enter="goToProductPage(product.id)">{{ product.title }}</option>
        </datalist>
      </div>

      <nav v-if="showDropdownMenu" class=" text-center mlg:hidden">
        <div class="search">
          <input type="search" name="search" id="search" class="mb-2 border-2 border-normal rounded-lg" />
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
const router = useRouter();

const showDropdownMenu = ref(false);
const searchInput = ref('');
const searchResults = ref([]);
const cartItems = computed(() => store.getNumberOfCartItems);
const isCartEmpty = computed(() => cartItems.value === 0);

function toggleShowDropdownMenu() {
  showDropdownMenu.value = !showDropdownMenu.value;
}

async function searchProducts(e) {
  searchInput.value = e.target.value;

  const url = `https://dummyjson.com/products/search?q=${searchInput.value}`;

  try {
    const { data } = await axios.get(url);
    searchResults.value = data.products;
  } catch (error) {
    store.setError(error.response.data.message);
  }
}

function goToProductPage(id: string) {
  router.push(`/FeaturedProduct/${id}`);
}
</script>