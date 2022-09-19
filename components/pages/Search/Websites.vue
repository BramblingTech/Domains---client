<template>
  <div class="page-search__websites">
    <div class="container">
      <h2>examples of an effective website</h2>
      <tabs>
        <tab title="E-commerce">
          <europaw/>
        </tab>
        <tab title="Business website">
          <europaw/>
        </tab>
        <tab title="Landing page">
          <europaw/>
        </tab>
        <tab title="Infosite">
          <europaw/>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>

import Tabs from "../../common/Tabs";
import Tab from "../../common/Tab";
import europaw from "./Websites/europaw";

export default {
  name: "Websites",
  components: {
    Tab, Tabs, europaw,
  }
}
</script>

<style lang="scss">
.page-search__websites {
  padding-bottom: $margin_section;

  h2 {
    margin-bottom: 34px;
  }

  .container {
    & > h2 {
      @include _575 {
        padding-left: 16px;
      }
    }
  }

  @include _575 {
    .container {
      padding-left: 0;
      padding-right: 0;


      .tabs__header {
        padding-left: 16px;
        width: 100%;
        overflow-x: auto;
        justify-content: space-between;
        padding-right: 50px;

        li {
          &:not(:first-of-type) {
            margin-left: 44px;
          }

          &:first-of-type {
            margin-left: 16px;
          }

          &.active {
              border-bottom-color:$blue;
          }

          font-size: 17px;
          line-height: 20px;
          white-space: nowrap;
        }
      }

      .tabs__line {
        //margin-left: 16px;
        height: 3px;

        &-inner {
          top: 0;
          height: 3px;
          //width: 170px;
        }
      }

      .tab {
        padding-left: 16px;
        padding-right: 16px;

      }
    }
  }
}
</style>
