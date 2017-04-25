<template>
  <div class="login">
    <div class="login-head" ref="head">
      <div class="banner">
        <img src="~assets/img/cdu.png" alt="成都大学" class="logo">
        <h1 class="title">信息科学与工程学院</h1>
      </div>
    </div>
    <div class="main">
      <div class="row">
        <span class="text">
          管理员登录
        </span>
      </div>
      <div class="row">
        <input type="text" v-model="login.username" id="username" placeholder="请输入用户名">
      </div>
      <div class="row">
        <input type="password" v-model="login.userpwd" id="userpwd" placeholder="请输入用户密码">
      </div>
      <div class="row">
        <button class="confirm" @click="myLogin">登录</button>
      </div>
      <div class="row">
        <span class="info">{{info}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { ajax } from 'common';
  export default {
    name: 'login',
    data () {
      return {
        login: {
          username: '',
          userpwd: ''
        },
        info: '',
        url: 'http://localhost:8080/data/login',
        flag: true
      }
    },
    methods: {
      myLogin () {
        if (this.login.username && this.login.userpwd) {
          if (this.flag) {
            this.flag = false;
            ajax.post(this.url, this.login)
            .then(res => {
              this.flag = true;
              if (res === 'right') {
                this.$route.meta.logged = true;
                window.sessionStorage.setItem('logged', true);
                this.$router.push({name: 'admin'});
              } else {
                this.$refs.head.className += ' warn';
                this.info = '账户或者密码错误';
                setTimeout(() => {
                  this.$refs.head.className = 'login-head';
                  this.info = '';
                  this.login.username = '';
                  this.login.userpwd = '';
                }, 1000)
              }
            })
            .catch(err => {
              console.log(err);
            });
          }
        } else {
          this.info = '请输入用户名或密码！';
          setTimeout(() => {
            this.info = '';
          }, 2000);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    width: 80%;
    margin: 2rem auto 0;
    background: #F4F4F4;
    .login-head{
      background: #237FFF;
      border-radius: 5px 5px 0 0;
      padding: 2rem;
      transition: all .5s;
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
    .warn{
      background: red;
    }
    .main{
      position: relative;
      text-align: center;
      padding: 2rem;
      .row{
        margin-bottom: 2rem;
      }
      .text{
        font-size: 1.2rem;
      }
      input{
        outline: none;
        border: none;
        border-radius: 5px;
        height: 3rem;
        width: 15rem;
        font-size: 1rem;
        text-align: center;
        &:focus{
          box-shadow: 0 0 2px 0 #237FFF;
        }
      }
      input::-ms-input-placeholder{
        text-align: center;
      }
		  input::-webkit-input-placeholder{
        text-align: center;
      }
      .confirm{
        outline: none;
        border: none;
        border-radius: 8px;
        height: 3rem;
        width: 15rem;
        transition: all .5s;
        &:hover, &:active{
          background: #237FFF;
          color: white;
        }
      }
      .info{
        color: #999d9c;
      }
    }
  }
</style>
