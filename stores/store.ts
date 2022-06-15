import { defineStore } from 'pinia';
import { Actions } from './enums/actions';
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      products: [],
      cartItems: 0,
      error: '',
    }
  },
  actions: {
    async [Actions.FETCH_PRODUCTS]() {
      const url = 'https://fakestoreapi.com/products';

      try {
        const { data } = await axios.get(url);
        this.$patch({
          products: data
        })
      } catch (error) {
        this.$patch({
          error: error.response.data
        })
      }
    },
    [Actions.ADD_TO_CART]() {
      this.cartItems++;
    }
  },
  getters: {
    getProducts: (state) => state.products,
    getCartItems: (state) => state.cartItems,
    getError: (state) =>  state.error,
  },
})