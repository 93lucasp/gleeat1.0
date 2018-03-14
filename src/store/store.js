import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import meals from './modules/meals'

import { firebaseMutations } from 'vuexfire'


Vue.use(Vuex)

export const store = new Vuex.Store({
    mutations: {...firebaseMutations },
    modules: {
        users,
        meals,

    }
})