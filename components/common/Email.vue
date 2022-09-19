<template>
  <div class="mail-form" :class="{error:error}">
    <div>
      <input type="text" placeholder="mail@mail.com" v-model="inputValue" :class="{error:error}" @keyup="validateMail">
      <svg v-if="error" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.98 0.342285C11.3777 0.342285 10.8171 0.654676 10.5113 1.17267L0.88389 17.5133C0.578025 18.0328 0.577506 18.6707 0.88389 19.1897C1.1762 19.6711 1.85643 20.0192 2.36789 20.0278H21.5998C22.2032 20.0302 22.7611 19.7177 23.0685 19.1974C23.3753 18.6784 23.3825 18.033 23.0763 17.5134L13.4489 1.17285C13.143 0.654834 12.5824 0.342461 11.9801 0.342461L11.98 0.342285ZM11.98 1.32646C12.2184 1.32646 12.4876 1.47734 12.6029 1.6725L22.2228 18.0131C22.3381 18.2088 22.3383 18.4942 22.2228 18.6897C22.108 18.8838 21.8388 19.044 21.5999 19.0434H2.36802C2.12927 19.0434 1.84966 18.8797 1.73739 18.6897C1.62188 18.4942 1.62222 18.2088 1.73739 18.0131L11.3573 1.6725C11.4725 1.47734 11.7418 1.32646 11.9802 1.32646H11.98ZM11.98 6.00174C11.3005 6.00174 10.7497 6.55253 10.7497 7.23207L10.9958 13.1377C10.9958 13.6813 11.4364 14.1219 11.98 14.1219C12.5236 14.1219 12.9642 13.6813 12.9642 13.1377L13.2103 7.23207C13.2103 6.55253 12.6595 6.00174 11.98 6.00174H11.98ZM11.98 14.8601C11.1645 14.8601 10.5035 15.5211 10.5035 16.3366C10.5035 17.1519 11.1645 17.8131 11.98 17.8131C12.7955 17.8131 13.4565 17.1521 13.4565 16.3366C13.4565 15.5211 12.7955 14.8601 11.98 14.8601Z"
          fill="#EF4D4D" stroke="#EF4D4D" stroke-width="0.3"/>
      </svg>
      <svg v-if="!error && !default_icon" width="25" class ="success" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_418_2737)">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M23.1811 5.8383L8.69479 20.5254C8.20716 21.0416 7.37514 21.0416 6.88754 20.5254L0.9209 14.4153C0.433268 13.8991 0.433268 13.0957 0.9209 12.5795C1.40853 12.0632 2.24055 12.0632 2.72815 12.5795L7.80558 17.7716L21.4026 4.00242C21.8903 3.48617 22.7223 3.48617 23.2099 4.00242C23.6971 4.51886 23.6971 5.32206 23.1809 5.83851L23.1811 5.8383Z"
                fill="#04009A"/>
        </g>
        <defs>
          <clipPath id="clip0_418_2737">
            <rect width="24" height="24" fill="white" transform="translate(0.0634766 0.263672)"/>
          </clipPath>
        </defs>
      </svg>
      <svg v-if="default_icon" class="default" width="23" height="17" viewBox="0 0 23 17" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.7264 0.578857H1.59425C0.861646 0.578857 0.265625 1.17488 0.265625 1.90748V15.1937C0.265625 15.9263 0.861646 16.5223 1.59425 16.5223H20.7264C21.459 16.5223 22.0551 15.9263 22.0551 15.1937V1.90748C22.0551 1.17488 21.459 0.578857 20.7264 0.578857ZM11.1603 9.72218L2.94068 2.17321H19.3797L11.1603 9.72218ZM7.60813 8.62447L1.85997 13.7474V3.34532L7.60813 8.62447ZM8.78822 9.70836L10.2356 11.0375C10.4849 11.2793 10.8122 11.4122 11.1603 11.4122C11.5084 11.4122 11.8361 11.2793 12.0851 11.0375L13.5322 9.70836L19.389 14.928H2.93138L8.78822 9.70836ZM14.7126 8.62474L20.4607 3.34532V13.7474L14.7126 8.62474Z"
          fill="#D3D3D3"/>
      </svg>


      <span class="input-error" v-if="error">Wrong email format</span>
      <Primary>
        <button @click="handlerMail">Send</button>
      </Primary>
    </div>

  </div>

</template>

<script>
import Primary from "../buttons/Primary";

export default {
  name: "Email",
  components: {
    Primary,
  },
  data() {
    return {
      inputValue: '',
      error: false,
      default_icon: true,
    }
  },
  computed: {
    getMail() {
      return this.error
    }
  },
  methods: {
    validateMail() {
      this.default_icon = false;
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(this.inputValue);
      if (re) {
        this.error = false;
      } else {
        this.error = true;
      }
    },
    handlerMail() {
      if (!this.getMail && this.inputValue.length > 0) {
        this.$emit('mailHandler', this.inputValue);
        this.inputValue = '';
        this.default_icon = true;
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.mail-form {
  & > div {
    display: flex;
    align-items: center;
    position: relative;

    .input-error {
      font-size: 14px;
      line-height: 160%;
      color: #EF4D4D;
      display: block;
      position: absolute;
      left: 0;
      bottom: -24px;
    }

    input {
      height: 72px;
      width: 500px;
      background-color: $b_default;
      border-radius: 8px 0px 0px 8px;
      padding-left: 58px;
      border: 1px solid $b_default;
      transition: 0.2s;

      &:focus, &:active {
        border-color: $blue;

        & ~ .default path {
          fill: $blue;
        }
      }


      &.error {
        border-color: #EF4D4D;
      }

      @include _1100 {
        width: 100%;
      }
      @include _575 {
        height: 54px;
      }

      &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
        color: $gray;
      }
    }

    svg {
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);

      path {
        transition: 0.2s;
      }
    }
  }

  &.error {
    button {
      opacity: 0.5;
    }
  }
}

</style>
