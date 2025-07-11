import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const UserStore = defineStore('user', () => {
    const users = ref([]);

    const countUser = computed(() => {
        return users.value.length;
    });

    async function fetchUsers() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users');
            // Adjust depending on your API response
            users.value = response.data.users || response.data.data || [];
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    }

    return {
        users,
        countUser,
        fetchUsers,
    };
});
