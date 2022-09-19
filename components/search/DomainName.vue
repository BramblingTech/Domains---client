<template>
  <div class="domain-names-dropdown">
    <Checkbox v-for="(item,index) in tlds" :label="item.label" :inputValue="item.label"
              v-model="selectedOptions"
              :key="index" v-if="index === 0"/>
    <svg @click="toggleDropdown" width="17" height="17" viewBox="0 0 17 17" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3.10577 5.19632C2.8015 4.89206 2.30819 4.89206 2.00393 5.19632C1.69967 5.50058 1.69967 5.99389 2.00393 6.29816L8.23685 12.5311C8.54111 12.8353 9.03442 12.8353 9.33869 12.5311L15.5716 6.29816C15.8759 5.99389 15.8759 5.50058 15.5716 5.19632C15.2673 4.89206 14.774 4.89206 14.4698 5.19632L8.78783 10.8783L3.10577 5.19632Z"
            fill="#393E46"/>
    </svg>
    <div class="domain-names-list" :class="{show:showList}">
      <Checkbox v-for="(item,index) in tlds" :label="item.label" :inputValue="item.label"
                v-model="selectedOptions"
                :key="index" v-if="index > 0"/>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/common/Checkbox";
import {store} from "@/store/search";

export default {
  name: "DomainName",
  components: {
    Checkbox,
  },
  data() {
    return {
      showList: false,
      tlds: [
        {label: 'com', value: false},
        {label: 'net', value: false},
        {label: 'org', value: false},
        {label: 'app', value: false},
      ],
      selectedOptions: [],
    }
  },

  computed: {
    getSelectedOptions() {
      return store.getters.getTlds
    },
  },

  methods: {
    toggleDropdown() {
      this.showList = !this.showList
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.showList = false;
        this.sortTlds()
      }
    },
    sortTlds() {
      this.tlds.forEach((tld) => {
        this.selectedOptions.forEach((selected) => {
          if (selected === tld.label) {
            tld.value = true
          }
        })
      })
      this.tlds.sort(function (x, y) {
        return (x.value === y.value) ? 0 : x.value ? -1 : 1;
      });
    }
  },

  watch: {
    selectedOptions: function () {
      this.$emit('selectedOptions', this.selectedOptions)
    },
  },
  mounted() {
    if (this.getSelectedOptions.length > 0) {
      this.selectedOptions = this.getSelectedOptions;
      this.sortTlds()

    }
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }

}
</script>

<style lang="scss" scoped>
.domain-names-dropdown {
  display: flex;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 183px;

  @include _575 {
    right: 85px;
    top: 15px;
  }

  .label-text {
    font-weight: 600;
    margin-left: 4px;
  }

  svg {
    margin-left: 13px;
    cursor: pointer;
  }

  .domain-names-list {
    background: $b_default;
    border: 1px solid #D1D0FF;
    border-radius: 4px;
    width: 160px;
    padding: 14px 24px;
    position: absolute;
    top: 39px;
    z-index: -1;
    opacity: 0;
    left: -23px;
    transition: .3s ease-out;
    transition-property: z-index, opacity, top;

    @include _575 {
      top: 29px;
      width: 132px;
      left: -30px;
    }

    &.show {
      top: 49px;
      opacity: 1;
      z-index: 2;
      @include _575 {
        top: 39px;
      }
    }

    .custom-checkbox {
      margin-top: 12px;
    }
  }
}
</style>
