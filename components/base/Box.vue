<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Box"
}
</script>

<style lang="scss" scoped>
@import '/assets/scss/components/base/Box.scss';
</style>
