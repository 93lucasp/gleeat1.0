import { firebaseAction } from 'vuexfire'
const state = {
    currentUser: null,
    currentUserId: null,
    currentUserName: null,
    users: []
}
const getters = {
    currentUser: state => state.currentUser,
    currentUserId: state => state.currentUserId,
    currentUserName: state => state.currentUserName,
    getUsers: state => state.users

}
const mutations = {
    userStatus(state, user) {
        if (user) {
            state.currentUser = user
            state.currentUserId = user.uid
            state.currentUserName = user.displayName
        } else {
            state.currentUser = null
            state.currentUserId = null
            state.currentUserName = null
        }
    }

}
const actions = {
    setUsersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('users', ref)
    }),
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