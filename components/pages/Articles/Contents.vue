<template>
  <div class="page-article__contents">
    <div class="contents-wrapper">
      <h4>Content </h4>
      <ul class="dots">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contents"
}
</script>

<style lang="scss" scoped>
@import "assets/scss/pages/Articles/Contents";
</style>
