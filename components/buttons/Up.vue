<template>
  <div class="go-up" @click="scroll" v-show="show">
    Go up
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      show: false,
      scrollY: false,
    };
  },
  methods: {
    scroll() {
      this.$scrolltotop();
    },
  },
  mounted() {
    const self = this;
    window.addEventListener('scroll', function () {
      self.scrollY = window.pageYOffset > 500;
    })
  },
  watch: {
    scrollY: function (val) {
      this.show = val;
    },
  }
}
</script>

<style lang = "scss" scoped>
  @import "assets/scss/components/buttons/Up";
</style>
