import Vue from 'vue';

const bodyLock = {
  install(Vue) {

    // const toTop = document.getElementsByClassName('to-top')[0];

    Vue.prototype.$lockBody = () => {

      document.body.style.overflow = "hidden";
      document.body.style.padding = `0 ${+window.innerWidth - document.documentElement.clientWidth}px 0 0`;
      // toTop.style.right = `${40 + scrollbarwidth}px`;

    };
    Vue.prototype.$unlockBody = () => {

      document.body.style.overflow = "auto";
      document.body.style.padding = `0 0 0 0`;
      // toTop.style.right = `40px`;

    };
  },
}
Vue.use(bodyLock)
export default bodyLock
