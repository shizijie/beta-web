import Vue from 'vue';
import Vuex from 'vuex';
// import app from './modules/app';
// import user from './modules/user';
// import permission from './modules/permission';
//import getters from './getters';
//import actions from './modules/actions'
//import mutation from './modules/mulations'
import token from './token'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // app,
    // user,
    // permission,
    //actions,
    //mutation,
    token
  }//,
  //getters
});

export default store
