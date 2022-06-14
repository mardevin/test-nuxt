import { defineStore } from 'pinia';
import { Actions } from './enums/actions';
import axios from 'axios';

export const useStore = defineStore('store', {
  state() {
    return {
      products: [],
      cartItems: 0,
      error: '',
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cartItems;
    },
    error(state) {
      return state.error;
    },
  },
  actions: {
    async [Actions.FETCH_PRODUCTS]() {
      const url = 'https://fakestoreapi.com/products';

      try {
        const { data } = await axios.get(url);
        this.products = data;
      } catch (error) {
        this.error = error.response.data;
      }
    }
  }
})