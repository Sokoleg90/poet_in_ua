import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'mainLayout',
        component: () => import('../components/MainLayout.vue'),
        redirect: 'main',
        children: [
            {
                path: '/',
                name: 'main',
                component: () => import('../views/Main.vue'),
            },
            {
                path: '/poets',
                name: 'poets',
                component: () => import('../views/Poets.vue'),
            },
            {
                path: '/poems',
                name: 'poems',
                component: () => import('../views/Poems.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/About.vue'),
            },
            {
                path: '/personal',
                name: 'personal.index',
                component: () => import('../views/Personal/Index.vue'),
            },
            {
                path: '/personal/create',
                name: 'personal.create',
                component: () => import('../views/Personal/Create.vue'),
            }, {
                path: '/personal/edit',
                name: 'personal.edit',
                component: () => import('../views/Personal/Edit.vue'),
            }, {
                path: '/personal/show',
                name: 'personal.show',
                component: () => import('../views/Personal/Show.vue'),
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
