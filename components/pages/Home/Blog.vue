<template>
  <div class="home-page__blog">
    <div class="container">
      <h2>{{ title }}</h2>

      <div class="blog-wrapper">

        <BlogItem v-for="(item,index) in list" :key="index"
                  :image="item.image" :title="item.title" :date="item.date"
                  :time="item.time" :link="item.link"
                  v-if="index <= count && item.title !== articleTitle"
        >
        </BlogItem>

      </div>
      <Border>
        <button @click="showMore" v-if="count > list.length - 1"> Show more</button>
      </Border>
    </div>
  </div>
</template>

<script>
import BlogItem from "../../blog/BlogItem";
import blog from "../../../config/blog";
import Border from "../../buttons/Border";

export default {
  name: "Blog",
  data() {
    return {
      list: blog,
      count: 3,
    }
  },
  props: {
    title: String,
    articleTitle: String,
  },
  components: {
    BlogItem,
    Border,
  },
  methods: {
    showMore() {
      if (this.count < this.list.length) {
        this.count += 4;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page__blog {
  padding-bottom: $margin_section;
  @include _1100 {
    padding-bottom: $margin_section_tablet;
  }
  @include _575 {
    padding-bottom: $margin_section_mobile;
  }

  .blog-wrapper {
    display: flex;

    flex-wrap: wrap;

    .blog-item {
      width: 23%;

      &:not(:first-child) {
        margin-left: 30px;
        @include _1366 {
          margin-left: 28px;
        }
      }
    }

    @include _1100 {
      justify-content: space-between;
      .blog-item {
        width: 48%;

        &:not(:first-child) {
          margin-left: 0;
        }

      }
    }
    @include _575 {
      flex-direction: column;
      .blog-item {
        width: 100%;
      }
    }
  }

  h2 {
    margin-bottom: 54px;
  }

  .btn-border {
    display: flex;
    justify-content: center;
  }
}

</style>
