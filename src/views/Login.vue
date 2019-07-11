<template>
  <div class="login">
    <h2>Login</h2>
    <form class="login-form" @keydown.enter="login">
      <div class="input__container">
        <input type="email" v-model="email" placeholder="E-mail">
        <div class="underline"></div>
      </div>
      <div class="input__container">
        <input type="password" minlength="8" v-model="password" placeholder="Password" autocomplete="off">
        <div class="underline"></div>
      </div>
      <button type="button" @click="login">Login</button>
    </form>

    <!-- <google-login-btn/> -->

    <hr>

    <div>
      <p>If you don't have your Account,</p>
      <router-link to="/signup"><button>Sign Up</button></router-link>
    </div>

  </div>
</template>

<script>
import Firebase from '../firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      Firebase.mailLogin(this.email, this.password)
    }
  }

}
</script>

<style scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
    margin-bottom: 5rem;
  }

  .input__container {
    margin-bottom: 2rem;
  }

  input {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    padding: .8rem;
    outline: none;
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

  .underline {
    width: 22rem;
    height: 2px;
    background: #aa5cb2;
    transform-origin: center center;
    transform: scaleX(0);
    transition: transform .2s ease-out;
    margin-top: -2rem;
  }

  input:focus + .underline {
    transform: scaleX(1);
  }

</style>
