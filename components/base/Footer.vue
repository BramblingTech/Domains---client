<template>
  <footer>
    <Box :class="{['left-top']: $route.name !== 'search'}" ref="box">
      <div class="container">
        <div class="top-part">
          <Logo/>
          <div class="links">
            <NuxtLink active-class="active" to="/privacy-policy">Privacy Policy</NuxtLink>
            <NuxtLink active-class="active" to="/terms-and-conditions">Terms and conditions</NuxtLink>
          </div>
        </div>
        <div class="bottom-part">
          {{ new Date().getFullYear() }} © All rights reserved.
        </div>
      </div>
    </Box>
    <Up/>
  </footer>
</template>

<script>
import Box from "./Box";
import Logo from "./Logo";
import Up from "../buttons/Up";

export default {
  name: "Footer",
  components: {
    Box,
    Logo,
    Up,
  },
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/components/base/Footer.scss";
</style>
