<template>
  <div class="filter">
    <h4>Advanced search by filter</h4>
    <div class="filter__endings">
      <div class="choose-all">
        <p>Endings</p>
          <Checkbox :label="'Choose all ('+tlds_length.length + ')'" inputValue="choose all"
                    v-model="choose_all"></Checkbox>
          <Checkbox :label="'Decline all' " inputValue="decline all" v-model="decline_all"></Checkbox>
      </div>
      <div class="table-of-endings">
        <Checkbox v-for="(item,index) in getTlds" :label="item" :inputValue="item" :key="index"
                  v-model="selectedOptions"></Checkbox>
      </div>
    </div>
    <div class="filter__price">
      <p>Price</p>
      <div class="price-values">
        <div class="from">
          <input type="number" @keypress="validateMin" placeholder="0" v-model="min" :min="getMin">
        </div>
        <div class="separator">to</div>
        <div class="to">
          <input type="number" @keypress="validateMax" placeholder="500, 000" v-model="max" :max="getMax">
        </div>
      </div>
    </div>
    <div class="filter__buttons">
      <Border>
        <button @click="$emit('closeFilter')">Cancel</button>
      </Border>
      <Blue>
        <button @click="filterHandler">Apply filters</button>
      </Blue>
    </div>
  </div>
</template>

<script>
import Checkbox from "../common/Checkbox";
import Blue from "../buttons/Blue";
import Border from "../buttons/Border";
import {filter} from "@/store/filter";
import {sort} from "@/store/sort";

export default {
  name: "search-filter",
  components: {
    Blue,
    Border,
    Checkbox,
  },
  props: {
    domains: [],
    business: [],
  },
  data() {
    return {
      selectedOptions: [],
      min: null,
      max: null,
      domainsList: [],
      businessList: [],
      filteredDomains: [],
      filteredBusiness: [],
      choose_all: ['choose all'],
      decline_all: [],
      tlds_length: [],
    }
  },
  computed: {
    getTlds() {
      this.tlds_length = filter.getters.getEndings;
      return filter.getters.getEndings
    },
    getMin() {
      return filter.getters.getMin
    },
    getMax() {
      return filter.getters.getMax
    },
  },
  watch: {
    domains: function () {
      this.domainsList = this.domains;
      this.selectedOptions = this.getTlds
      this.getMinMax(this.domainsList);
      this.filterResult()
    },
    business: function () {
      this.businessList = this.business;
      this.selectedOptions = this.getTlds
      this.getMinMax(this.domainsList, this.businessList);
      this.filterResult()
    },
    choose_all: function (newVal) {
      if (newVal.length > 0) {
        this.selectedOptions = this.getTlds;
        this.decline_all = [];
      }
    },
    decline_all: function (newVal) {
      if (newVal.length > 0) {
        this.selectedOptions = [];
        this.choose_all = [];
      }
    },
    min: function (newVal) {
      this.min = newVal;
    },
    max: function (newVal) {
      this.max = newVal
    },
    selectedOptions: function (val){

      if(val.length > 0) {
        this.decline_all = [];
      }
      if(val.length < this.getTlds.length) {
        this.choose_all = [];
      }
    },
  },
  methods: {
    validateMin() {
      setTimeout(() => {
        if (this.min < this.getMin) {
          this.min = this.getMin;
        }
      }, 10)
    },
    validateMax() {
      setTimeout(() => {
        if (this.max > this.getMax) {
          this.max = this.getMax;
        }
      }, 10)
    },
    sortPrice(arr) {
      const min = this.min;
      const max = this.max;
      return arr.reduce((total, item) => {
        if ((item.price / Math.pow(10, 6)) >= min &&
          (item.price / Math.pow(10, 6)) <= max) {
          total.push(item)
        }
        return total
      }, [])
    },
    sortTlds(arr) {
      return arr.reduce((total, item) => {
        const str = item.domain.substr(item.domain.indexOf('.'));
        this.selectedOptions.forEach((tld) => {
          if (str === tld) {
            total.push(item)
          }
        })
        return total
      }, [])
    },
    filterResult() {

      // sorting by price
      if (this.domainsList.length > 0 && (this.min || this.max)) {
        this.filteredDomains = this.sortPrice(this.domainsList)
      }

      if (this.businessList.length > 0 && (this.min || this.max)) {
        this.filteredBusiness = this.sortPrice(this.businessList)
      }

      // sorting by tlds
      if (this.selectedOptions.length > 0) {
        if (this.domainsList.length > 0) {
          this.filteredDomains = this.sortTlds(this.filteredDomains);
        }
        if (this.businessList.length > 0) {
          this.filteredBusiness = this.sortTlds(this.filteredBusiness);
        }
      }

    },
    filterHandler() {
      this.filterResult();
      // filter by price
      this.$emit('filterDomains', this.filteredDomains);

      if (this.businessList.length > 0) {
        this.$emit('filterBusiness', this.filteredBusiness);
      }
      //  sorting by tlds

      this.$emit('closeFilter');
    },
    getMinMax(arr, arr2) {
      let array = [];
      if (!arr2) {
        array = arr;
      } else {
        array = arr.concat(arr2);
      }
      const min = Math.min(...array.map(item => (item.price / Math.pow(10, 6))))
      const max = Math.max(...array.map(item => (item.price / Math.pow(10, 6))));
      this.min = min;
      this.max = max;
      filter.dispatch('addMin', min);
      filter.dispatch('addMax', max);

    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/pages/Search/Filter";
</style>
