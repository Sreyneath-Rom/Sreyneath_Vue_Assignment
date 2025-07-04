import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const UserStore = defineStore('user', () => {
    const users = ref([
        {
            name: 'nani',
            email: 'nani@gmail.com',
        },
        {
            name: 'sreyneath',
            email: 'sreyneath@gmail.com '
        }
 
    ]);
    const countUser = computed(() => {
        return users.value.length;
    });

   return{
        users,
        countUser
    }
})