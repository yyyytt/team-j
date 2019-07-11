<template>
  <v-touch @swiperight="onSwipeRight">
    <div class="introduction" @click="next">
      <introduction-item/>
    </div>
  </v-touch>
</template>

<script>
import IntroductionItem from '@/components/IntroductionItem'

export default {
  name: 'introduction',
  components: {
    IntroductionItem
  },
  methods: {
    next() {
      this.$router.push('/1')
    },
    onSwipeRight() {
      this.$router.push('/1')
    }
  }
}
</script>

<style scoped>
.introduction {
  margin-top: 3rem;
}

</style>