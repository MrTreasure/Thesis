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
    <div class="nav-wrapper" ref="myNav">
      <navigation></navigation>
    </div>
    <router-view></router-view>
    <div class="foot-wrapper">
      <foot></foot>
    </div>
    <Back-top :height="100" :bottom="100">
      <div class="back-top">返回顶端</div>
    </Back-top>
  </div>
</template>

<script>
import navigation from 'components/navigation';
import foot from 'components/foot';
export default {
  name: 'home',
  data () {
    return {
      time: '',
      nav: {}
    }
  },
  computed: {
    top () {
      return this.nav.offsetTop;
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
  },
  mounted () {
    this.nav = this.$refs.myNav;
    // console.log(this.top);
    window.addEventListener('scroll', this.fixedNav);
  },
  methods: {
    fixedNav () {
      this.$nextTick(() => {
        let top = document.body.scrollTop;
        if (top >= this.top) {
          this.nav.className = 'fix';
        }
        if (top < this.top) {
          this.nav.className = 'nav-wrapper';
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/colors.scss';
body{
  background: url(~assets/img/bg2.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.back-top {
  padding: 10px;
  background: rgba(0, 153, 229, .7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    position: relative;
    z-index: 99;
  }
  .fix{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .foot-wrapper{
    width: 80%;
    margin: 2rem auto 0;
  }
}
</style>
