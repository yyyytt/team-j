import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Introduction_1 from '@/views/Introduction_1.vue'
import Introduction_2 from '@/views/Introduction_2.vue'
import ToLogin from '@/views/ToLogin.vue'
import MyPage from '@/views/MyPage.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import UserInfo from '@/views/UserInfo.vue'
import Profile from '@/views/Profile.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes: [
    {
      path: '/',
      name: 'introduction_1',
      component: Introduction_1
    },
    {
      path: '/1',
      name: 'introduction_2',
      component: Introduction_2
    },
    {
      path: '/to-login',
      name: 'to-login',
      component: ToLogin
    },
    {
      path: '/my-page',
      name: 'my-page',
      component: MyPage,
      // home画面に遷移した時、ログインしていなければログインページに飛ばしたい
      beforeEnter(to, from, next) {
        if (!store.getters.isLoggedIn) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user-info',
      name: 'user-info',
      component: UserInfo
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})