import HomePage from "./components/HomePage.vue"
import Login from "./components/Login.vue"
import LandingScreen from "./components/LandingScreen.vue"
import { createRouter,createWebHistory } from "vue-router"

const routes =[
    {
        name:'HomePage',
        component:HomePage,
        path:"/"
    },
    {
        name:'Login',
        component:Login,
        path:"/"
    },
    {
        name:'LandingScreen',
        component:LandingScreen,
        path:"/landingScreen"
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router