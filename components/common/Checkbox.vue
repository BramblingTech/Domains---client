<template>
  <div class="custom-checkbox">
    <label>
      <span>{{ label }}</span>
      <input type="checkbox" :value="inputValue" v-model="model">
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: String,
    value: [],
    inputValue: String,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/components/common/Checkbox";
</style>
