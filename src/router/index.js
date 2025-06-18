import Aboutpage from '@/pages/Aboutpage.vue';
import Contactpage from '@/pages/Contactpage.vue';
import Homepage from '@/pages/Homepage.vue';
import Settingspage from '@/pages/Settingspage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Homepage',
        component:Homepage
    },
    {
        path: '/about',
        name: 'About',  
        component: Aboutpage
    },
    {
        path:'/contact',
        name: 'Contact',
        component: Contactpage
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