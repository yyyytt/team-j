<template>
  <button class="main-btn" @click="click">{{ str }}</button>
</template>

<script>
export default {
  name: 'main-btn',
  props: {
    str: {
      type: String,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }

}
</script>

<style>
button {
  width: 18rem;
  padding: .6rem;
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
</style>
