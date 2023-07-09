import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/characters", name: "characters", component: import('../pages/Cast.vue')
    },
    {
        path: "/", name: "index", component: import('../pages/Index.vue')
    },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})