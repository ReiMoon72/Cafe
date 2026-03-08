import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import ('../views/Home.vue')
    },
    {
        path: '/navbar',
        name: 'Navbar',
        component: () => import ("../views/Navbar.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import ("../views/About.vue")
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import ("../views/Contact.vue")
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import ("../views/Menu.vue")
    },
    {
        path: '/offers',
        name: 'Offers',
        component: () => import ("../views/Offers.vue") 
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import ("../views/Order.vue")
    },
    {
        path: '/footer',
        name: 'Footer',
        component: () => import ("../views/Footer.vue")
    }
    ]
})

export default router   