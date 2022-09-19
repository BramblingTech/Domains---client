<template>
  <div class="search-page">
    <Main title="enter up to 5,000 domains or keywords"/>
    <Results/>
    <ContentBlock/>
    <Recommendations/>
    <Aspects/>
    <Websites/>
    <Calculation/>
  </div>
</template>

<script>
import Main from "../components/common/Main";
import Results from "../components/pages/Search/Results";
import ContentBlock from "../components/pages/Search/ContentBlock";
import Recommendations from "../components/pages/Search/Recommendations";
import Aspects from "../components/pages/Search/Aspects";
import Websites from "../components/pages/Search/Websites";
import Calculation from "../components/pages/Search/Calculation";

export default {
  name: "Search",
  components: {
    Recommendations,
    Main,
    Results,
    ContentBlock,
    Aspects,
    Websites,
    Calculation,
  },
  head: {
    title: 'Search - domainseller.com',
    meta: [
      {
        name: 'description',
        content: "Deciding to invest in a domain name, you decide to spend on a new business idea or to improve your existing one by bringing it online."
      },
      {
        name: "title",
        content: 'SEARCH BY KEYWORD'
      }
    ],
  }
}
</script>

<style scoped>

</style>
