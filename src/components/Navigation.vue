<template>
  <nav class="h-16 w-11/12 mx-auto flex flex-wrap items-center justify-between gap-4 py-4 relative">
    <!-- Left: Logo + Search -->
    <div class="flex items-center gap-6">
      <router-link to="/" class="flex items-center gap-2 hover:opacity-80 transition">
        <span class="material-symbols-outlined text-3xl text-yellow-600">menu_book</span>
        <span class="text-2xl font-bold text-yellow-600">Library</span>
      </router-link>

      <div class="relative">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sky-400">search</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-60 pl-10 pr-10 py-1 border border-sky-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 cursor-pointer hover:text-sky-600">mic</span>
      </div>
    </div>

    <!-- Middle: Links -->
    <div class="flex items-center gap-6">
      <NavigationItem v-for="item in navItems" :key="item.label" :item="item" />
    </div>

    <!-- Right: Icons -->
    <div class="flex items-center gap-4 relative">
      <div class="relative">
        <span
          class="material-symbols-outlined text-sky-500 hover:text-sky-600 cursor-pointer relative"
          @click="toggleNotifications"
        >
          notifications
          <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </span>

        <!-- Notifications dropdown -->
        <Notifications v-if="showNotifications" class="absolute right-0 top-10 z-50" />
      </div>

      <NavigationItem v-for="item in navItemsRight" :key="item.icon" :item="item" is-icon />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavigationItem from "./NavigationItem.vue";
import Notifications from "./Notifications.vue";

const searchQuery = ref("");
const showNotifications = ref(false);

const navItems = [
  { label: "Home", path: "/home", icon: "home" },
  { label: "Book", path: "/book", icon: "auto_stories" },
  { label: "Author", path: "/author", icon: "face" },
];

const navItemsRight = [
  { label: "Account", path: "/account", icon: "account_circle" },
  { label: "Settings", path: "/settings", icon: "settings" },
 
];

function toggleNotifications() {
  showNotifications.value = !showNotifications.value;
}

// Close notifications if click outside
function handleClickOutside(event) {
  const notificationsElement = document.getElementById("notifications-dropdown");
  if (notificationsElement && !notificationsElement.contains(event.target)) {
    showNotifications.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
