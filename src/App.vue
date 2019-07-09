<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user-info">User Info</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  text-align: center;
  line-height: 1.8;
  margin: 0;
  padding: 0;
  border: 0;
  /* color: #aa5cb2; */
}
ol, ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
