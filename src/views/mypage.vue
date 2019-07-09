<template>
  <main>
    <header>
      <h1>{{ msg }}</h1>
      <div class="header-item">
        <i class="fas fa-search"></i>
        <img src="../assets/itsuki.png" />
        <i class="fas fa-sort-down"></i>
      </div>
    </header>

    <div>
      <h4>Today’s Your Menu</h4>
      <img class="top" src="../assets/men.png" alt />
      <h3>上半身を中心としたエクササイズ</h3>
    </div>

    <div class="trainer">
      <img src="../assets/Sharapova.png" alt />
      <h5>シャラポワトレーナー</h5>
      <i class="fas fa-user-astronaut">+Follwed</i>
    </div>

    <p>
      Hi! Itsuki 今日やるメニューはこれよ！
      <br />あなたのそのたるんだ身体を鍛えて
      <br />あげるわ！ガッデム
    </p>

    <div class="menu">
      <h1>Just for you</h1>
    </div>
    <section>
      <div class="left">
        <img src="../assets/1.png" alt />
        <p>下半身メニュー</p>
        <div class="user">
          <img src="../assets/nanao.png" alt />
          <h3>Nanao</h3>
        </div>
        <div>
          <i class="fas fa-user-astronaut">+</i>
          <i class="far fa-heart"></i>
        </div>
      </div>

      <div class="right">
        <img src="../assets/2.png" alt />
        <p>腹筋メニュー</p>
        <div class="user">
          <img src="../assets/yamazaki.png" alt />
          <h3>Yamazaki</h3>
        </div>
        <div>
          <i class="fas fa-user-astronaut">+</i>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </section>

    <section2>
      <div class="left">
        <img src="../assets/3.png" alt />
        <p>痩せ顔メニュー</p>
        <div class="user">
          <img src="../assets/billy.png" alt />
          <h3>Billy</h3>
        </div>
        <div>
          <i class="fas fa-user-astronaut">+</i>
          <i class="far fa-heart"></i>
        </div>
      </div>

      <div class="right">
        <img src="../assets/4.png" alt />
        <p>Shake It Up</p>
        <div class="user">
          <img src="../assets/ikezaki.png" alt />
          <h3>Ikezaki</h3>
        </div>
        <div>
          <i class="fas fa-user-astronaut">+</i>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </section2>
    <p class="see all">See all recent videos</p>
    <div class="menu">
      <h1>Chat</h1>
    </div>
    <div class="trainer">
      <img src="../assets/Sharapova.png" alt />
      <h5>シャラポワトレーナー</h5>
      <i class="fas fa-user-astronaut">+Follwed</i>
    </div>
    <p>Wow, I can’t believe I got featured…. Thanks, Vido! Such an honor :)</p>

    <div class="number">
      <i class="fas fa-plus">130</i>
      <i class="fas fa-minus">130</i>
      <i class="fas fa-reply">Reply</i>
    </div>

    <div class="fotter-item">
      <img src="../assets/itsuki.png" />
      <h2>Itsuki</h2>
    </div>
    <p>I can believe it!! Amazing job, Coryhoea!</p>
    <div class="number">
      <i class="fas fa-plus">130</i>
      <i class="fas fa-minus">130</i>
      <i class="fas fa-reply">Reply</i>
    </div>
    <div class="container">
      <ul>
        <li>Add a comment</li>
        <input type="text" />
        <div class="underline"></div>
      </ul>
    </div>
    <input class="btn-flat-border" type="submit" value="Submit comment" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      msg: "My Gym",
      login: "Log in",
      or: "or",
      signup: "sign up"
    };
  }
};
</script>

<style scoped>
main {
  margin: auto;
  width: 375px;
}
header {
  margin: auto;
  width: 350px;
}

/* itsuki style */
.top {
  width: 100%;
}
header {
  display: flex;
  padding-left: 35px;
}

.header-item {
  padding-left: 79px;
  display: flex;
}

.header-item img {
  width: 45px;
  height: 45px;
  border-radius: 20px;
  margin: auto;
  margin-left: 15px;
}

.header-item p {
  padding-top: 15px;
  padding-left: 5px;
  color: #9966cc;
}

.fas.fa-search {
  margin: auto;

  color: #fff;
  background-color: #9966cc;
  border-radius: 30px;
  padding: 4px;
}

.trainer {
  display: flex;
  padding-left: 20px;
}

.trainer h5 {
  margin: 0;
  padding-top: 10px;
  padding-left: 20px;
}

.trainer img {
  width: 45px;
  height: 45px;
  border-radius: 20px;
}
.fas.fa-user-astronaut {
  /* padding: 10px 0px 10px 37px; */
  color: #9966cc;
  margin: auto;
  padding: 8px;

  border: 2px solid #9966cc;
  background-color: #fff;
  box-shadow: -2px 5px 5px #e8d3c7;
  border-radius: 20px;
}
.btn {
  margin-top: 27px;
  height: 30px;
  width: 60px;
  display: inline-block;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  color: #fff;
  background-color: #9966cc;
  transition: 0.4s;
}

.btn:hover {
  background-image: linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
}

.btn-signup {
  color: #9966cc;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
}

section {
  display: flex;
}

.left img {
  width: 100%;
}

.right img {
  width: 100%;
}

.far.fa-heart {
  color: #9966cc;
  margin: auto;
  padding: 8px;

  border: 2px solid #9966cc; /*線の太さ・色*/
  background-color: #fff; /*背景色*/
  box-shadow: -2px 5px 5px #e8d3c7; /*影*/
  border-radius: 20px;
}

section2 {
  display: flex;
  padding-top: 30px;
}

.menu {
  text-align: -webkit-auto;
  margin-left: 15px;
  margin-top: 80px;
}

.see.all {
  padding-top: 20px;
  color: #9966cc;
}

.number {
  color: #9966cc;
  display: flex;
  padding-left: 30px;
}

.user {
  display: flex;
  padding-bottom: 20px;
}
.user img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: auto;
  margin-left: 15px;
}

.user h3 {
  margin: auto;
}

.fotter-item {
  padding-left: 50px;
  display: flex;
  padding-top: 20px;
}

.fotter-item img {
  width: 45px;
  height: 45px;
  border-radius: 20px;
  margin: auto;
  margin-left: 15px;
}

.fotter-item h2 {
  padding-right: 150px;
}
ul {
  list-style: none;
  background-image: none;
  padding-left: 0;
}

.container {
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
}

input {
  width: 200px;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
  text-align: start;
}

.underline {
  width: 200px;
  height: 2px;
  background: skyBlue;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
  margin-left: 50px;
}

input:focus + .underline {
  transform: scaleX(1);
}

.btn-flat-border {
  display: inline-block;
  padding: 0.3em 2em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
}

.btn-flat-border:hover {
  background: #67c5ff;
  color: white;
}
</style>
