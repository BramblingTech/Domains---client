<template>
  <div class="cookies" v-if="show">
    <p>This site uses cookies to personalize your experience on our website.
      By continuing to use this site, you agree to our
      <router-link to="/privacy-policy">Cookie policy.</router-link>
    </p>
    <Blue>
      <button @click="hideCookie">Okay</button>
    </Blue>
  </div>
</template>

<script>
import Blue from "@/components/buttons/Blue";

export default {
  name: "Cookies",
  components: {Blue},
  data() {
    return {
      show: true,
    };
  },

  created() {
    const c = this.$cookies.get('visited');
    if (c === 'visited') {
      this.show = true;
    }
    if (c === 'testcookie') {
      this.show = false;
    }
  },
  methods: {
    hideCookie() {
      this.$cookies.set('visited', 'testcookie', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      });
      this.show = false;
    },
  },

}
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  left: 5px;
  bottom: 5px;
  border: 1px solid $blue;
  border-radius: 4px;
  background: #FCFCFC;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  max-width: 560px;
  z-index: 2;

  button {
    width: 54px;
    height: 34px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    @include _575{
      width:90px;
      height:44px;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-right: 20px;
    margin-top: 0;
    @include _575{
      margin-right: 35px;
      font-size: 12px;
    }

    a {
      color: $blue;
      border-bottom: 1px solid $blue;
    }
  }
}
</style>
