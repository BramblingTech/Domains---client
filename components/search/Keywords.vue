<template>
  <div class="search-keywords__item" :class="{active: isActive}" @click="$emit('clickHandler')">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "Keywords",
  props: {
    name: String,
    isActive: false,
  },

}
</script>

<style scoped>

</style>
