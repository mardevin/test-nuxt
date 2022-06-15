import { defineStore } from 'pinia';
import { Actions } from './enums/actions';
import { Product, StoreState } from './types/types';

export const useStore = defineStore('store', {
  state: () => {
    return {
      products: [],
      cart: [],
      error: '',
    } as StoreState
  },
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
    // getItemAvailability: (state) => (item: Product) => !!state.cart.find((cartItem) => cartItem.product.id === item.id),
    getError: (state) => state.error,
  },
  actions: {
    async [Actions.SET_PRODUCTS](data: Product[]) {
      this.$patch({
        products: data
      })
    },
    [Actions.ADD_TO_CART](item: Product) {
      const foundItem = this.cart.find((cartItem) => cartItem.product.id === item.id);

      if (foundItem) {
        foundItem.numberOfItems++;
      } else {
        this.cart.push({
          product: item,
          numberOfItems: 1,
        });
      }
    },
    [Actions.REMOVE_FROM_CART](item: Product) {
      this.cart = this.cart.filter((cartItem) => {
        if (cartItem.product.id !== item.id) return true;
        if (cartItem.numberOfItems > 1) {
          cartItem.numberOfItems--;
          return true;
        }

        return false;
      })
    }
  },
})