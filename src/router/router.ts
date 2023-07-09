import Index from "../pages/index.vue";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', name: "Index", component: Index},
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})