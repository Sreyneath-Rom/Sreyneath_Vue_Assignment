<template>
  <div>
    <button
      @click="toggle"
      :aria-expanded="isExpanded.toString()"
      class="mt-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 flex justify-center items-center text-sm font-medium"
    >
      {{ isExpanded ? 'Hide details' : 'See more' }}
    </button>

    <div v-if="isExpanded" class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

function toggle() {
  isExpanded.value = !isExpanded.value
}
</script>
