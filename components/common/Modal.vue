<template>
  <transition name="modal-fade">
    <div class="modal">
      <div class="modal__backdrop" @click = "close"></div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/components/common/Modal";
</style>
