<template>
  <div
    class="absolute top-14 right-4 w-72 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50"
  >
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-4 bg-sky-50 border-b border-gray-200">
      <img
        v-if="user.avatar"
        :src="user.avatar"
        alt="Profile picture"
        class="w-12 h-12 rounded-full object-cover border-2 border-sky-500"
      />
      <div v-else class="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center text-white font-bold text-lg">
        {{ userInitials }}
      </div>

      <div>
        <h2 class="text-base font-semibold text-gray-800">{{ user.name }}</h2>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
      </div>
    </div>

    <!-- Menu Links -->
    <div class="divide-y divide-gray-200">
      <button
        class="w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-sky-500">settings</span>
        <span class="text-gray-700 cursor-pointer" @click="$router.push('/settings')">Settings</span>
      </button>

      <button
        class="w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-sky-500">help</span>
        <span class="text-gray-700">Help & Support</span>
      </button>

      <button
        @click="logout"
        class="w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-rose-500">logout</span>
        <span class="text-rose-500">Logout</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const user = ref({
  name: 'Sreyneath Rom',
  email: 'sreyneath@example.com',
  avatar: '', // Provide URL if you have a profile picture
})

// Compute initials if no avatar
const userInitials = computed(() => {
  if (!user.value.name) return ''
  return user.value.name
    .split(' ')
    .map((n) => n[0])
    .join('')
})

function logout() {
  // Clear local storage token or any auth data
  localStorage.removeItem('token')
  alert('You have been logged out!')
  // Redirect or update router if needed
}
</script>
