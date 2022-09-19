<template>
  <div class="business-list__item" :class="{active: isActive}" @click="$emit('clickHandler')">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "Business",
  props: {
    name: String,
    isActive: false,
  },
}
</script>
