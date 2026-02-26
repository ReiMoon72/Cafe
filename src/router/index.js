import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import Navbar from "../views/Navbar.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Menu from "../views/Menu.vue";
import Offers from "../views/Offers.vue";
import Foods from "../views/Foods.vue";
import Drinks from "../views/Drinks.vue";
import Order from "../views/Order.vue";

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
    },
    {
        path: '/offers',
        name: 'Offers',
        component: Offers 
    },
    {
        path: '/foods',
        name: 'Foods',
        component: Foods
    },
    {
        path: '/drinks',
        name: 'Drinks',
        component: Drinks 
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    }
    ]
})

export default router   