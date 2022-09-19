<template>
  <div class="sort">
    <div class="sort__title" @click="toggleDropdown">
      <div> Sort by: <span> Price</span></div>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.67852 5.10306C2.37426 4.7988 1.88095 4.7988 1.57668 5.10306C1.27242 5.40732 1.27242 5.90063 1.57668 6.2049L7.8096 12.4378C8.11387 12.7421 8.60718 12.7421 8.91144 12.4378L15.1444 6.2049C15.4486 5.90063 15.4486 5.40732 15.1444 5.10306C14.8401 4.7988 14.3468 4.7988 14.0425 5.10306L8.36059 10.785L2.67852 5.10306Z"
              fill="#393E46"/>
      </svg>
    </div>
    <div class="sort__list" :class="{show:showList}">
      <span @click="toCheap" :class="{active:toCheapActive}">Expensive to Cheap</span>
      <span @click="toExpensive" :class="{active:toExpensiveActive}">Cheap to Expensive</span>
    </div>
  </div>

</template>

<script>

export default {
  name: "Sort",
  data() {
    return {
      showList: false,
    }
  },
  props: {
    toCheapActive: Boolean,
    toExpensiveActive: Boolean,
  },
  methods: {
    toggleDropdown() {
      this.showList = !this.showList
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.showList = false
      }
    },
    toExpensive() {
      this.$emit('toExpensive')
    },
    toCheap() {
      this.$emit('toCheap')
    }
  },

  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }
}
</script>

<style lang="scss" scoped>
.sort {
  position: relative;


  &__title {
    border: 1px solid #D1D0FF;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background: #FCFCFC;
    min-width: 198px;
    cursor: pointer;

    @include _575 {
      padding: 5px 16px;
      min-width: 180px;
    }

    span {
      font-weight: 600;
    }
  }

  &__list {
    border: 1px solid #D1D0FF;
    border-radius: 4px;
    background: #FCFCFC;
    position: absolute;
    padding: 0 25px 14px 25px;
    top: 40px;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: .3s ease-out;
    transition-property: z-index, opacity, top;

    &.show {
      opacity: 1;
      top: 44px;
      z-index: 2;
    }

    span {
      display: block;
      margin-top: 14px;
      cursor: pointer;
      @include _575 {
        font-size: 14px;
      }

      &.active {
        color: $blue;
      }
    }
  }
}
</style>
