<template>
  <div class="page-article__main">
    <Box class="left-bottom" >
      <div class="container">
        <div class="two-column-content">
          <div class="left">
            <h1>{{ title }}</h1>
            <div class="article-time">
              <div class="date">{{ date }}</div>
              <div class="time">{{ time }}</div>
            </div>

          </div>
          <div class="right">
            <img :src="poster" alt="">
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script>

import Box from "../../base/Box";


export default {
  name: "Main",
  props: {
    title: String,
    date: String,
    time: String,
    poster: String,
  },
  components: {
    Box,
  },
}
</script>

<style lang="scss" scoped>

@import "assets/scss/pages/Articles/Main";
</style>
