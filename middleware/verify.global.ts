import { useStore } from "~~/stores/store"

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!process.client) return;

  const store = useStore();
  
  if (to.path !== '/Login' && !(await store.verifyAuth())) return navigateTo('/Login');
})