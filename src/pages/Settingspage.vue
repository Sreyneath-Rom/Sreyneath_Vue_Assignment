<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <div class="flex items-center mb-6">
        <img
          src="https://cdn.oneesports.gg/cdn-data/2024/02/Anime_Luffy_smiling.jpg"
          alt="User Avatar"
          class="w-24 h-24 rounded-full mr-4 object-cover"
        />
        <div>
          <h2 class="text-2xl font-semibold">{{ store.user.name }}</h2>
          <p class="text-gray-600">{{ store.user.email }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-8 rounded-lg shadow-md w-96 mt-6">
      <h3 class="text-xl font-semibold mb-4">Edit Profile</h3>
      <form @submit.prevent="handleUpdate">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { UserStore } from '@/store/UserStore'

const store = UserStore()

// Local form data
const form = ref({
  name: '',
  email: ''
})

// Fetch user on mount
onMounted(async () => {
  await store.fetchCurrentUser()
  form.value.name = store.user.name
  form.value.email = store.user.email
})

async function handleUpdate() {
  await store.updateUser({
    name: form.value.name,
    email: form.value.email
  })
}
</script>
