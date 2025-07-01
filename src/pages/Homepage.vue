<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
    <p class="text-lg text-gray-700 mb-8">This is the main page of our application.</p>
    <router-link to="/author" class="text-blue-500 hover:underline">Go to Author Page</router-link>
    <router-link to="/member" class="text-blue-500 hover:underline mt-2">Go to Member Page</router-link>
  </div>
  
</template>

<script setup>

</script>

<style scoped>
</style>