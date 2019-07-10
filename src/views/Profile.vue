<template>
  <main>
    <header>
      <h1>{{ msg }}</h1>
      <div class="header-item">
        <div class="icon-pic-s">
          <img src="../assets/itsuki.png" alt="pic1">
        </div>
        <div class="sankaku"></div>
      </div>
    </header>

    <div class="container">
      <div class="profile">
        <div class="icon">
          <div class="user-info">
            <div class="icon-pic"><img src="../assets/itsuki.png" alt="pic1"></div>
            <div class="name">
              <div class="first-name">{{ first_name }}</div>
              <div class="last-name">{{ last_name }}</div>
            </div>
          </div>
          <div class="edit-btn">Setting</div>
        </div>
        <div class="About-you">
          <h4>About You</h4>
          <p>Hey! I’m Itsuki, a visual artist from Toronto. I love experimenting with reality and texture. If you enjoy my videos, please follow me!! I’ll follow you back :))</p>
        </div>
      </div>

      <div class="Menu">
        <h4> Your Activity Menu</h4>
        <h2>Your Movies</h2>
        <div class="movies">
          <div class="pic1">
            <img src="../assets/movie1.png" alt="pic1">
            <h4 class="movie-title">Achieve</h4>
            <p class="movie-postdate">Posted 1w ago</p>
          </div>
          <div class="pic1">
            <img src="../assets/movie2.png" alt="pic1">
            <h4 class="movie-title">Achieve</h4>
            <p class="movie-postdate">Posted 1w ago</p>
          </div>
        </div>
        <div class="movies">
          <div class="pic1">
            <img src="../assets/movie3.png" alt="pic1">
            <h4 class="movie-title">Achieve</h4>
            <p class="movie-postdate">Posted 1w ago</p>
          </div>
          <div class="pic1">
            <img src="../assets/movie4.png" alt="pic1">
            <h4 class="movie-title">Achieve</h4>
            <p class="movie-postdate">Posted 1w ago</p>
          </div>
        </div>
        <p class="see_all">See all uploads</p>
      </div>

      <div class="activity">
        <h2 class="top-margin">Daily Log</h2>
        <div class="daily">
          <img src="../assets/daily.png" alt="pic1">
        </div>
        <p class="see_all">See all logs</p>
      </div>

      <div class="log">
        <h2 class="top-margin">Monthly Log</h2>
        <div class="monthly">
          <img src="../assets/monthly.png" alt="pic1">
        </div>
        <p class="see_all">See everyone you follow</p>
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
      signup: "sign up",
      first_name: "Itsuki",
      last_name: "Kikuyama"
    };
  }
};
</script>

<style scoped>

main {
  width: 375px;
  margin: auto;
}

header {
  display: flex;
  padding-left: 40px;
  margin: auto;
}

p {
  font-size: 16px;
}

.header-item {
  padding-left: 120px;
  display: flex;
  padding-top: 20px;
}

.header-item p {
  padding-top: 15px;
  padding-left: 5px;
  color: #9966cc;
}

.icon-pic-s {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.icon-pic-s >img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

.sankaku{
	width: 0;
	height: 0;
  margin: 15px 10px;
	border: 10px solid transparent;
	border-top: 10px solid #AA5CB2;
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

.user-info{
  display: flex;
}

.name{
  padding: 10px;
}

.first-name{
  font-size: 36px;
  font-weight: bold;
}

.last-name{
  font-size: 20px;
  font-weight: bold;
}

.edit-btn {
  /* padding: 10px 0px 10px 37px; */
  color: #9966cc;
  margin: auto;
  padding: 8px;

  border: 2px solid #9966cc; /*線の太さ・色*/
  background-color: #fff; /*背景色*/
  box-shadow: -2px 5px 5px #e8d3c7; /*影*/
  border-radius: 20px; /*角の丸み*/
  text-align: center;
  width: 117px;
  height: 20px;
  line-height: 20px;
}

.desc{
  width: 330px;
  margin: auto;
}

.icon-pic {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.icon-pic >img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;
}

.movies {
  width: 375px;
  display: flex;
  justify-content: space-evenly;
}

.pic1 {
  width: 40%;
  height: 200px;
}

.pic1 >img {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}

.daily {
  width: 370px;
  height: 460px;
}

.daily >img {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}

.monthly {
  width: 370px;
  height: 460px;
  overflow: auto;
}

.monthly >img {
  width: auto;
  max-width: none;
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

.see_all{
  text-align: center;
  color: #AA5CB2;
  font-weight: bold;
}

</style>
