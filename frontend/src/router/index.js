import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "../components/MainLayout.vue";
import About from "../views/About.vue";
import Main from "../views/Main.vue";
import NotFound from "../views/NotFound.vue";
import Poets from "../views/Poets.vue";
import Poems from "../views/Poems.vue";

const routes = [
    {
        path: '/',
        name: 'mainLayout',
        component: MainLayout,
        redirect: 'main',
        children: [
            {
                path: '/main',
                name: 'main',
                component: Main,
            },
            {
                path: '/poets',
                name: 'poets',
                component: Poets,
            },
            {
                path: '/poems',
                name: 'poems',
                component: Poems,
            },
            {
                path: '/about',
                name: 'about',
                component: About,
            },

        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
