<template>
  <main class="max-w-screen-xl mx-auto">
    <Category :category="category" />
    
    <section class="flex flex-col lg:flex-row md:justify-between mb-9 p-6">
      <aside class="lg:w-60 lg:mr-6 mb-6">
        <h3 class="text-normal bg-weak text-left mb-3 py-1 px-2 rounded-lg">FILTERS</h3>
        <div class="min-price md:inline-block lg:block mr-3">
          <label for="min-price">Min price</label>
          <input type="number" name="min-price" id="min-price" class="block w-full mt-1 pl-1 border border-black rounded-lg" v-model="minPrice" />
        </div>

        <div class="max-price md:inline-block lg:block mr-3">
          <label for="max-price">Max price</label>
          <input type="number" name="max-price" id="max-price" class="block w-full mt-1 pl-1 border border-black rounded-lg" v-model="maxPrice" />
        </div>
        <div class="title md:inline-block lg:block mr-3">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" class="block w-full mt-1 pl-1 border border-black rounded-lg" v-model="title" />
        </div>
        <div class="category md:inline-block lg:block mr-3">
          <label for="category">Category</label>
          <!-- <input type="text" name="category" list="category" class="block w-full mt-1 pl-1 border border-black rounded-lg" v-model="category">
          <datalist id="category">
            <option v-for="category in categories" :key="category" :value="category" />
          </datalist> -->
          <select name="category" id="category" class="block w-full mt-1 pl-1 border border-black rounded-lg" v-model="category">
            <option v-for="category in categories" :key="category">{{ category }}</option>
          </select>
        </div>
      </aside>

      <div v-if="thereAreProductsAvailable" class="featured-products flex-1">
        <div class="featured-products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <FeaturedProduct v-for="product in productsToDisplay" :key="product.id" :product="product" />
        </div>

        <div class="pagination text-center flex sm:justify-between sm:items-center">
          <span tabindex="0" class="text-normal flex justify-center items-center w-8 h-8 border-2 border-normal rounded-full cursor-pointer" @click="previousPage" @keypress.enter="previousPage">
            <span class="material-icons">arrow_back</span>
          </span>
          
          <div class="pages">
            <span 
              v-for="page in pages" 
              :key="page" 
              tabindex="0"
              class="dot text-white bg-normal text-2xl font-bold hover:bg-normal inline-flex justify-center align-center w-8 h-8 mx-2 rounded-full shadow-2xl cursor-pointer"
              :class="{
                'bg-strong': activePage === page
              }"
              @click="activePage = page"
              @keypress.enter="activePage = page"
              @keypress.space.prevent="activePage = page"
            >{{ page }}</span>
          </div>

          <span tabindex="0" class="text-normal flex justify-center items-center w-8 h-8 border-2 border-normal rounded-full cursor-pointer" @click="nextPage" @keypress.enter="nextPage">
            <span class="material-icons">arrow_forward</span>
          </span>
        </div>
      </div>

      <div v-else class="text-3xl text-center w-full">
        Sorry, but there are currently no products that fulfill the desired criteria.
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store';
import { ref, computed } from 'vue';
import { Product } from '~~/stores/types/types';

const store = useStore();
const route = useRoute();

const minPrice = ref(0);
const maxPrice = ref(0);
const title = ref('');
const category = ref('all');

const categories = [
  "all",
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
];

const productsPerPage = 12;
const activePage = ref(1);
const featuredProducts = computed(() => store.getProducts);
const filteredProducts = computed(() => featuredProducts.value.filter((product) => doesRespondToFiltersCriterias(product)));
const pages = computed(() => Math.ceil(filteredProducts.value.length / productsPerPage))
const isFirstPage = computed(() => activePage.value === 1);
const isLastPage = computed(() => activePage.value === pages.value);
const productsToDisplay = computed(() => filteredProducts.value.slice(productsPerPage * activePage.value - productsPerPage, productsPerPage * activePage.value));
const thereAreProductsAvailable = computed(() => filteredProducts.value.length !== 0);

function doesRespondToFiltersCriterias(product: Product) {
  resetToFirstPage();

  return isPriceBiggerThanMinPrice(product) 
  && isPriceSmallerThanMaxPrice(product) 
  && containsTextWithinTitle(product)
  && belongsToCategory(product);
}

function isPriceBiggerThanMinPrice(product: Product) {
  return minPrice.value === 0 || product.price >= minPrice.value;
}

function isPriceSmallerThanMaxPrice(product: Product) {
  return maxPrice.value === 0 || product.price <= maxPrice.value;
}

function containsTextWithinTitle(product: Product) {
  const titleRegExp = new RegExp(title.value, 'gi');
  return titleRegExp.test(product.title);
}

function belongsToCategory(product: Product) {
  return category.value === 'all' || product.category === category.value;
}

function resetToFirstPage() {
  activePage.value = 1;
}

function nextPage() {
  if (isLastPage.value) {
    activePage.value = 1;
  } else {
    activePage.value++;
  }
}

function previousPage() {
  if (isFirstPage.value) {
    activePage.value = pages.value;
  } else {
    activePage.value--;
  }
}

onMounted(() => {
  const categoryQuery = route.query['category'] as string;
  
  if (categoryQuery !== undefined) {
    category.value = categoryQuery;
  }
})

useHead({
  title: 'Featured products',
  meta: [
    { name: 'keywords', content: 'product, e-commerce'},
    { name: 'description', content: 'All featured products are awesome' },
  ],
})
</script>