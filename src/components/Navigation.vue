<template>
  <nav
    class="h-16 w-10/12 m-auto flex flex-wrap items-center justify-between gap-4"
  >
    <!-- Left: Logo + Title + Search -->
    <div id="nav-item" class="flex items-center gap-6">
      <router-link
        to="/"
        class="flex items-center gap-2 hover:opacity-80 transition"
      >
        <span class="material-symbols-outlined text-3xl text-yellow-600"
          >menu_book</span
        >
        <span class="text-2xl font-semibold text-yellow-600">Library</span>
      </router-link>

      <!-- Search Bar with Icons -->
      <div class="relative">
        <!-- Search Icon -->
        <span
          class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sky-400"
        >
          search
        </span>

        <!-- Input Field -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          aria-label="Search library"
          class="w-60 pl-10 pr-10 py-1 border border-sky-400 rounded focus:outline-none focus:ring-2 focus:ring-sky-600 focus-visible:outline-none"
        />

        <!-- Mic Icon -->
        <span
          class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 cursor-pointer hover:text-sky-600"
        >
          mic
        </span>
      </div>
    </div>

    <!-- Right: Navigation Links -->
    <div class="flex items-center gap-6">
      <NavigationItem
        v-for="item in navItems"
        :key="item.label"
        :item="item"
        :to="item.path"
      />
    </div>
    <div class="flex items-center gap-4">
      <span class="material-symbols-outlined text-sky-400">notifications</span>
      <span class="material-symbols-outlined text-sky-400">account_circle</span>
        <span class="material-symbols-outlined text-sky-400">settings</span>
        <span class="material-symbols-outlined text-sky-400">logout</span>
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

</script>
