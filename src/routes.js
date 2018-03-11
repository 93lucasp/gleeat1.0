import Home from './components/Home.vue'
import Meals from './components/Meals.vue'

export const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/meals',
        component: Meals,
    },
    { path: '*', redirect: '/' },
]