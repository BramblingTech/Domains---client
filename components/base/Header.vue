<template>
  <header>
    <div class="container">
      <a @click="back" class="go-back" v-if="show || getBackState">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7143 14.4753C12.0186 14.7796 12.0186 15.2729 11.7143 15.5771C11.4101 15.8814 10.9168 15.8814 10.6125 15.5771L4.37956 9.3442C4.0753 9.03994 4.0753 8.54663 4.37956 8.24237L10.6125 2.00945C10.9168 1.70518 11.4101 1.70518 11.7143 2.00945C12.0186 2.31371 12.0186 2.80702 11.7143 3.11128L6.03238 8.79322L11.7143 14.4753Z"
                fill="#393E46"/>
        </svg>
        <span>Go back</span>
      </a>
      <Logo/>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import {store} from "@/store/search";
import {back} from "@/store/back";

export default {
  name: "Header",
  data() {
    return {
      show: false,
    }
  },
  computed: {
    getBackState() {
      return back.getters.getBack
    },
  },
  created() {
    if (this.$route.name === 'buy-domain') {
      this.show = true;
    }
  },
  watch: {
    $route(to, from) {
      this.show = this.$route.name === 'buy-domain';
    }
  },
  components: {
    Logo,
  },
  methods: {
    back() {
      if (this.$route.name === 'buy-domain') {
        store.dispatch('addFetched', false)
      }
      store.dispatch('addBackState', false);
      history.back();
    },
  },
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/components/base/Header.scss";
</style>
