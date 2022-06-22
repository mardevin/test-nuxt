import { defineStore } from 'pinia';
import { Actions } from './enums/actions';
import { LoginCredentials, Product, StoreState } from './types/types';
import { http } from '~/config/axiosConfig';

export const useStore = defineStore('store', {
  state: () => {
    return {
      user: {},
      products: [],
      cart: [],
      error: '',
    } as StoreState
  },
  getters: {
    getIsUserAuthenticated: (state) => !!state.user.token,
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
    getNumberOfCartItems: (state) => state.cart.reduce((acc, cartItem) => acc + cartItem.numberOfItems, 0),
    getNumberOfCartItemsForAnItem: (state) => 
      (item: Product) => {
        const foundItem = state.cart.find((cartItem) => cartItem.product.id === item.id);

        return foundItem ? foundItem.numberOfItems : 0;
      }
    ,
    getTotalPriceForCartItems: (state) => state.cart.reduce((acc, cartItem) => acc + (cartItem.product.price * cartItem.numberOfItems), 0),
    getError: (state) => state.error,
  },
  actions: {
    async [Actions.LOGIN](loginCredentials: LoginCredentials) {
      try {
        const { data: user } = await http.post('auth/login', loginCredentials);
        this.$patch({
          user,
          error: '',
        })

        localStorage.setItem('userId', user.id);
      } catch (error) {
        this.setError(error.response.data.message)
      }
    },
    async [Actions.FETCH_PRODUCTS]() {
      try {
        const { data: { products } } = await http.get('products');
        this.$patch({
          products,
          error: '',
        })
      } catch (error) {
        this.setError(error.response.data.message)
      }
    },
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
    },
    [Actions.REMOVE_PRODUCT_FROM_CART](product: Product) {
      this.cart = this.cart.filter((cartItem) => cartItem.product.id !== product.id);
    },
    async [Actions.VERIFY_AUTH]() {
      if (localStorage.getItem('userId') === null) {
        this.logout();
        return false;
      }

      const userId = localStorage.getItem('userId');

      try {
        const { data: user } = await http.get(`users/${userId}`);
        this.$patch({
          user,
          error: '',
        });

        localStorage.setItem('userId', user.id);
        return true;
      } catch (error) {
        this.setError(error.response.data.message)
        return false;
      }
    },
    [Actions.LOGOUT]() {
      this.$patch({
        user: {},
      });

      localStorage.removeItem('userId');
    },
    [Actions.SET_ERROR](error: string) { 
      this.$patch({
        error,
      })
     }
  },
})