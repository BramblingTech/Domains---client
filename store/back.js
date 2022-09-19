import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const back = new Vuex.Store({
  state: {
    backState: false,
  },
  getters: {
    getBack: state => {
      return state.backState
    },
  },
  mutations: {
    changeBack(state, data) {
      state.backState = data;
    },
  },
  actions: {
    addBackState({commit}, payload) {
      commit('changeBack', payload);
    },
  },
});
