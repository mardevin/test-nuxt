<template>
  <main class="bg-weak mlg:w-96 mlg:mx-auto my-16 p-6 rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6">You must be logged in to view this page</h1>
    <form @submit.prevent="login">
      <div class="username mb-3">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" class="block pl-1 border-2 border-black rounded-lg" v-model="username" />
      </div>

      <div class="password mb-3">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="block pl-1 border-2 border-black rounded-lg" v-model="password" />
      </div>

      <div class="submit">
        <button type="submit" class="text-white bg-normal py-3 px-6 rounded-lg">Log in</button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { useStore } from '~/stores/store';
import { ref } from 'vue';

const store = useStore();
const router = useRouter();

const username = ref('');
const password = ref('');

async function login() {
  const loginCredentials = {
    username: username.value,
    password: password.value,
  }

  try {
    await store.login(loginCredentials);
    router.push('/');
  } catch (error) {
    console.log(error.message);
  }
}

onBeforeMount(redirectToHomePageIfUserAuthenticated);

async function redirectToHomePageIfUserAuthenticated() {
  if (await store.verifyAuth()) {
    router.push('/');
  }
}
</script>