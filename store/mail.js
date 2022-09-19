import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const modalMail = new Vuex.Store({
  state: {
    modalState: false,
  },
  getters: {
    getModal: state => {
      return state.modalState
    },
  },
  mutations: {
    changeModalMail(state, data) {
      state.modalState = data;
    },
  },
  actions: {
    addModalMailState({commit}, payload) {
      commit('changeModalMail', payload);
    },
  },
});
