<template>
  <v-touch @swiperight="onSwipeRight" @swipeleft="onSwipeLeft">
    <div class="introduction" @click="next">
      <introduction-item
        lead1="3ヶ月で必ず結果が出ます"
        lead2="目標達成を私たちがお手伝いします"
        desc="各ユーザーの目標に合わせて、トレーニングプランが完全にカスタマイズされます。ダイエット、筋肉増強、健康全般の向上など、あなたの設定した目標の達成に向けて、独自のプランでお手伝いします。"
        number="2"
      />
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
      this.$router.push('/to-login')
    },
    onSwipeRight() {
      this.$router.push('/to-login')
    },
    onSwipeLeft() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
.introduction {
  margin-top: 3rem;
}

</style>