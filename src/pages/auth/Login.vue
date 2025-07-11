<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-8">
      <h1 class="text-4xl font-extrabold text-center text-yellow-600 mb-6">Welcome Back</h1>
      <p class="text-center text-gray-600 mb-8">Please enter your credentials to log in.</p>

      <form @submit.prevent="loginUser" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            autocomplete="email"
            required
            class="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            autocomplete="current-password"
            required
            class="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
        >
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-600 mt-4 text-center">{{ errorMessage }}</p>

      <p class="mt-6 text-center text-gray-500">
        Don't have an account?
        <router-link to="/register" class="text-yellow-600 hover:underline">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);
const router = useRouter();

const loginUser = async () => {
  errorMessage.value = "";
  loading.value = true;

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email: email.value,
      password: password.value,
    });

    // IMPORTANT: access token from response.data.data.token (not response.data.success.token)
    const token = response.data.data.token;

    // Save token to localStorage
    localStorage.setItem("token", token);

    // Set default axios Authorization header
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    router.push("/home");  // or wherever you want to redirect after login
  } catch (error) {
    errorMessage.value = error.response?.data.message || "Login failed";
  } finally {
    loading.value = false;
  }
};
</script>
