<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4"
  >
    <div class="max-w-md w-full bg-white shadow-md rounded-lg p-8">
      <h1 class="text-4xl font-extrabold text-center text-yellow-600 mb-6">
        Create Account
      </h1>
      <p class="text-center text-gray-600 mb-8">
        Please fill in the details to create a new account.
      </p>
      <form @submit.prevent="registerUser" class="space-y-6">
        <div>
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Username</label
          >
          <input
            v-model="username"
            id="username"
            type="text"
            autocomplete="username"
            required
            class="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
            placeholder="Your username"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Email</label
          >
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
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Password</label
          >
          <input
            v-model="password"
            id="password"
            type="password"
            autocomplete="new-password"
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
          {{ loading ? "Registering..." : "Register" }}
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-600 mt-4 text-center">
        {{ errorMessage }}
      </p>
      <p v-if="successMessage" class="text-green-600 mt-4 text-center">
        {{ successMessage }}
      </p>

      <p class="mt-6 text-center text-gray-500">
        Already have an account?
        <router-link to="/login" class="text-yellow-600 hover:underline"
          >Login here</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const username = ref("");
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const successMessage = ref("");
const loading = ref(false);
const router = useRouter();

const clearForm = () => {
  username.value = "";
  email.value = "";
  password.value = "";
};

const registerUser = async () => {
  errorMessage.value = "";
  successMessage.value = "";
  loading.value = true;
  try {
    await axios.post("http://127.0.0.1:8000/api/register", {
      name: username.value,
      email: email.value,
      password: password.value,
      c_password: password.value,
    });

    successMessage.value = "Registration successful! Redirecting to login...";
    clearForm();
    setTimeout(() => router.push("/login"), 2000);
  } catch (error) {
    if (error.response?.data?.errors) {
      errorMessage.value = Object.values(error.response.data.errors)
        .flat()
        .join(" ");
    } else {
      errorMessage.value =
        error.response?.data.message ||
        "Registration failed. Please try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>
