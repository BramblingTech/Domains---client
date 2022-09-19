<template>
  <div class="page-search__aspects">
    <div class="container">
      <div class="two-column-content">
        <div class="left">
          <h2>Website that brings traffic and customers</h2>
          <p>Let’s imagine you got an idea and had chosen a catchy domain name. What else should you mind to consider? A
            rewarding business web site consists of several things: good SEO, selling design, and technologies that make
            it up.</p>
          <h4>SEO Optimization</h4>
          <p>You want to be on top of searching results? Make sure your web site has all important SEO indicators.</p>
          <h4>User-friendly Design</h4>
          <p>Design of a website is the first thing a user is facing. Investing in good, modern web design pays off with a large amount of customers.</p>
          <h4>Modern Web Development</h4>
          <p>Developing a site using current technologies and systems is essential to keep your source afloat and competitive in its niche.</p>
        </div>
        <div class="right">
          <picture>
            <source srcset="/images/tablet/search-page-aspects.png" media="(max-width:1100px)">
            <img src="/images/search-page-aspects.png" alt="">
          </picture>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aspects"
}
</script>

<style lang="scss" scoped>
.page-search__aspects {
  padding: 108px 0 $margin_section 0;
  @include _1100 {
    padding: $margin-section_tablet 0;
  }

  h2 {
    margin-bottom: 10px;
  }

  h4 {
    display: flex;
    align-items: center;
    margin-top: 54px;
    @include _1100 {
      margin-top: 44px;
    }

    &:before {
      content: '';
      background-color: $blue;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-right: 20px;
      @include _1100 {
        transform: translateY(-2px)
      }
    }
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 55px 0px 0px 0px;
  }

  @include _1100 {
    .left {
      order: 2;
    }
    .right {
      order: 1;

      img {
        width: 100%;
        margin-bottom: 44px;
      }
    }
  }
}

</style>
