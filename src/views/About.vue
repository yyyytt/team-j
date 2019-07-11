<template>
  <div class="about">
    <h1>about</h1>
    <div v-if="userStatus">
      <p>{{ user.displayName }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.uid }}</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Guestさん</p>
    </div>
  </div>
</template>

<script>
import Firebase from '../firebase'

export default {
  name: 'about',
  computed: {
    user() {
      return this.$store.getters.user
    },
    userStatus() {
      return this.$store.getters.isLoggedIn
    },
    // mounted() {
    //   if (!this.$store.getters.isLoggedIn) {
    //     this.$router.push('/login')    
    //   }
    // }
  },
  methods: {
    logout() {
      Firebase.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
