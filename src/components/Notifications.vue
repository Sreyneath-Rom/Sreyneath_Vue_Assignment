<template>
  <div
    class="absolute top-16 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
  >
    <!-- Header -->
    <div class="px-4 py-2 border-b border-gray-200 bg-sky-50">
      <h2 class="text-lg font-semibold text-sky-700">Notifications</h2>
    </div>

    <!-- Notification List -->
    <div class="max-h-60 overflow-y-auto">
      <transition-group name="fade" tag="div">
        <div
          v-if="notifications.length"
          v-for="(notification, index) in notifications"
          :key="index"
          class="flex items-start px-4 py-3 hover:bg-gray-50 transition cursor-pointer"
        >
          <span
            class="material-symbols-outlined text-sky-500 mr-3 mt-1 flex-shrink-0"
          >
            {{ notification.icon }}
          </span>
          <div class="flex-1">
            <p class="text-sm text-gray-700">{{ notification.message }}</p>
            <p class="text-xs text-gray-400">{{ notification.time }}</p>
          </div>
        </div>
      </transition-group>

      <!-- Empty State -->
      <div v-if="!notifications.length" class="text-center py-6 text-gray-500 text-sm">
        No new notifications.
      </div>
    </div>

    <!-- Footer -->
    <div
      v-if="notifications.length"
      class="text-center py-2 border-t border-gray-200 bg-gray-50"
    >
      <button
        class="text-sky-500 text-sm font-medium hover:underline focus:outline-none transition"
        @click="clearNotifications"
      >
        Clear All
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
  { icon: 'mail', message: 'New message from John', time: '2 mins ago' },
  { icon: 'event', message: 'Upcoming meeting at 3 PM', time: '1 hour ago' },
  { icon: 'check_circle', message: 'Your book was approved', time: 'Yesterday' },
  { icon: 'error', message: 'Payment failed', time: '2 days ago' }
])

function clearNotifications() {
  notifications.value = []
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
