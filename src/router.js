import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import Home from "./Pages/Home";
import CAMOverflow from "./Pages/CAMOverflow";

const routeInfos = [
    { path: '/', component: Home },
    { path: '/cam/', component: CAMOverflow },
]

const router = createRouter({
    routes : routeInfos,
    mode: "hash",
    history: createWebHashHistory()
})

export default router;