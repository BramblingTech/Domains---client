import Vue from 'vue';
import elementScrollIntoView from "seamless-scroll-polyfill";



Vue.use(elementScrollIntoView);
Vue.component('elementScrollIntoView', elementScrollIntoView);
