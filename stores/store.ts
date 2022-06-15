import { defineStore } from 'pinia';
import { Actions } from './enums/actions';
import { Product, StoreState } from './types/types';

export const useStore = defineStore('store', {
  state: () => {
    return {
      products: [],
      cartItems: 0,
      error: '',
    } as StoreState
  },
  actions: {
    async [Actions.SET_PRODUCTS](data: Product[]) {
      this.$patch({
        products: data
      })
    },
    [Actions.ADD_TO_CART]() {
      this.cartItems++;
    }
  },
  getters: {
    getProducts: (state) => state.products,
    getCartItems: (state) => state.cartItems,
    getError: (state) => state.error,
  },
})