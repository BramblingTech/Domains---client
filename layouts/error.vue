<template>
  <div class="page-error">
    <div class="error">
      <span>{{ error.statusCode }} ERROR</span>
    </div>
    <div class="container">
      <h1>looks like yo<span>u in dead end</span></h1>
      <p>Please re-type your URL-address or go to the Home page</p>
      <Blue>
        <NuxtLink to="/">Go to the Home page</NuxtLink>
      </Blue>
    </div>
  </div>

</template>

<script>
import Blue from "@/components/buttons/Blue";

export default {
  name: "error",
  layout: 'error-page',
  props: ['error'],
  components: {Blue}
}
</script>

<style lang="scss" scoped>
.page-error {
  height: calc(100vh - 74px);
  background-image: url("/images/404.png");
  background-position: top right;
  background-size: 1307px 100%;
  background-repeat: no-repeat;
  position: relative;
  @media(max-width: 1536px) {
    background-size: 1110px 100%;
  }
  @media(max-width: 1519px) {
    background-size: 1100px 100%;
  }
  @media(max-width: 1366px) {
    background-size: 1024px 100%;
  }
  @media(max-width: 1280px) {
    background-size: 892px 100%;
  }
  @include _990 {
    height: calc(100vh - 54px);
  }
  @media(max-width: 1279px) {
    background: none;
  }
  @include _575 {
    min-height: 100vh;
  }

  .error {
    font-family: 'Bebas Neue', cursive;
    color: #FCFCFC;
    position: absolute;
    left: 70%;
    top: 55%;
    transform: translate(-70%, -70%);
    font-size: 104px;
    display: flex;
    white-space: pre;
    border-left: 4px solid #FCFCFC;
    line-height: 75px;

    @media(max-width: 1280px) {
      left: 80%;
    }
    @media(max-width: 1279px) {
      position: static;
      width: 100%;
      transform: translate(0, 0);
      height: 60%;
      background-size: cover;
      background-image: url("/images/404.png");
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center;
      border: none;
      font-size: 74px;
    }

    span {
      opacity: .5;
    }
  }

  .container {
    padding-top: 340px;
    padding-left: 0;
    @media(max-width: 1540px) {
      padding-top:180px;
    }

    @media(max-width: 1279px) {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-left: 30px;
      padding-bottom: 22px;
      background: $b_green;
      max-width: 100%;
    }

    p {
      width: 23%;
      margin-bottom: 34px;
      @media(max-width: 1279px) {
        width: 100%;
        text-align: center;
      }
    }

    h1 {
      display: flex;
      @media(max-width: 1279px) {
        padding-top: 54px;
      }
      @include _575 {
        display: block;
      }

      span {
        @media(min-width: 1280px) {
          color: #FCFCFC;
        }
      }
    }
  }


}

</style>
