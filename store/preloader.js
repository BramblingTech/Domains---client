import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const preloader = new Vuex.Store({
  state: {
    showPreloader: false,
  },
  getters: {
    getPreloaderState: state => {
      return state.showPreloader
    },
  },
  mutations: {
    changePreloaderState(state, showing) {
      state.showPreloader = showing;
    },
  },
  actions: {
    addPreloaderState({commit}, payload) {
      commit('changePreloaderState', payload);
    },
  },
});
