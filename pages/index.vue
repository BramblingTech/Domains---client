<template>
  <div class="home-page">
    <Main title="generate your domain name"
          text="Your domain helps people find you online and creates the first impression. Find one that represents you perfectly."/>
    <Two/>
    <Three/>
    <Faq/>
    <Blog title="Blog"/>
  </div>
</template>

<script>
import Main from "../components/common/Main";
import Two from "../components/pages/Home/Bought";
import Three from "../components/pages/Home/Information";
import Faq from "../components/pages/Home/Faq";
import Blog from "../components/pages/Home/Blog";
import {back} from "@/store/back";


export default {
  components: {
    Main, Two, Three, Faq, Blog,
  },
  head: {
    title: 'Home page - domainseller.com',
    meta: [
      {
        name: 'description',
        content: 'Your domain helps people find you online and creates the first impression. Find one that represents you perfectly.'
      },
      {
        name: 'title',
        content: 'Generate your domain name'
      }
    ],
  },
  created() {
    back.dispatch('addBackState', false);
  }
}
</script>
