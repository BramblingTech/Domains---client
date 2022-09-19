<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li v-for="(tab, index) in tabs" :key="tab.title" @click="selectTab(index)"
          :class='{"active": (index === selectedIndex)}' :ref="tab.title">
        {{ tab.title }}
      </li>

    </ul>
    <div class="tabs__line">
      <div class="tabs__line-inner" ref="inner-line"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [],        // all of the tabs
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0);
  },

  methods: {
    selectTab(i) {
      this.selectedIndex = i
      // loop over all the tabs

      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
        this.$refs['inner-line'].style.left = (i * 25.5) + '%';
      })
    },

  },
}
</script>

<style lang="scss" scoped>
@import "assets/scss/components/common/Tabs";
</style>
