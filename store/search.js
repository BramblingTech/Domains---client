import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
    keyword: '',
    keywordResult: [],
    exampleKeyword: '',
    businessKeyword: '',
    businessResult: [],
    tlds: [],
    link: {},
    fetched: false,
  },
  getters: {
    getKeyword: state => {
      return state.keyword
    },
    getKeywordResult: state => {
      return state.keywordResult
    },
    getExampleKeyword: state => {
      return state.exampleKeyword
    },
    getBusinessKeyword: state => {
      return state.businessKeyword
    },
    getBusinessResult: state => {
      return state.businessResult
    },
    getTlds: state => {
      return state.tlds
    },
    getLink: state => {
      return state.link
    },
    getFetched: state => {
      return state.fetched
    },
  },
  mutations: {
    addKeyword(state, text) {
      state.keyword = text;
    },
    addKeywordResult(state, data) {
      state.keywordResult = data;
    },
    addExampleKeyword(state, data) {
      state.exampleKeyword = data;
    },
    addBusinessKeyword(state, data) {
      state.businessKeyword = data;
    },
    addBusinessResult(state, data) {
      state.businessResult = data;
    },
    addTlds(state, data) {
      state.tlds = data;
    },
    addLink(state, data) {
      state.link = data;
    },
    addFetched(state, data) {
      state.fetched = data;
    },
  },
  actions: {
    addKeyword({commit}, payload) {
      commit('addKeyword', payload);
    },
    addKeywordResult({commit}, payload) {
      commit('addKeywordResult', payload);
    },
    addExampleKeyword({commit}, payload) {
      commit('addExampleKeyword', payload);
    },
    addBusinessKeyword({commit}, payload) {
      commit('addBusinessKeyword', payload);
    },
    addBusinessResult({commit}, payload) {
      commit('addBusinessResult', payload);
    },
    addTlds({commit}, payload) {
      commit('addTlds', payload);
    },
    addLink({commit}, payload) {
      commit('addLink', payload);
    },
    addFetched({commit}, payload) {
      commit('addFetched', payload);
    },
  },
});
