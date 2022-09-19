<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    title: String,
  },
  data() {
    return {
      isActive: true,
    }
  }
}
</script>

<style lang="scss" scoped>
//@import "assets/scss/components/common/Tab";
</style>
