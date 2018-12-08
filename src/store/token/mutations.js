import * as types from './mutation-types'
import { setToken, resetState } from '../../utils/user'

export default {
    [types.SAVE_TOKEN] (state, payload) {
        state.token = payload
        setToken(payload)
    },
    [types.USER_LOGOUT] (state,payload){
        resetState(state)
        window.localStorage.clear()
    }
  }
