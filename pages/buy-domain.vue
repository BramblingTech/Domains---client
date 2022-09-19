<template>
  <div class="page-buy">
    <div class="container">
      <div class="two-column-content">
        <div class="left">
          <h1>{{ getLinkDomain.name }}</h1>
          <h3>{{ getLinkDomain.price }}/year</h3>
          <Box class="left-top-right-bottom">
            <div class="container">
              <div class="two-columns-content">
                <div class="left">
                  <p>Get a FREE logo for your new domain created by designer.</p>
                  <p>Type your email and we will contact to you soonest</p>
                  <Email @mailHandler="mailHandler"/>
                </div>
              </div>
            </div>
          </Box>
          <div class="content">
            <p>Or, you can skip this step and proceed to the godaddy.com</p>
            <Blue>
              <a :href="link">Buy this domain</a>
            </Blue>
          </div>

        </div>
        <div class="right">
          <img src="/images/page-buy-domain.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "../components/base/Box";
import Email from "../components/common/Email";
import Blue from "../components/buttons/Blue";
import {store} from "@/store/search";
import {preloader} from "@/store/preloader";
import sendMail from "@/mail/SendMail";

export default {
  name: "buy-domain",
  components: {
    Box,
    Email,
    Blue,
  },
  data() {
    return {
      link: '',
    }
  },
  computed: {
    getLinkDomain() {
      return store.getters.getLink
    },
  },
  created() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', true)
    }, 1)
  },
  mounted() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', false)
    }, 500)
    if (!this.getLinkDomain.name || !this.getLinkDomain.price) {
      this.$nuxt.$options.router.push('/');
    }
    this.link = `https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${this.getLinkDomain.name}`;
  },
  methods: {
    mailHandler(mail) {
      sendMail(mail, 'logo');
    }
  },
  head: {
    title: 'Buy domain - domainseller.com',
    meta: [
      {
        name: 'description',
        content: "Get a FREE logo for your new domain created by designer."
      },
      {
        name: "title",
        content: 'Buy domain'
      }
    ],
  }
}
</script>

<style lang="scss" scoped>
.page-buy {
  padding-top: 82px;
  padding-bottom: 150px;
  position: relative;
  @include _1100 {
    padding-top: 186px;
  }

  .container {
    @include _1100 {
      max-width: 100%;
      padding: 0;
    }
  }
  .content {
    @include _575{
      padding-left:16px;
      padding-right: 16px;
      text-align: center;
    }
  }

  h3 {
    margin-top: 34px;
    @include _1100 {
      text-align: center;
      margin-bottom: 50px;
    }
  }

  .box {
    margin: 54px 0;
    padding: 28px 0;
    @media(min-width: 1101px) {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-95%);
    }
    @include _1100 {
      padding: 26px 50px;
    }

    p {
      font-weight: 600;
      font-size: 18px;
      margin-top: 0;
      @include _1100 {
        text-align: center;
      }
    }
  }

  img {
    position: relative;
    z-index: 2;
    @include _1100 {
      display: none;
    }
  }

  h1 {
    text-align: left;
    margin-top: 60px;
    @include _1100 {
      text-align: center;
      margin-top: 0;
      font-size: 42px;
      line-height: 50px;
    }
  }

  .btn-blue {
    margin-top: 24px;
  }

  .content {
    margin-top: 308px;
    @include _1100 {
      margin-top: 54px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      margin-top: 0;
    }
  }

  .right {
    position: relative;
  }

  .mail-form {
    margin-top: 24px;
    @include _1100 {
      margin: 24px auto 0 auto;
    }

  }

}

</style>
