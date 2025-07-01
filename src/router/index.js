
import Authorpage from '@/pages/Authorpage.vue';
import Bookpage from '@/pages/Bookpage.vue';
import Homepage from '@/pages/Homepage.vue';
import Memberpage from '@/pages/Memberpage.vue';
import Settingspage from '@/pages/Settingspage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Home',
        component:Homepage
    },
    {
        path: '/book',
        name: 'Book',
        component:Bookpage
    },
    {
        path: '/author',
        name: 'Author',  
        component: Authorpage
    },
    {
        path:'/Member',
        name: 'Member',
        component: Memberpage
    },
    {
        path:'/settings',
        name: 'Settings',
        component: Settingspage
    },
]



const router = createRouter({
    'history': createWebHistory(),
    routes
});
export default router;