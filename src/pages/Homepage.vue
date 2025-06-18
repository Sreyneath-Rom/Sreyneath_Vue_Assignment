<template>
    <div>
        <h1 class="text-3xl font-bold text-center mt-10">Welcome to the Homepage</h1>
        <p class="text-center mt-4">This is the main page of our application.</p>
        <div class="flex justify-center mt-8">
            <!-- You can add something here if needed -->
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div class="bg-blue-100 shadow-md rounded-lg p-6 cursor-pointer 
               hover:bg-blue-200 active:bg-blue-300 transition-colors duration-300">
            <h2 class="text-xl font-semibold mb-2 text-blue-800">Card Title 1</h2>
            <p class="text-blue-700">This is a description for card 1.</p>
        </div>

        <div class="bg-green-100 shadow-md rounded-lg p-6 cursor-pointer 
               hover:bg-green-200 active:bg-green-300 transition-colors duration-300">
            <h2 class="text-xl font-semibold mb-2 text-green-800">Card Title 2</h2>
            <p class="text-green-700">This is a description for card 2.</p>
        </div>

        <div class="bg-pink-100 shadow-md rounded-lg p-6 cursor-pointer 
               hover:bg-pink-200 active:bg-pink-300 transition-colors duration-300">
            <h2 class="text-xl font-semibold mb-2 text-pink-800">Card Title 3</h2>
            <p class="text-pink-700">This is a description for card 3.</p>
        </div>
    </div>
</template>
  
<script setup></script>
