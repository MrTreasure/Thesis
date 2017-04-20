<template>
  <div class="location">
    <span class="first box" @click="go">首页</span>
    <span class="box" :class="{usable: nav.click}" v-for="nav in navs" @click="goNext(nav)"><span class="split">/</span>{{nav.name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'location',
    props: {
      navs: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      go () {
        this.$router.push({name: 'begin'});
        console.log(this.url);
      },
      goNext (nav) {
        if (nav.click) {
          this.$router.push({name: nav.path});
        }
      }
    }
  }
</script>

<style lang="scss">
  .location{
    border-bottom: 2px solid #DDDDDD;
    background: #F5F5F5;
    .box{
      font-size: 1rem;
      line-height: 4.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: center;
      color: black;
    }
    .split{
      margin-right: 1rem;
    }
    .first{
      cursor:pointer;
      color: #00BFFF;
      &:hover{
        color: black;
      }
    }
    .usable{
      color: #00BFFF;
      &:hover{
        color: black;
      }
    }
  }
</style>
