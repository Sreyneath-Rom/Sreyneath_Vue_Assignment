<template>
    <router-link :to="item.path"
        class="flex items-center gap-2 px-3 py-2 border-b-2 border-transparent transition-all duration-300" :class="isActive
            ? 'border-sky-900 text-sky-600 font-semibold'
            : 'hover:border-sky-600 hover:text-blue-500 text-gray-700'">
        <span class="material-symbols-outlined" :class="isActive ? 'text-sky-600' : 'text-gray-500'">
            {{ item.icon }}
        </span>
        <span>{{ item.label }}</span>
    </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps(['item'])
const route = useRoute()

const isActive = computed(() => route.path === props.item.path)
</script>
  
