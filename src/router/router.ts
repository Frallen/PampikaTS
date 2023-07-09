import Cast from "../pages/Cast.vue";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/characters", name: "characters", component: Cast
    },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})