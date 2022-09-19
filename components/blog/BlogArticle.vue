<template>
  <div class="page-article">
    <Main :title="title" :date="date" :time="time"
          poster="/images/article-example.png" ref="main"/>
    <div class="container">
      <div class="two-column-content">
        <Contents>
          <li v-for="(item, index) in contents" :key="index"
              @click="scrollContent(item.replace(/\s/g, '').toLowerCase())">
            {{ item }}
          </li>
        </Contents>
        <div :class="{show:contentShow}" class="page-article__content" ref="content">
          <slot></slot>
        </div>
      </div>
      <Blog title="also you may be interested" :article-title="title"/>
    </div>
  </div>
</template>

<script>
import Main from "../../components/pages/Articles/Main";
import Contents from "../../components/pages/Articles/Contents";
import {elementScrollIntoView} from "seamless-scroll-polyfill";
import {preloader} from "@/store/preloader";
import {back} from "@/store/back";
import Blog from "@/components/pages/Home/Blog";


export default {
  data() {
    return {
      mainHeight: null,
      contentShow: false,
    }
  },
  props: {
    date: String,
    time: String,
    title: String,
    contents: [],
  },
  components: {
    Main,
    Contents,
    Blog,
  },
  created() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', true)
    }, 1)
    back.dispatch('addBackState', true)
  },
  mounted() {
    setTimeout(() => {
      if (window.innerWidth > 1100) {
        this.mainHeight = this.$refs.main.$children[0].$el.clientHeight;
        this.$refs.content.style.margin = `${this.mainHeight}px 0 0 0`;
      }
      this.contentShow = true;
      preloader.dispatch('addPreloaderState', false)
    }, 500)
    setTimeout(() => {

    }, 50);

    const headings = document.getElementsByTagName('h2');
    for (let item of headings) {
      if (item.id) {
        let current = item.id
        item.setAttribute('id', current.replace(/\s/g, '').toLowerCase());
      }
    }
  },

  methods: {
    scrollContent(id) {
      if (document.getElementById(id)) {
        elementScrollIntoView(document.getElementById(id), {behavior: "smooth", block: "center", inline: "center"});
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.page-article__content {
  width: 73%;
  padding-top: 150px;
  opacity: 0;
  transition: 0.3s ease;
  transition-property: opacity;
  @include _1100 {
    width: 100%;
    padding-top: 100px;
  }

  &.show {
    opacity: 1;
  }
}

.home-page__blog {
  padding-top: $margin_section;
  @include _1100 {
    padding-top: $margin_section_tablet
  }
  @include _575 {
    padding-top: $margin_section_mobile
  }
}
</style>


