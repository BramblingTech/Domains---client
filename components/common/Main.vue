<template>
  <div class="home-page__main">
    <box class="left-bottom">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <search/>
      </div>
    </box>
  </div>
</template>

<script>

import Box from "../base/Box";
import Search from "../search/Search";

export default {
  name: "One",
  props: {
    title: String,
    text: '',
  },
  components: {
    Box,
    Search,
  }
}
</script>

<style lang="scss" scoped>
.home-page__main {
  p {
    text-align: center;
    margin: 44px auto;
    width: 50%;
    @include _1100{
      width:90%;
    }
  }

  .box {
    padding: 83px 0;
  }
}

</style>
