<template>
  <div class="preloader" v-if="show">
    <img class="icon" src="/icons/preloader.svg" alt="">
  </div>
</template>

<script>

import {preloader} from "~/store/preloader";

export default {
  data() {
    return {
      show: false,
    }
  },
  computed: {
    preloader() {
      return preloader.getters.getPreloaderState
    },
  },
  watch: {
    preloader(val) {
      this.show = val;
    },
  }
}

</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.icon {
  width: 32px;
  height: 32px;
  color: #EEF7D1;
  animation: preloader 1s linear infinite;
}

@keyframes preloader {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
