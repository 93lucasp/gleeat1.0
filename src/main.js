import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import City from './components/Meals.vue'
import App from './App.vue'

import swal from 'sweetalert';

import { routes } from './routes'
import { store } from './store/store.js'

const router = new VueRouter({
    routes,
    mode: 'history',
})
Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})