<template>
  <div id="home">
    <h1>Home</h1>
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
  name: 'home',
  computed: {
    user() {
      return this.$store.getters.user
    },
    userStatus() {
      return this.$store.getters.isLoggedIn
    }
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
