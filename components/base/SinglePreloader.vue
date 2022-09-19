<template>
  <div class="preloader" v-if="show">
    <img class="icon" src="/icons/preloader.svg" alt="">
  </div>
</template>

<script>

export default {
  props: {
    show: false,

  },
}

</script>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  top: -50%;
  left: -50%;
  transform: translate(50%, 50%);
  z-index: 100;
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
