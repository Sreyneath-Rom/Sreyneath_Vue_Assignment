<template>
  <div class="w-11/12 mx-auto">
    <!-- Header Section -->
    <div class="flex justify-between items-center flex-wrap gap-4">
      <h1 class="text-3xl font-bold text-left mt-5 ml-5">Book Page</h1>
      <Search v-model="searchQuery" />
      <CategoryFilter
        :categories="categories"
        v-model:selectedCategory="selectedCategory"
      />
    </div>

    <div class="text-center mt-6 text-lg font-medium">
      Total books: {{ filteredBooks.length }}
    </div>

    <div
      v-if="store.isLoading"
      class="flex flex-col gap-4 w-full items-center justify-center mt-10"
    >
      <div
        class="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin flex items-center justify-center"
      >
        <div
          class="w-12 h-12 border-4 border-red-400 border-t-transparent rounded-full animate-spin"
        ></div>
      </div>
      <p class="text-gray-500 text-center mt-2">Loading books...</p>
    </div>

    <div v-else>
      <div
        v-if="filteredBooks.length === 0"
        class="text-center text-gray-500 mt-10"
      >
        No books found.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div
          v-for="book in filteredBooks"
          :key="book.id"
          class="bg-white rounded-2xl shadow-md p-6 border border-sky-100 hover:border-sky-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <img
            v-if="book.cover_image"
            :src="
              book.cover_image ||
              'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
            "
            :alt="`Cover image for ${book.title}`"
            class="w-full h-48 rounded-xl mb-4 object-cover border-4 border-indigo-500"
          />

          <h2 class="text-xl font-bold mb-2 text-sky-700">{{ book.title }}</h2>
          <p class="text-yellow-600 font-medium mb-2">
            <span class="font-medium">Author:</span>
            {{ book.author_name || "Unknown" }}
          </p>

          <ShowDetails>
            <p class="text-gray-500 mb-2">
              <span class="font-medium">Categories:</span>
              <template v-if="book.categories && book.categories.length">
                <span v-for="(cat, idx) in book.categories" :key="cat.id">
                  {{ cat.name
                  }}<span v-if="idx < book.categories.length - 1">, </span>
                </span>
              </template>
              <span v-else>None</span>
            </p>

            <p class="text-gray-500 mb-2">
              <span class="font-medium">Published:</span>
              {{ book.published_at }}
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
import { ref, computed, onMounted } from "vue";
import ShowDetails from "@/components/ShowDetails.vue";
import Search from "@/components/Search.vue";
import { BookStore } from "@/store/BookStore";
import CategoryFilter from '@/components/CategoryFilter.vue'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = [
  "All",
  "Fiction",
  "Non-fiction",
  "Science Fiction",
  "Mystery",
  "Romance",
  "Biography",
  "History",
  "Science",
  "Programming"
]


// Example books array for demonstration
const books = ref([
  { title: 'Vue Basics', category: 'Programming' },
  { title: 'The Mystery Island', category: 'Mystery' },
  { title: 'Advanced Vue', category: 'Programming' },
  { title: 'Space Adventures', category: 'Science' }
])
// Computed filtered books from store.books
const filteredBooks = computed(() => {
  return (store.books || []).filter((book) => {
    const matchesCategory =
      selectedCategory.value === "All" ||
      (book.categories &&
        book.categories.some((cat) => cat.name === selectedCategory.value));
    const searchLower = searchQuery.value.toLowerCase();
    const matchesSearch =
      book.title?.toLowerCase().includes(searchLower) ||
      book.author_name?.toLowerCase().includes(searchLower) ||
      String(book.id).includes(searchLower);
    return matchesCategory && matchesSearch;
  });
});



const store = BookStore();




onMounted(() => {
  store.fetchBooks();
});
</script>
