<template>
  <div id="introduction">
    <div class="container">
      <h2>{{ lead1 }}</h2>
      <h2>{{ lead2 }}</h2>
      <div class="pic"><img :src="image"></div>
      <div class="desc">
        <p>{{ desc }}</p>
      </div>
    </div>
    <footer>
      <p>© 2019 My Gym Itsuki Corp.</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'introduction',
  props: {
    lead1: {
      type: String,
      default: 'あなたに必要なフィットネスを',
    },
    lead2: {
      type: String,
      default: '好きな場所で',
    },
    desc: {
      type: String,
      default: '身体情報、目標とする体重・体型を登録するだけで、あなたのためのトレーニングを表示します。自宅にいながらパーソナルトレーナーがいるような環境を実現します。',
    },
    number: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      image: require(`../assets/pic${this.number}.png`)
    }
  }
}
</script>

<style scoped>
.container{
  width: 375px;
  margin: 0 auto;
  text-align: justify;
}

.container > h2{
  text-align: center;
  font-size: 23px;
  font-weight: normal;
  line-height: 1;
}

.desc{
  width: 330px;
  margin: auto;
}

.pic {
  width: 375px;
  height: 300px;
  background-color: #ccc;
  margin: 2rem 0;
}

.pic >img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

footer {
  margin: auto;
  width: 335px;
  text-align: right;
  padding: 20px;
  color: #ccc;
}

</style>
