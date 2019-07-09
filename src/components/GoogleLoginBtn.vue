<template>
  <div id="googleLoginBtn" @click="googleLogin">
    <img src="../assets/google_signin_btn.png">
  </div>
</template>

<script>
import Firebase from '../firebase'

export default {
  name: 'googleLoginBtn',
  methods: {
    googleLogin() {
      Firebase.googleLogin()
    }
  }

}
</script>

<style scoped>
  #googleLoginBtn {
    cursor: pointer;
  }
</style>
