import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import Navbar from "../views/Navbar.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Menu from "../views/Menu.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/navbar',
        name: 'Navbar',
        component: Navbar
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu
    }
    ]
})

export default router   