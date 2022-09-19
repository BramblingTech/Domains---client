<template>
  <div class="modal-mail">
    <h2>thank you!</h2>
    <svg width="84" height="41" viewBox="0 0 84 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M78.4239 0.878906H26.2843C23.6878 0.878906 21.5743 2.9926 21.5743 5.58967V35.6076C21.5743 38.2057 23.688 40.3184 26.2843 40.3184H78.4239C81.0204 40.3184 83.1339 38.2047 83.1339 35.6076L83.1331 5.58967C83.1331 2.99165 81.0194 0.878906 78.4231 0.878906H78.4239ZM79.9341 35.6069C79.9341 36.4401 79.2571 37.1179 78.4239 37.1179H26.2843C25.451 37.1179 24.774 36.4401 24.774 35.6069V8.4572L25.8409 9.11189L51.6669 24.9675L51.9243 25.1244H52.7858L78.8689 9.1127L79.9358 8.458L79.9341 35.6069ZM79.9341 5.95459L79.0919 6.47164L78.868 6.60928L52.3545 22.8867L25.8409 6.60852L25.6177 6.47163L24.774 5.95381V5.58926C24.774 4.75601 25.4511 4.07825 26.2843 4.07825H78.4239C79.2571 4.07825 79.9341 4.75601 79.9341 5.58926L79.9341 5.95459ZM17.1975 9.9022V12.0359H0.831543V9.90296L17.1975 9.9022ZM3.88857 19.5315H17.1975V21.6652H3.88857V19.5315ZM5.62575 29.1608H17.1975V31.2938L5.62575 31.2945V29.1608Z"
        fill="#04009A"/>
    </svg>
    <p>Our team will contact to you soonest Have a good day!</p>
    <Border>
      <button @click="$emit('close')">Close</button>
    </Border>
  </div>
</template>

<script>

import Border from "@/components/buttons/Border";

export default {
  name: "MailModal",
  components: {Border}
}
</script>

<style lang="scss" scoped>
.modal-mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 590px;
  @media(max-width: 660px){
    width:100%;
  }
  h2 {
    margin-bottom: 43px;
  }

  p {
    width: 50%;
    text-align: center;
    margin: 24px 0;
    @media(max-width: 660px){
      width:80%;
    }

  }
}
</style>
