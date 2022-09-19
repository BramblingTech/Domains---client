<template>
  <div class="page-error-wrapper">
    <client-only>
      <Preloader/>
    </client-only>
    <Header/>
    <Nuxt/>
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Preloader from "@/components/base/Preloader";
import {preloader} from "@/store/preloader";

export default {
  name: "error-page",
  components: {Header, Preloader},
  created() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', true)
    }, 1)
  },
  mounted() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', false)
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.page-error-wrapper {
  background: $b_green;

}
</style>
