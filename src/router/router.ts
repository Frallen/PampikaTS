import {createRouter, createWebHistory} from 'vue-router'
import Index from "../pages/Index.vue";
import Cast from "../pages/Cast.vue";
const routes = [
    {
        path: "/characters", name: "characters", component: Cast
    },
    {
        path: "/", name: "index", component: Index
    },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})