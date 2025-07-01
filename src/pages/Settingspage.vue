<template>
  <!-- profile user -->
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <div class="flex items-center mb-6">
        <img src="https://cdn.oneesports.gg/cdn-data/2024/02/Anime_Luffy_smiling.jpg" alt="User Avatar"
          class="w-24 h-24 rounded-full mr-4 object-cover" />
        <div>
          <h2 class="text-2xl font-semibold">User Name</h2>
          <p class="text-gray-600"></p>
        </div>
      </div>
    </div>
    <div class="bg-white p-8 rounded-lg shadow-md w-96 mt-6">
      <h3 class="text-xl font-semibold mb-4">Settings</h3>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" class="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">Save
          Changes</button>
      </form>
    </div>
  </div>


</template>

<script setup>

</script>
