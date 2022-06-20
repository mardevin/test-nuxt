<template>
  <main class="max-w-screen-xl mx-auto">
    <Category />
    
    <section class="flex flex-col lg:flex-row md:justify-between mb-9 p-6">
      <aside class="lg:w-60 lg:mr-6 mb-6">
        <h3 class="text-normal bg-weak text-left mb-3 py-1 px-2">FILTERS</h3>
        <div class="min-price md:inline-block mr-3">
          <label for="min-price">Min price</label>
          <input type="number" name="min-price" id="min-price" class="block mt-1 pl-1 border border-black" v-model="minPrice" />
        </div>

        <div class="max-price md:inline-block mr-3">
          <label for="max-price">Max price</label>
          <input type="number" name="max-price" id="max-price" class="block mt-1 pl-1 border border-black" v-model="maxPrice" />
        </div>
        <div class="title md:inline-block mr-3">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" class="block mt-1 pl-1 border border-black" v-model="title" />
        </div>
        <div class="category md:inline-block mr-3">
          <label for="category">Category</label>
          <select name="category" id="category" class="block mt-1 pl-1 border border-black" v-model="category">
            <option v-for="category in categories" :key="category">{{ category }}</option>
          </select>
        </div>
      </aside>

      <div class="featured-products flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeaturedProduct v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/store';
import { ref, computed } from 'vue';
import { Product } from '~~/stores/types/types';

const store = useStore();

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

const featuredProducts = computed(() => store.getProducts);
const filteredProducts = computed(() => featuredProducts.value.filter((product) => doesRespondToFiltersCriterias(product)));

function doesRespondToFiltersCriterias(product: Product) {
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

useHead({
  title: 'Featured products',
  meta: [
    { name: 'keywords', content: 'product, e-commerce'},
    { name: 'description', content: 'All featured products are awesome' },
  ],
})
</script>