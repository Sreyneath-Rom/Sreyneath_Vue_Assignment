import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/auth/Login.vue';
import Register from '@/pages/auth/Register.vue';
import Homepage from '@/pages/Homepage.vue';
import Bookpage from '@/pages/Bookpage.vue';
import Authorpage from '@/pages/Authorpage.vue';

import Settingspage from '@/pages/Settingspage.vue';

const routes = [
    
    {
        path: '/',
        redirect: '/login', // Redirect root path to login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/home',
        name: 'Home',
        component: Homepage,
        meta: { requiresAuth: true },
    },
    {
        path: '/book',
        name: 'Book',
        component: Bookpage,
        meta: { requiresAuth: true },
    },
    {
        path: '/author',
        name: 'Author',
        component: Authorpage,
        meta: { requiresAuth: true },
    },
  
    {
        path: '/settings',
        name: 'Settings',
        component: Settingspage,
        meta: { requiresAuth: true },
    },
    // Optional: catch-all route for 404 Not Found
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// ✅ Global navigation guard to protect routes
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
