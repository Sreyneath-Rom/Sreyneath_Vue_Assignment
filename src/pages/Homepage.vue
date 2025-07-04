<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
    <p class="text-lg text-gray-700 mb-8">This is the main page of our application.</p>
    
  </div>
  <div>
    <ol>
      <li>{{ store.users }}</li>
      <li>{{ store.countuser }}</li>
    </ol>
  </div>
  
</template>

<script setup>
import { UserStore } from '@/store/UserStore';

const store = UserStore();
</script>

