import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const sort = new Vuex.Store({
  state: {
    toExpensiveKeyword: false,
    toCheapKeyword: false,
    toExpensiveBusiness: false,
    toCheapBusiness: false,
  },
  getters: {
    getToExpensiveKeyword: state => {
      return state.toExpensiveKeyword
    },
    getToCheapKeyword: state => {
      return state.toCheapKeyword
    },
    getToExpensiveBusiness: state => {
      return state.toExpensiveBusiness
    },
    getToCheapBusiness: state => {
      return state.toCheapBusiness
    },
  },
  mutations: {
    changeToExpensiveKeyword(state, showing) {

      state.toExpensiveKeyword = showing;
      state.toCheapKeyword = !showing;
    },
    changeToCheapKeyword(state, showing) {
      state.toCheapKeyword = showing;
      state.toExpensiveKeyword = !showing;
    },
    changeToExpensiveBusiness(state, showing) {
      state.toExpensiveBusiness = showing;
      state.toCheapBusiness = !showing;
    },
    changeToCheapBusiness(state, showing) {
      state.toCheapBusiness = showing;
      state.toExpensiveBusiness = !showing;
    },

  },
  actions: {
    addToExpensiveKeyword({commit}, payload) {
      commit('changeToExpensiveKeyword', payload);
    },
    addToCheapKeyword({commit}, payload) {
      commit('changeToCheapKeyword', payload);
    },
    addToExpensiveBusiness({commit}, payload) {
      commit('changeToExpensiveBusiness', payload);
    },
    addToCheapBusiness({commit}, payload) {
      commit('changeToCheapBusiness', payload);
    },
  },
});
