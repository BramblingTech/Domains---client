<template>
  <div class="page-search__results">
    <div class="container">
      <Skyblue
        @click.native="showModal">
        <button :class="{disabled:this.domainsList.length === 0 && this.businessList.length === 0}">Advanced search by
          filter
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_306_1423)">
              <path
                d="M15.6948 7.49492H9.29492V1.09487C9.29492 0.653369 8.93647 0.294922 8.49482 0.294922C8.05332 0.294922 7.69487 0.653369 7.69487 1.09487V7.49492H1.29482C0.85332 7.49492 0.494873 7.85337 0.494873 8.29487C0.494873 8.73652 0.85332 9.09497 1.29482 9.09497H7.69487V15.4949C7.69487 15.9365 8.05332 16.295 8.49482 16.295C8.93647 16.295 9.29492 15.9365 9.29492 15.4949V9.09497H15.6948C16.1365 9.09497 16.4949 8.73652 16.4949 8.29487C16.4949 7.85337 16.1365 7.49492 15.6948 7.49492Z"
                fill="#393E46"/>
            </g>
            <defs>
              <clipPath id="clip0_306_1423">
                <rect width="16" height="16" fill="white" transform="translate(0.494873 0.294922)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </Skyblue>
      <Modal v-show="isModalVisible"
             @close="closeModal">
        <searchFilter :domains="keywordResult"
                      :business="businessResult"
                      @filterDomains="filterDomainsEmit"
                      @filterBusiness="filterBusinessEmit"
                      @closeFilter="closeModal"/>
      </Modal>

      <div class="two-column-content">

        <div class="left" :class="{full:!businessKeyword || businessKeyword === 'None'}">
          <h3>SEARCH BY KEYWORD “{{ keyword }}”</h3>
          <div class="found-and-sort">
            <div class="found">{{ domainsList.length }} results found</div>
            <Sort
              v-show="domainsList.length > 0"
              @toCheap="keywordSort(domainsList,'toCheap')"
              @toExpensive="keywordSort(domainsList,'toExpensive')"
              :toCheapActive="getKeywordSort === 'toCheap'"
              :toExpensiveActive="getKeywordSort === 'toExpensive'"
            />
          </div>
          <div class="domain-items-wrapper">
            <SinglePreloader :show="keywordsPreloader"/>
            <div class="domain-items" v-if="domainsList.length > 0">
              <DomainItem
                v-for="(item, index) in domainsList"
                :title="item.domain"
                :price=" item.currency === 'USD' ? '$' + (item.price/Math.pow(10,6)) : item.currency +  (item.price/Math.pow(10,6))"
                :key="'domain'+index"
                v-if="index <= countKeywords"
                @clickHandler="setLink(item.domain,item.currency === 'USD' ? '$' + (item.price/Math.pow(10,6)) : item.currency +  (item.price/Math.pow(10,6)))"
              />
            </div>
            <h3 v-else style="margin-top:40px;">NO FOUND RESULTS</h3>
          </div>

          <Border>
            <button v-if="domainsList.length > 0"
                    :class="{disabled:domainsList.length <= countKeywords}"
                    @click="ShowMoreByKeywords">Show more
            </button>
          </Border>
        </div>
        <div class="right" v-if="businessKeyword && businessKeyword !== 'None'">
          <h3>SEARCH BY business “{{ businessKeyword }}”</h3>
          <div class="found-and-sort">
            <div class="found">{{ businessList.length }} results found</div>
            <Sort
              v-show="businessList.length > 0"
              @toCheap="businessSort(businessList,'toCheap')"
              @toExpensive="businessSort(businessList,'toExpensive')"
              :toCheapActive="getBusinessSort === 'toCheap'"
              :toExpensiveActive="getBusinessSort === 'toExpensive'"
            />
          </div>
          <div class="domain-items-wrapper">
            <SinglePreloader :show="businessPreloader"/>
            <div class="domain-items" v-if="businessList.length > 0 && businessKeyword !== 'None'">
              <DomainItem v-for="(item, index) in businessList"
                          :title="item.domain"
                          :price=" item.currency === 'USD' ? '$' + (item.price/Math.pow(10,6)) : item.currency +  (item.price/Math.pow(10,6))"
                          :key="'business'+index"
                          v-if="index <= countBusiness"
                          @clickHandler="setLink(item.domain,item.currency === 'USD' ? '$' + (item.price/Math.pow(10,6)) : item.currency +  (item.price/Math.pow(10,6)))"
              />
            </div>
            <h3 v-else style="margin-top:40px;">NO FOUND RESULTS</h3>
          </div>
          <Border>
            <button v-if="businessList.length > 0"
                    @click="ShowMoreByBusiness"
                    :class="{disabled:businessList.length <= countBusiness}">Show more
            </button>
          </Border>
        </div>
      </div>
<!--      <div class="results-tab">-->
<!--        <tabs>-->
<!--          <tab :title="'SEARCH BY KEYWORD “' + keyword + '”' ">-->

<!--          </tab>-->
<!--          <tab></tab>-->
<!--        </tabs>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import Skyblue from "../../buttons/Skyblue";
import DomainItem from "./DomainItem";
import Border from "../../buttons/Border";
import Modal from "../../common/Modal";
import searchFilter from "../../search/Filter";
import {store} from "~/store/search";
import SinglePreloader from "@/components/base/SinglePreloader";
import Sort from "@/components/search/Sort";
import {sort} from "@/store/sort";
import Tabs from "../../common/Tabs";
import Tab from "../../common/Tab";


export default {
  name: "Results",
  components: {Skyblue, DomainItem, Border, Modal, searchFilter, SinglePreloader, Sort, Tab, Tabs},
  data() {
    return {
      isModalVisible: false,
      countKeywords: 0,
      countBusiness: 0,
      domainsList: [],
      businessList: [],
      sortedKeywords: [],
      keywordsPreloader: true,
      businessPreloader: false,
    };
  },

  computed: {
    keyword() {
      return store.getters.getKeyword
    },
    keywordResult() {
      return store.getters.getKeywordResult
    },
    businessKeyword() {
      return store.getters.getBusinessKeyword
    },
    businessResult() {
      return store.getters.getBusinessResult
    },
    getKeywordSort() {
      if (sort.getters.getToExpensiveKeyword) {
        return 'toExpensive'
      } else if (sort.getters.getToCheapKeyword) {
        return 'toCheap'
      } else {
        return null
      }
    },
    getBusinessSort() {
      if (sort.getters.getToExpensiveBusiness) {
        return 'toExpensive'
      } else if (sort.getters.getToCheapBusiness) {
        return 'toCheap'
      } else {
        return null
      }
    },
    tlds() {
      return store.getters.getTlds
    },
  },
  watch: {
    tlds: function () {
      this.restoreLists()
    },
    keyword: function () {
      this.restoreLists()
    },
    businessKeyword: function () {
      this.restoreLists()
    },
    keywordResult: function () {
      if (this.keywordResult.length > 0) {
        this.keywordResult.forEach((item, index) => {
          this.domainsList.push(item);
          if (this.getKeywordSort) {
            this.keywordSort(this.domainsList, this.getKeywordSort)
          }
          this.keywordsPreloader = false;
        })
      } else {
        this.keywordsPreloader = false;
      }

    },
    businessResult: function () {
      if (this.businessResult.length > 0) {
        this.businessResult.forEach((item, index) => {
          this.businessList.push(item);
          if (this.getBusinessSort) {
            this.businessSort(this.businessList, this.getBusinessSort)
          }
          this.businessPreloader = false;
        })
      } else {
        this.businessPreloader = false;
      }
    },
    countKeywords: function () {
      if (this.getKeywordSort) {
        this.keywordSort(this.domainsList, this.getKeywordSort)
      }
    },
    countBusiness: function () {
      if (this.getBusinessSort) {
        this.businessSort(this.businessList, this.getBusinessSort)
      }
    },
  },

  methods: {
    showModal() {
      if (this.domainsList.length > 0 || this.businessList.length > 0) {
        this.isModalVisible = true;
        this.$lockBody()
      }
    },
    closeModal() {
      this.isModalVisible = false;
      this.$unlockBody()
    },
    ShowMoreByKeywords() {
      this.countKeywords += 10;
    },
    ShowMoreByBusiness() {
      this.countBusiness += 10;
    },
    keywordSort(arr, type) {
      if (type === 'toCheap') {
        arr.sort((a, b) => (a.price < b.price) ? 1 : -1);
        sort.dispatch('addToCheapKeyword', true)
      } else {
        arr.sort((a, b) => (a.price > b.price) ? 1 : -1);
        sort.dispatch('addToExpensiveKeyword', true)
      }
    },
    businessSort(arr, type) {
      if (type === 'toCheap') {
        arr.sort((a, b) => (a.price < b.price) ? 1 : -1);
        sort.dispatch('addToCheapBusiness', true)
      } else {
        arr.sort((a, b) => (a.price > b.price) ? 1 : -1);
        sort.dispatch('addToExpensiveBusiness', true)
      }
    },
    filterDomainsEmit(data) {
      if (this.getKeywordSort) {
        this.keywordSort(data, this.getKeywordSort);
        this.domainsList = data;
      } else {
        this.domainsList = data;
      }

    },
    filterBusinessEmit(data) {
      if (this.businessSort) {
        this.businessSort(data, this.getBusinessSort);
        this.businessList = data;
      } else {
        this.businessList = data;
      }
    },
    restoreLists() {
      this.domainsList = [];
      this.businessList = [];
      this.keywordsPreloader = true;
      this.businessPreloader = true;
      if (this.businessKeyword.length > 0 && this.businessKeyword !== 'None') {
        this.countKeywords = 6;
        this.countBusiness = 6;
      } else {
        this.countKeywords = 13;
      }
    },
    setLink(domain, price) {
      store.dispatch('addLink', {name: domain, price: price});
      this.$nuxt.$options.router.push('/buy-domain');
    },
  },
  mounted() {
    if (this.businessKeyword && this.businessKeyword !== 'None') {
      this.countKeywords = 6;
      this.countBusiness = 6;
      this.businessPreloader = true;
    } else {
      this.countKeywords = 13;
    }
  }
}
</script>

<style lang="scss" scoped>
.page-search__results {
  padding: 52px 0 $margin_section 0;
  @include _1100 {
    padding-bottom: $margin_section_tablet;
  }
  @include _575 {
    padding-bottom: $margin_section_mobile;
  }

  .btn-skyblue {
    margin-bottom: 34px;
    display: inline-block;
    font-family: 'Open-Sans', sans-serif;
    color: #393E46;

    @include _575 {
      display: inline-flex;
      width: 100%;
      margin: 0 auto 34px auto;
      justify-content: center;
    }

    & > * {
      width: 302px;
      font-size: 18px;
      font-family: 'Open-Sans', sans-serif;
      color: #393E46;
    }

    svg {
      margin-left: 6px;
    }
  }

  .found-and-sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    .found {
      font-weight: 600;
    }
  }

  .btn-border {
    margin-top: 34px;
    display: flex;
    justify-content: center;
  }

}

.left {
  @include _1100 {
    margin-bottom: 34px;
  }

  &.full {
    width: 100%;

    .domain-items {
      .domain-item {
        @media(min-width: 1100px) {
          &:nth-child(2) {
            margin-top: 0px;
          }
        }

      }

      @media(min-width: 1100px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-auto-rows: min-content;
      }
    }
  }
}

.domain-items-wrapper {
  position: relative;
  //height: 611px;
}

.domain-items {
  height: 611px;
  overflow-y: auto;
  margin-top: 24px;
  padding-right: 10px;
  padding-bottom: 10px;
}

</style>
