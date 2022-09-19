<template>
  <div class="domain-item">
    <div class="domain-item__info">
      <div class="title">
        <div class="text">{{ title }}</div>
<!--        <div class="text-2">(Available on godaddy.com)</div>-->
      </div>
      <div class="price">{{ price }}</div>
    </div>
    <div class="domain-item__button">
      <Skyblue @click.native="$emit('clickHandler')">
        <button>Buy</button>
      </Skyblue>
    </div>
  </div>
</template>

<script>
import Skyblue from "../../buttons/Skyblue";

export default {
  name: "DomainItem",
  props: {
    title: String,
    price: String,
  },
  components: {
    Skyblue,
  }
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/pages/Search/DomainItem";
</style>
