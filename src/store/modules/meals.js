import { firebaseAction } from 'vuexfire'

const state = {
    meals: [],
}
const getters = {
    getMeals: state => state.meals

}
const mutations = {

}
const actions = {
    setMealsRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('meals', ref)
    })
}

export default {
    state,
    mutations,
    getters,
    actions,
}