import Vue from 'vue';
import elementScrollIntoView from "seamless-scroll-polyfill";

const scrollTop = {
  install(Vue) {
    Vue.prototype.$scrolltotop = () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
  },
}

Vue.use(scrollTop);
