<template>
  <div id="signup">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Signup</h2>
    <form class="signup-form" @keydown.enter="signUp">
      <input type="text" v-model="userName" placeholder="Your Name" autocomplete="off">
      <input type="email" v-model="email" placeholder="E-mail" autocomplete="off">
      <input type="password" minlength="8" v-model="password" placeholder="Password" autocomplete="off">
      <input type="password" minlength="8" v-model="againPassword" placeholder="Password again" autocomplete="off">
      <button type="button" @click="signUp">Sign Up</button>
    </form>

    <hr>
    
    <google-login-btn/>
  </div>
</template>

<script>
import Firebase from '../firebase'
import GoogleLoginBtn from '../components/GoogleLoginBtn'

export default {
  name: 'signup',
  components: {
    GoogleLoginBtn,
  },
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      againPassword: ''
    }
  },
  methods: {
    signUp() {
      if (this.password !== this.againPassword) {
        console.log('passが違うよ');
        return
      }
      Firebase.signUp(this.userName, this.email, this.password)
    },
    googleLogin() {
      Firebase.googleLogin()
    }
  }
}
</script>

<style scoped>
  .signup-form {
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
  }

  input {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    padding: .8rem;
    border: none;
    border-bottom: 1px solid #eee;
    width: 20rem;
  }

  input::placeholder {
    text-align: right;
    font-size: 1rem;
  }

  button {
    width: 20rem;
    padding: .8rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    color: #aa5cb2;
    background: #fff;
    transition: .2s;
  }
  button:hover {
    color: #fff;
    background: #aa5cb2;
    cursor: pointer;
  }

  hr {
    margin: 2rem 0; 
  }

</style>
