import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const BookStore = defineStore("book", () => {
    const books = ref([]);
    const isLoading = ref(false);

    const countBooks = computed(() => books.value.length);

    async function fetchBooks() {
        isLoading.value = true;
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/books");
            books.value = response.data.books || response.data.data || [];
        } catch (error) {
            console.error("Failed to fetch books:", error);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        books,
        isLoading,
        countBooks,
        fetchBooks,
    };
});
