<template>
  <div class="search">
    <div class="search__input">
      <input type="text" placeholder="Type your keyword..." id="search-input"
             ref="search-input"
             v-model="searchValue">
      <svg class="search-icon" width="25" height="25" viewBox="0 0 25 25" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_335_1469)">
          <path
            d="M24.1865 22.286L18.4744 16.3452C19.9431 14.5993 20.7478 12.4026 20.7478 10.1158C20.7478 4.7728 16.4008 0.425781 11.0578 0.425781C5.71481 0.425781 1.3678 4.7728 1.3678 10.1158C1.3678 15.4587 5.71481 19.8058 11.0578 19.8058C13.0636 19.8058 14.9751 19.2008 16.6093 18.0523L22.3647 24.0382C22.6053 24.288 22.9289 24.4258 23.2756 24.4258C23.6038 24.4258 23.9151 24.3007 24.1515 24.0732C24.6537 23.5899 24.6697 22.7886 24.1865 22.286ZM11.0578 2.9536C15.0071 2.9536 18.22 6.16647 18.22 10.1158C18.22 14.0651 15.0071 17.2779 11.0578 17.2779C7.10848 17.2779 3.89562 14.0651 3.89562 10.1158C3.89562 6.16647 7.10848 2.9536 11.0578 2.9536Z"
            fill="#D3D3D3"/>
        </g>
        <defs>
          <clipPath id="clip0_335_1469">
            <rect width="24" height="24" fill="white" transform="translate(0.953125 0.425781)"/>
          </clipPath>
        </defs>
      </svg>
      <DomainName @selectedOptions="getTlds"/>

      <primary @click.native="searchHandler">
        <button> Search</button>
      </primary>

    </div>
    <div class="search__keywords">
      <span>Examples of keywords:</span>
      <Keywords v-for="(name, index) of keywords" :key="index"
                :name="name"
                @clickHandler="clickKeyword(name)"
                :isActive="activeKeyword === name"/>
    </div>
    <div class="search__business">
      <div class="business-trigger" @click="showList = !showList" :class="{ active: showList }">
        <span>Search by your business</span>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.97269 14.2541C4.66842 14.5584 4.66842 15.0517 4.97269 15.3559C5.27695 15.6602 5.77026 15.6602 6.07452 15.3559L12.3074 9.12301C12.6117 8.81875 12.6117 8.32544 12.3074 8.02118L6.07452 1.78826C5.77026 1.48399 5.27695 1.48399 4.97269 1.78826C4.66842 2.09252 4.66842 2.58583 4.97269 2.89009L10.6546 8.57203L4.97269 14.2541Z"
                fill="#393E46"/>
        </svg>
      </div>
      <div class="business-list" :class="{ show: showList }">
        <Business v-for="(name, index) of business" :key="index"
                  :name="name"
                  @clickHandler="clickBusiness(name)"
                  :isActive="activeBusinessValue === name"
        />
      </div>
    </div>
  </div>
</template>

<script>

import Primary from "../buttons/Primary";
import keywords from "../../config/keywords";
import Business from "@/components/search/Business";
import {store} from "@/store/search";
import Keywords from "@/components/search/Keywords";
import useGetDomainByKeywords from "@/api/getKeywordApiController";
import {preloader} from "@/store/preloader";
import DomainName from "@/components/search/DomainName";


export default {
  name: "Search",
  data() {
    return {
      keywords: keywords.keywords,
      business: keywords.business,
      showList: false,
      searchValue: store.getters.getKeyword ? store.getters.getKeyword : '',
      businessValue: store.getters.getBusinessKeyword ? store.getters.getBusinessKeyword : '',
      tlds: [],
    }
  },
  components: {
    Business,
    Primary, Keywords, DomainName
  },
  created() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', true)
    }, 1)
  },
  computed: {
    activeKeyword() {
      return store.getters.getExampleKeyword
    },
    activeBusinessValue() {
      return this.businessValue
    },
    getBusinessValue() {
      return store.getters.getBusinessKeyword
    },
    getFetched() {
      return store.getters.getFetched
    },
  },

  methods: {
    clickKeyword: function (val) {
      store.dispatch('addExampleKeyword', val);
      this.searchValue = val;
    },
    clickBusiness: function (val) {
      this.businessValue = val;
    },
    getTlds(tlds) {
      this.tlds = tlds;
    },
    searchHandler() {
      store.dispatch('addTlds', this.tlds);
      if (this.searchValue.length > 0) {
        store.dispatch('addKeyword', this.searchValue.toLowerCase())
        if (this.businessValue.length > 0) {
          store.dispatch('addBusinessKeyword', this.businessValue);
          if (this.businessValue !== 'None') {
            useGetDomainByKeywords(store.getters.getKeyword + '-' + store.getters.getBusinessKeyword, 'addBusinessResult', this.tlds);
          }
        }
        useGetDomainByKeywords(store.getters.getKeyword, 'addKeywordResult', this.tlds);
        store.dispatch('addFetched', true);
        if ($nuxt.$route.path !== '/search') {
          this.$nuxt.$options.router.push('/search');
        }
      }
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.showList = false
      }
    }
  },

  mounted() {
    if (!this.getBusinessValue) {
      this.clickBusiness('None');
    }

    setTimeout(() => {
      if (this.$route.path === '/search' && this.getFetched === false) {
        this.searchHandler();
      }
    }, 1000)

    setTimeout(() => {
      preloader.dispatch('addPreloaderState', false)
    }, 500)

    if (!this.searchValue) {
      this.$nuxt.$options.router.push('/');
    }

    // hide business list when user clicking outside of tooltip
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },

}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/components/Search';
</style>
