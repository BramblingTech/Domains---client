<template>
  <div class="main">
    <client-only>
      <Preloader/>
    </client-only>
    <Header/>
    <Nuxt/>
    <Footer/>
    <Modal v-show="showModal" @close="closeModal">
      <MailModal @close="closeModal"/>
    </Modal>
  <cookies></cookies>
  </div>
</template>

<script>
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Preloader from "~/components/base/Preloader.vue";
import {preloader} from "~/store/preloader";
import Modal from "@/components/common/Modal";
import {modalMail} from "~/store/mail"
import MailModal from "@/components/common/MailModal";
import Cookies from "@/components/base/Cookies";

export default {
  name: "default",
  components: {
    Header,
    Footer,
    Preloader,
    Modal,
    MailModal,
    Cookies
  },
  data() {
    return {
      showModal: false,
    }
  },
  created() {
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', true)
    }, 1)

  },

  mounted() {
    this.$store.watch(() => modalMail.getters.getModal, state => {
      this.showModal = state;
      if (state) {
        this.$lockBody()
      } else {
        setTimeout(() => {
          this.$unlockBody()
        }, 300)

      }
    })
    setTimeout(() => {
      preloader.dispatch('addPreloaderState', false)
    }, 500)
  },
  methods: {
    closeModal() {
      modalMail.dispatch('addModalMailState', false)
    }
  },
}
</script>
