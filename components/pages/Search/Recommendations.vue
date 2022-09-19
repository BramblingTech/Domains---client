<template>
  <div class="page-search__recommendations">
    <Box class="left-top-right-bottom">
      <div class="container">
        <h2>Get a free pdf with personalized recommendations</h2>
        <Email @mailHandler="mailHandler"/>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "../../base/Box";
import Email from "../../common/Email";
import sendMail from "@/mail/SendMail";

export default {
  name: "Recommendations",
  components: {
    Box,
    Email,
  },
  methods: {
    mailHandler(mail) {
      sendMail(mail, 'pdf');
    }
  },
}
</script>

<style lang="scss" scoped>
.page-search__recommendations {
  .box {
    padding: 78px 0 73px 0;
    @include _1100 {
      padding: 60px 0;
    }
  }

  h2 {
    text-align: center;
  }

  .mail-form {
    display: flex;
    justify-content: center;
    margin-top: 34px;
  }
}

</style>
