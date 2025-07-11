import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const AuthorStore = defineStore("author", () => {
    const authors = ref([]);

    async function fetchAuthors() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/authors");
            // Adjust structure depending on backend
            authors.value = response.data.authors || response.data.data || [];
        } catch (error) {
            console.error("Failed to fetch authors:", error);
            authors.value = []; // fallback so it won't stay undefined
        }
    }

    const countAuthor = computed(() => {
        return authors.value ? authors.value.length : 0;
    });

    return {
        authors,
        countAuthor,
        fetchAuthors,
    };
});
