const state = {
    currentUser: null,
    currentUserId: null
}
const getters = {
    currentUser: state => state.currentUser,
    currentUserId: state => state.currentUserId

}
const mutations = {
    userStatus(state, user) {
        if (user) {
            state.currentUser = user
            state.currentUserId = user.uid
        } else {
            state.currentUser = null
            state.currentUserId = null
        }
    }

}
const actions = {
    setUser(context, user) {
        context.commit('userStatus', user)
    }
}

export default {
    state,
    mutations,
    getters,
    actions,
}