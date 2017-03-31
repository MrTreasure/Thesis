<template>
  <div class="home">
    <div class="top">
      <span class="time">当前时间{{this.time}}</span>
    </div>
    <div class="header">
      <div class="banner">
        <img src="~assets/img/cdu.png" alt="成都大学" class="logo">
        <h1 class="title">信息科学与工程学院</h1>
      </div>
    </div>
    <div class="nav-wrapper">
      <navigation></navigation>
    </div>
    <router-view></router-view>
    <div class="foot-wrapper">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import navigation from 'components/navigation';
import foot from 'components/foot';
export default {
  name: 'home',
  data () {
    return {
      time: ''
    }
  },
  created () {
    setInterval(() => {
      this.time = (new Date()).toLocaleString();
    }, 1000);
  },
  components: {
    navigation,
    foot
  }
}
</script>

<style lang="scss">
@import '~assets/scss/colors.scss';
body{
  background: url(~assets/img/bg3.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.top{
  width: 80%;
  height: 30px;
  margin: 2% auto 0;
  background: $blue0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  .time{
    color: white;
    line-height: 30px;
    padding-left: 20px;
  }
}
.home{
  .header{
    background: $blue1;
    margin: 0 auto;
    width: 80%;
    .banner{
      margin: 0 auto;
      width: 80%;
      height: 20%;
      padding: 1rem;
      display: flex;
      .title{
        color: white;
        font-size: 3rem;
        flex: 1;
        line-height: 4rem;
        padding-left: 2rem;
      }
      .logo{
        flex:0 0 270px;
        width: 270px;
      }
    }
  }
  .nav-wrapper{
    margin: 0 auto;
    width: 80%;
  }
  .foot-wrapper{
    width: 80%;
    margin: 2rem auto 0;
  }
}
</style>
