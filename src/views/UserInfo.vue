<template>
  <div id="userInfo">
    <ul class="info__container">
      <li>
        <input
          type="number"
          min="120"
          placeholder="Your Height"
          v-model="info.height"
        >
        <div class="underline"></div>
      </li>
      <li>
        <input
          type="number"
          min="30"
          placeholder="Your Weight"
          v-model="info.weight"
        >
        <div class="underline"></div>
      </li>
      <li>
        <label for="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          v-model="info.gender"
        >
          <option value>-- Please select --</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </li>
      <li>
        <label for="part">Train target</label>
        <select
          name="body-part"
          id="part"
          v-model="info.part"
        >
          <option value>-- Please select --</option>
          <option value="upper half">Upper half of body</option>
          <option value="lower half">Lower half of body</option>
          <option value="whole">Whole body</option>
        </select>
      </li>
      <li>
        <input
          type="number"
          min="30"
          placeholder="Goal weight"
          v-model="info.goalWeight"
        >
        <div class="underline"></div>
      </li>
    </ul>
    <button
      class="register-btn"
      @click="addUserDetail"
    >
      Register
    </button>
  </div>
</template>
​
<script>
import Firebase from '../firebase'

export default {
  name: 'userInfo',
  data() {
    return {
      uid: '',
      info: {
        height: '',
        weight: '',
        gender: '',
        part: '',
        goalWeight: ''
      },
    }
  },
  mounted() {
    this.uid = this.$store.getters.user.uid
    console.log(this.uid);
  },
  methods: {
    addUserDetail() {
      const usersCollection = Firebase.db().collection('users')
      usersCollection.doc(this.uid).set(this.info)
      .then(doc => {
        console.log('added', doc)
      })
      .catch(error => {
        console.error(error)
      })
    }
  }

}
</script>
​
<style scoped>

.info__container {
  max-width: 26rem;
  margin: auto;
}

input {
  font-size: 1rem;
  width: 10rem;
  /* border: none; */
  outline: none;
}

label {
  display: block;
}

.underline {
  width: 10rem;
  height: 2px;
  background: #aa5cb2;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform .2s ease-out;
  margin: auto;
}

input:focus + .underline {
  transform: scaleX(1);
}
</style>