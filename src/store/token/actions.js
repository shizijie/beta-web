import * as types from './mutation-types'

export default {
    saveToken: ({ commit }, payload) => {
        commit(types.SAVE_TOKEN, payload)
    },
    userLogout:({commit},payload)=>{
        commit(types.USER_LOGOUT,payload)
    }
}