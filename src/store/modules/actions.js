import * as types from './mutation-types'

export default {
    actions: {
        saveToken({ commit }, payload) {
            commit(types.SAVE_TOKEN, payload)
        }
    }
}