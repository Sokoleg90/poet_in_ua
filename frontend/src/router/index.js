import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainLayout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
