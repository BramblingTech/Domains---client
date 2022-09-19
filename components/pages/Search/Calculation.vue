<template>
  <div class="page-search__calculation">
    <div class="container">
      <div class="parallax-heading" ref="parallax">
        PROSPECTS CALCULATION AND FREE CONSULTATIONS
      </div>

    </div>
    <Box class="left-top">
      <div class="container">
        <div class="observer" ref="observer"></div>
        <div class="two-column-content">
          <div class="left">
            <p>Buying a new domain is an easy process, but to choose one can be tricky. If you decide to find a cool
              domain for your future or existing business, we are here to help you with creating one from scratch. Apply
              now to get your free instructions and web site design options for the domain you’ve chosen.</p>

            <Email @mailHandler="mailHandler"/>
          </div>
          <div class="right">
            <picture>
              <source srcset="/images/Iphone-mob.svg" media="(max-width:575px)">
              <img src="/images/Iphone.svg" alt="">
            </picture>

            <h3>you ask questions - we have answers</h3>
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>

<script>

import Box from "../../base/Box";
import Email from "../../common/Email";
import sendMail from "@/mail/SendMail";


export default {
  name: "Calculation",
  data() {
    return {
      height: null,
    }
  },
  components: {
    Box,
    Email,
  },
  mounted() {
    const elem = this.$refs.parallax;
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const top = elem.style.top;
    const IntersectionCallback = function (entries, observer) {

      if (entries[0].isIntersecting) {
        elem.style.top = '0px';
      } else {
        elem.style.top = top;
      }

    }
    const observer = new IntersectionObserver(IntersectionCallback, options);
    observer.observe(this.$refs.observer);
  },
  methods: {
    mailHandler(mail) {
      sendMail(mail, 'consultation');
    }
  },

}
</script>

<style lang="scss" scoped>
.page-search__calculation {
  .box .container {
    position: relative;

    .observer {
      position: absolute;
      top: 150px;
    }
  }

  .parallax-heading {
    font-family: 'Bebas Neue', cursive;
    font-size: 78px;
    line-height: 94px;
    position: relative;
    top: 30px;
    transition: 0.4s linear;
    @media (max-width: 1540px) {
      font-size: 68px;
      margin-left: 20px;
    }
    @include _1100 {
      font-size: 40px;
      line-height: 53px;
      letter-spacing: 0.03em;
      top: 17px;
    }

    @include _990 {
      font-size: 32px;

    }
    @include _575 {
      font-size: 24px;
      line-height: 28px;
      margin-left: 0;
      top: 8px;
      letter-spacing: 0.02em;
    }
    @media(max-width: 428px) {
      font-size: 21px;
    }
    @media(max-width: 380px) {
      font-size: 19px;
    }
  }

  p {
    margin-bottom: 34px;
    margin-top: 84px;
    @include _1100 {
      margin-top: 10px;
    }
  }

  .box {

    z-index: 2;
  }

  .two-column-content {
    padding-top: 70px;
    padding-bottom: 100px;
    @include _1100 {
      padding-bottom: $margin_section_tablet;
    }
    @include _575 {
      padding-bottom: $margin_section_mobile;
      padding-top: 44px;
    }
  }

  .left {
    @include _1100 {
      order: 2;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 48%;
    @include _1100 {
      order: 1;
      width: 100%;
    }

    h3 {
      z-index: 2;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 51%;
      transform: translate(-50%, -50%);
      text-align: right;
      @include _1366 {
        font-size: 34px;
      }
      @include _1100 {
        text-align: center;
      }
      @include _575 {
        font-size: 22px;
        line-height: 26px;
      }
    }

  }
}

</style>
