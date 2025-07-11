<template>
  <div class="w-11/12 mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center flex-wrap gap-4">
      <h1 class="text-3xl font-bold text-left mt-5 ml-5">Book Page</h1>
      <Search v-model="searchQuery" />
      <Category :categories="categories" v-model:selectedCategory="selectedCategory" />
    </div>

    <div class="text-center mt-6 text-lg font-medium">
      Total books: {{ filteredBooks.length }}
    </div>

    <div v-if="store.isLoading" class="text-center text-gray-500 mt-10">Loading books...</div>

    <div v-else>
      <div v-if="filteredBooks.length === 0" class="text-center text-gray-500 mt-10">No books found.</div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div
          v-for="book in filteredBooks"
          :key="book.id"
          class="bg-white rounded-2xl shadow-md p-6 border border-sky-100 hover:border-sky-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <img
            v-if="book.cover_image"
            :src="book.cover_image"
            :alt="`Cover image for ${book.title}`"
            class="w-full h-48 rounded-xl mb-4 object-cover border-4 border-indigo-500"
          />

          <h2 class="text-xl font-bold mb-2 text-sky-700">{{ book.title }}</h2>
          <p class="text-yellow-600 font-medium mb-2">
            <span class="font-medium">Author:</span> {{ book.author_name || 'Unknown' }}
          </p>

          <ShowDetails>
            <p class="text-gray-500 mb-2">
              <span class="font-medium">Categories:</span>
              <template v-if="book.categories && book.categories.length">
                <span v-for="(cat, idx) in book.categories" :key="cat.id">
                  {{ cat.name }}<span v-if="idx < book.categories.length - 1">, </span>
                </span>
              </template>
              <span v-else>None</span>
            </p>

            <p class="text-gray-500 mb-2">
              <span class="font-medium">Published:</span> {{ book.published_at }}
            </p>
            <p class="text-gray-600 text-sm mt-2">
              <span class="font-medium">Summary:</span> {{ book.summary }}
            </p>
          </ShowDetails>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ShowDetails from '@/components/ShowDetails.vue'
import Search from '@/components/Search.vue'
import Category from '@/components/CategoryFilter.vue'
import { BookStore } from '@/store/BookStore'

const store = BookStore()

const searchQuery = ref('')
const selectedCategory = ref('All')
const categories = ['All', 'Fiction', 'Science Fiction', 'Mystery', 'Programming']

// Computed filtered books from store.books
const filteredBooks = computed(() => {
  return (store.books || []).filter(book => {
    const matchesCategory = selectedCategory.value === 'All' || (book.categories && book.categories.some(cat => cat.name === selectedCategory.value))
    const searchLower = searchQuery.value.toLowerCase()
    const matchesSearch =
      book.title?.toLowerCase().includes(searchLower) ||
      book.author_name?.toLowerCase().includes(searchLower) ||
      String(book.id).includes(searchLower)
    return matchesCategory && matchesSearch
  })
})

onMounted(() => {
  store.fetchBooks()
})
</script>
