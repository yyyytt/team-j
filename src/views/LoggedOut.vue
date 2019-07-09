<template>
  <main>
    <header>
      <h1>{{ msg }}</h1>
      <div class="header-item">
        <p>{{ or }}</p>
        <button class="btn-signup">{{ signup }}</button>
      </div>
    </header>
    <div class="container">
      <h2>あなたに必要なフィットネスを<br>好きな場所で</h2>
      <div class="pic1"><img src="../assets/pic1.png" alt="pic1"></div>
      <div class="desc">
        <p>身体情報、目標とする体重・体型を登録するだけで、あなたのためのトレーニングを表示します。自宅にいながらパーソナルトレーナーがいるような環境を実現します。</p>
      </div>
    </div>
     <div class="container">
      <h2 class="top-margin">３ヶ月で必ず結果が出ます</h2>
      <h3>目標達成を私たちがお手伝いします</h3>
      <div class="pic1"><img src="../assets/pic2.png" alt="pic1"></div>
      <div class="desc">
        <p>各ユーザーの目標に合わせて、トレーニングプランが完全にカスタマイズされます。ダイエット、筋肉増強、健康全般の向上など、あなたの設定した目標の達成に向けて、独自のプランでお手伝いします。</p>
      </div>
    </div>
    <footer>
      <p>© 2019 My Gym  Itsuki Corp.</p>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      msg: "My Gym",
      or: "or",
      signup: "sign up"
    };
  }
};
</script>

<style scoped>

header {
  display: flex;
  padding-left: 40px;
  margin: auto;
  width: 350px;
}

p {
  font-size: 16px;
}

.header-item {
  padding-left: 120px;
  display: flex;
}

.header-item p {
  padding-top: 15px;
  padding-left: 5px;
  color: #9966cc;
}

.btn-signup {
  color: #9966cc;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
}
ul {
  list-style: none;
  background-image: none;
  padding-left: 0;
}

.container{
  width: 375px;
  margin: 0 auto;
  text-align: justify;
}

.container > h2{
  text-align: center;
  font-size: 24px;
  font-weight: normal;
}

.container > h3{
  text-align: center;
  font-size: 20px;
  font-weight: normal;
}

.desc{
  width: 330px;
  margin: auto;
}

.pic1 {
  width: 375px;
  height: 300px;
  background-color: #ccc;
}

.pic1 >img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

footer {
  margin: auto;
  width: 335px;
  text-align: right;
  padding: 20px 20px;
  color: #ccc;
}

.top-margin {
  margin-top: 100px;
}

</style>
