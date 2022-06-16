<template>
  <main>

    <Category />
    
    <section class="flex flex-col lg:flex-row md:justify-between mb-9 p-6">
      <aside class="lg:w-60 lg:mr-3 mb-3">
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

        <!-- <ul>
          <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
          <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
          <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
          <li class="text-normal text-left sm:inline-block lg:my-1 px-2 lg:block">Option One</li>
        </ul> -->
      </aside>

      <div class="featured-products flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-3">
        <FeaturedProduct v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { ref, computed } from 'vue';

const store = useStore();

const minPrice = ref(0);
const maxPrice = ref(0);
const title = ref('');

const featuredProducts = computed(() => store.getProducts.slice(0, 9));
</script>