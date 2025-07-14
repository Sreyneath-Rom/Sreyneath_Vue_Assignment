<template>
  <div class="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
    <h1 class="text-3xl font-bold mb-6 text-sky-700 text-center">Settings</h1>

    <form @submit.prevent="saveSettings" class="space-y-6">
      <!-- Username -->
      <div>
        <label class="block text-gray-700 font-medium mb-2" for="username">Username</label>
        <input
          v-model="settings.username"
          id="username"
          type="text"
          placeholder="Your username"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 font-medium mb-2" for="email">Email</label>
        <input
          v-model="settings.email"
          id="email"
          type="email"
          placeholder="your@email.com"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <!-- Password -->
      <div>
        <label class="block text-gray-700 font-medium mb-2" for="password">New Password</label>
        <input
          v-model="settings.password"
          id="password"
          type="password"
          placeholder="New password"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <!-- Notifications Toggle -->
      <div class="flex items-center gap-3">
        <input
          v-model="settings.notifications"
          id="notifications"
          type="checkbox"
          class="w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
        />
        <label for="notifications" class="text-gray-700">Enable notifications</label>
      </div>

      <!-- Save Button -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-sky-600 text-white font-medium px-6 py-2 rounded-full hover:bg-sky-700 transition"
        >
          Save Settings
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const settings = ref({
  username: '',
  email: '',
  password: '',
  notifications: true,
})

function saveSettings() {
  alert('Settings saved!')
  // You can replace with API call here
}
</script>
