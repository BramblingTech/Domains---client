<template>
  <NuxtLink :to = "link"  class="blog-item">
    <div class="blog-item__poster">
      <img :src="image" alt="">
    </div>
    <div class="blog-item__content">
      <div class="blog-item__title">{{ title }}</div>
      <div class="blog-item__info">
        <div class="blog-item__date"> {{ date }}</div>
        <div class="blog-item__time"> {{ time }}</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    image: String,
    title: String,
    date: String,
    time: String,
    link: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/BlogItem';
</style>
