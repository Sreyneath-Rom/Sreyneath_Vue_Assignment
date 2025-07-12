<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-sky-300 text-center p-6"
  >
    <h1
      class="text-5xl font-extrabold text-sky-700 drop-shadow-lg mb-4 animate-fade-in-down"
    >
      Welcome to Our Library App
    </h1>
    <p class="text-lg text-gray-700 max-w-xl mb-8 animate-fade-in-up">
      Discover a world of books and authors. Manage your collection, find your
      next favorite read, and explore with ease!
    </p>

    <button
      class="px-6 py-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition-colors duration-300 text-lg font-medium animate-bounce"
    >
      Explore Books
    </button>

    <div class="mt-12 bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold text-sky-700 mb-4">User Overview</h2>
      <ul class="text-left text-gray-700 space-y-2">
        <li>
          <span class="font-medium">User List:</span>
          {{ store.user?.length || 0 }}
        </li>
        <li>
          <span class="font-medium">Total Users:</span> {{ store.countUser }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { UserStore } from "@/store/UserStore";
import { onMounted } from "vue";

const store = UserStore();

onMounted(async () => {
  await store.fetchUsers();
});
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}
</style>
