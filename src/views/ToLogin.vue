<template>
  <v-touch @swipeleft="onSwipeLeft">
    <div class="to-login">
      <h1>My Gym</h1>
      <main-btn @click="toLogin" str="始めてみよう！"/>
    </div>
  </v-touch>
</template>

<script>
import MainBtn from '@/components/MainBtn'

export default {
  name: 'to-login',
  components: {
    MainBtn
  },
  methods: {
    toLogin() {
      this.$router.push('/my-page')
    },
    onSwipeLeft() {
      this.$router.push('/1')
    },
  }
}
</script>

<style scoped>
  .to-login {
    margin-top: 10rem;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: .3rem;
    margin-bottom: 5rem;
  }

</style>
