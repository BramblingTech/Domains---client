<template>
  <div class="home-page__faq">
    <div class="container">
      <h2>faq</h2>
      <div class="faq-item" v-for="(item, index) in list" :key="index">
        <h4 class="faq-item__question">{{ item.question }}</h4>
        <div class="faq-item__answer"> {{ item.answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import faq from "../../../config/faq";

export default {
  name: "Faq",
  data() {
    return {
      list: faq,
    }
  },
}
</script>

<style lang="scss" scoped>
.home-page__faq {
  padding-top: 70px;
  padding-bottom: $margin_section;
  @include _1100{
    padding-bottom: $margin_section_tablet;
  }
  @include _575{
    padding-bottom: $margin_section_mobile;
  }

  .faq-item {
    margin-top: 54px;
    display: flex;
    justify-content: space-between;
    border: 1px solid $skyblue;
    padding: 24px;
    border-radius: 10px;
    @include _1100{
      margin-top:34px;
    }
    @include _575{
      flex-direction: column;
    }

    &__answer {
      width: 50%;
      @include _575{
        width:100%;
        margin-top:24px;
      }
    }

  }
}

</style>
