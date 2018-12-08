import Cookies from 'js-cookie';
import { setToken, resetState } from '../../utils/user'

const app = {
  state: {
    token: ''
  },
  mutations: {
    SAVE_TOKEN: (state, payload) => {
        console.log(payload)
        state.token = payload
        setToken(payload)
        console.log('>>>>>>>>>>>>>>>>>>>>' + payload)
    }
  },
  actions: {
    saveToken: ({ commit }, payload) => {
        commit('SAVE_TOKEN', payload)
    }
  },
  getters
};

export default app;
