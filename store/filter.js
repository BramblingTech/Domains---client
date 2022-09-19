import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const filter = new Vuex.Store({
  state: {
    endings: [],
    min: null,
    max: null,
  },
  getters: {
    getEndings: state => {
      return state.endings
    },
    getMin: state => {
      return state.min
    },
    getMax: state => {
      return state.max
    },
  },
  mutations: {
    changeEndings(state, showing) {
      state.endings = showing;
    },
    changeMin(state, showing) {
      state.min = showing;
    },
    changeMax(state, showing) {
      state.max = showing;
    },
  },
  actions: {
    addEndings({commit}, payload) {
      commit('changeEndings', payload);
    },
    addMin({commit}, payload) {
      commit('changeMin', payload);
    },
    addMax({commit}, payload) {
      commit('changeMax', payload);
    },
  },
});
