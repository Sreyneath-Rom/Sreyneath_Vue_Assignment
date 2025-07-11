<template>
  <div>
    <h1 class="text-3xl font-bold text-center mt-10">Author Page</h1>
    <p class="text-center mt-4 text-gray-600">
      This page displays author information and allows management of authors.
    </p>

    <div class="text-center mt-6 text-lg font-medium">
      Total authors: {{ authorStore.countAuthor }}
    </div>

    <div v-if="authorStore.isLoading" class="text-center mt-10 text-gray-500">
      Loading authors...
    </div>

    <div v-else>
      <div v-if="authorStore.authors.length === 0" class="text-center mt-10 text-gray-500">
        No authors found.
      </div>

      <div
        v-else
        class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="author in authorStore.authors"
          :key="author.id"
          class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            v-if="author.profile_picture"
            :src="author.profile_picture"
            :alt="`Profile picture of ${author.name}`"
            class="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-500"
          />
          <h2 class="font-bold text-lg mb-1">{{ author.name }}</h2>
          <p class="text-gray-500 text-sm mb-2 break-words">{{ author.email }}</p>

          <ShowDetails>
            <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ author.biography }}</p>
            <a
              v-if="author.website"
              :href="author.website"
              target="_blank"
              rel="noopener noreferrer"
              class="text-indigo-500 hover:underline text-sm mb-1"
            >
              Website
            </a>
            <p v-if="author.social_links" class="text-gray-500 text-sm break-words">{{ author.social_links }}</p>
          </ShowDetails>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { AuthorStore } from "@/store/AuthorStore";
import ShowDetails from "@/components/ShowDetails.vue";

const authorStore = AuthorStore();

onMounted(() => {
  authorStore.fetchAuthors();
});
</script>
