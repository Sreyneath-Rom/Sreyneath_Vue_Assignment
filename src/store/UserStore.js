import { defineStore } from 'pinia';
import { ref } from 'vue';
import http from '@/api/axios';

export const UserStore = defineStore('user', () => {
    const user = ref({
        id: null,
        name: '',
        email: '',
        // Add more default fields if needed
    });

    async function fetchCurrentUser() {
        try {
            const response = await http.get('/api/user');
            user.value = response.data.user || response.data; // adjust if needed
        } catch (error) {
            console.error('Failed to fetch current user:', error);
        }
    }

    async function updateUser(updatedData) {
        try {
            const response = await http.put('/api/user', updatedData);
            user.value = response.data.user || response.data;
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Failed to update user:', error);
            alert('Failed to update profile.');
        }
    }

    return {
        user,
        fetchCurrentUser,
        updateUser,
    };
});
