<template>
    
    <nav class="h-16 flex w-10/12 m-auto items-center justify-between ">
        <div id="nav-item" class="flex items-center gap-12">
            <NavigationItem v-for="item in navItems" :key="item.label" :item="item" :to="item.path" />
        </div>
    </nav>
</template>

<script setup>
import NavigationItem from "./NavigationItem.vue";
import { ref } from "vue";

const navItems = ref([
    { label: "Home", path: "/", icon: "home" },
    { label: "About", path: "/about", icon: "info" },
    { label: "Contact", path: "/contact", icon: "mail" },
    { label: "Settings", path: "/settings", icon: "settings" },
]);
</script>
  
