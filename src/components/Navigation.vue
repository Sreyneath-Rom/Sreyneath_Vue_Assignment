<template>
  <nav class="h-16 w-11/12 mx-auto flex flex-wrap items-center justify-between gap-4 py-4">
    <!-- Left: Logo + Title + Search -->
    <div class="flex items-center gap-6">
      <router-link
        to="/"
        class="flex items-center gap-2 hover:opacity-80 transition"
      >
        <span class="material-symbols-outlined text-3xl text-yellow-600">menu_book</span>
        <span class="text-2xl font-bold text-yellow-600">Library</span>
      </router-link>

      <!-- Search Bar -->
      <div class="relative">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sky-400">
          search
        </span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          aria-label="Search library"
          class="w-60 pl-10 pr-10 py-1 border border-sky-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 cursor-pointer hover:text-sky-600">
          mic
        </span>
      </div>
    </div>

    <!-- Middle: Navigation Links -->
    <div class="flex items-center gap-6">
      <NavigationItem
        v-for="item in navItems"
        :key="item.label"
        :item="item"
        :to="item.path"
      />
    </div>

    <!-- Right: Icon Links -->
    <div class="flex items-center gap-4">
      <NavigationItem
        v-for="item in navItemsRight"
        :key="item.icon"
        :item="item"
        :to="item.path"
        isIcon
      />
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import NavigationItem from "./NavigationItem.vue";

const searchQuery = ref("");

const navItems = [
  { label: "Home", path: "/home", icon: "home" },
  { label: "Book", path: "/book", icon: "auto_stories" },
  { label: "Author", path: "/author", icon: "face" },
];

const navItemsRight = [
  { label: "Notifications", path: "/notifications", icon: "notifications" },
  { label: "Account", path: "/account", icon: "account_circle" },
  { label: "Settings", path: "/settings", icon: "settings" },
  { label: "Logout", path: "/logout", icon: "logout" },
];
</script>
