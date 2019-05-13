import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    breadArray: [{name: '首页', path: '/index/mainpage'}]
  },
  mutations: {
    updateBreadArray (state, arr) {
      const temp = {name: '首页', path: '/index/mainpage'};
      arr.unshift(temp);
      state.breadArray = arr;
    }
  },
  getters: {
    getBreadArray: state => state.breadArray
  }
});
export default store;
