<template>
  <div class="home-page__bought">
    <div class="container">
      <h2>LAST PURCHASED DOMAINS</h2>
      <div class="last-bought">
        <div class="last-bought__item" v-for="(item, index) in domains " :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="flex">
            <div class="domain">{{ item.domain }}</div>
            <div class="price">{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import last_bought from '/config/last_bought'

export default {
  name: "Two",
  data() {
    return {
      domains: last_bought,
    }
  },
}
</script>

<style lang="scss" scoped>
.home-page__bought {
  padding-top: $margin_section;
  padding-bottom: 108px;
  @include _1100{
    padding-top:69px;
    padding-bottom: 98px;
  }

  h2 {
    margin-bottom: 10px;
  }

  .last-bought {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @include _1100{
      flex-direction: column;
    }

    .last-bought__item {
      width: 49%;
      display: flex;
      align-items: center;
      height: 64px;
      margin-top: 24px;
      @include _1100{
        width:100%;
      }

      .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        border: 1px solid $skyblue;
        border-radius: 0 8px 8px 0px;
        @include _575{
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .name {
        background-color: $skyblue;
        border-radius: 8px 0px 0px 8px;
        font-size: 14px;
        line-height: 19px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 124px;


      }

      .domain {
        margin-left: 15px;
        font-weight: 600;
        @include _575{
          margin-left: 25px;
          font-size: 17px;
          line-height: 160%;
        }
      }

      .price {
        font-weight: 600;
        padding-right: 17px;
        @include _575{
          margin-left: 25px;
          font-size: 17px;
          line-height: 160%;
        }
      }
    }
  }
}

</style>
