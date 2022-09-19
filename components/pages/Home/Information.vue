<template>
  <div class="home-page__information">
    <box class="left-top-right-bottom">
      <div class="container">
        <div class="two-column-content">
          <div class="left">
            <h2>WHAT IS DOMAIN NAME?</h2>
            <p>Apparently, it’s impossible to imagine the modern business world without having a website. A domain name
              is what it starts with. By choosing a new domain name, you endue your future website with an exclusive
              signature. A catchy name is easy to memorize and it also serves as a tool for gaining customers.</p>
            <p>Domains Seller offers you an opportunity to get a unique website name. Whether you are interested in
              acquiring a corporate site or an e-commerce project, it is necessary to give it a captivating domain
              name.</p>
          </div>
          <div class="right">
            <picture>
              <source srcset="/images/tablet/home-section-3.png" media="(max-width:1100px)"/>
              <img src="/images/home-section-3.png" alt="what is domain">
            </picture>
          </div>
        </div>
      </div>
    </box>
  </div>
</template>

<script>
import Box from "../../base/Box";

export default {
  name: "Three",
  components: {
    Box,
  }
}
</script>

<style lang="scss" scoped>
.home-page__information {
  .box {
    padding: 71px 0 109px 0;
    @include _1100 {
      padding: 51px 0;
    }
  }

  h2 {
    margin-bottom: 10px;
  }

  .two-column-content {
    align-items: center;
  }

  @include _1100 {
    img {
      margin-bottom: 34px;
      width: 100%;
    }
    .right {
      order: 1;
    }
    .left {
      order: 2;
    }
  }
}

</style>
