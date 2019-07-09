import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import store from './store'

const config = {
  apiKey: "AIzaSyBZDeJLIaYm09MRDpAIofDzdZM8a7vWZr0",
  authDomain: "team-j.firebaseapp.com",
  databaseURL: "https://team-j.firebaseio.com",
  projectId: "team-j",
  storageBucket: "",
  messagingSenderId: "294724204587",
  appId: "1:294724204587:web:cedebda59bedbc02"
}


export default {
  init() {
    firebase.initializeApp(config)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : ''
      store.commit('onAuthStateChanged', user)
      store.commit('onUserStatusChanged', user.uid ? true : false)
      console.log(user);
      if (user) {
        console.log('logged in: ' + user.email);
        return
      }
      console.log('logged out!!');
    })
  },
  signUp(name, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(doc => {
      firebase.auth().currentUser.updateProfile({
        displayName: name
      })
      console.log(doc.user);
      console.log(`Created account: ${doc.user.email}`);
    })
    .catch(error => {
      console.log(error);
    })
  },
  mailLogin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(doc => {
      console.log(doc.user);
      console.log(`logined account: ${doc.user.email}`);
    })
    .catch(error => {
      console.log(error);
    })
  },
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout() {
    firebase.auth().signOut()
  },
  db() {
    return firebase.firestore()
  }
}