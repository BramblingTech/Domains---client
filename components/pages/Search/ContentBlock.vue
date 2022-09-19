<template>
  <div class="page-search__content">
    <div class="container">
      <div class="two-column-content">
        <div class="left">
          <h2>Before you start. How to unleash the potential of your online business?</h2>
          <p>Deciding to invest in a domain name, you decide to spend on a new business idea or to improve your existing
            one by bringing it online. But how to make sure it is successful? Behind any top tier web site there’s
            always a team of experts that provides recommendations for maintenance and optimization.</p>
        </div>
        <div class="right">
          <picture>
            <source srcset="/images/tablet/search-page-1.png" media="(max-width:1100px)">
            <img src="/images/search-page-1.png" alt="">
          </picture>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock"
}
</script>

<style lang="scss" scoped>
.page-search__content {
  padding-bottom: 88px;
  @include _1100 {
    padding-bottom: $margin_section_tablet;
  }
  @include _575 {
    padding-bottom: $margin_section_mobile;
  }

  h2 {
    margin-bottom: 10px;
  }

  .two-column-content {
    align-items: center;
    @include _1100 {

      .left {
        order: 2;
      }
      .right {
        order: 1;

        img {
          width: 100%;
          margin-bottom: 44px;
        }
      }
    }
  }
}
</style>
