<template>
  <div class="location">
    <span class="first box" @click="go">首页</span>/<span class="second box" @click="goNext" :class="{usable: hasUrl}">{{this.url}}</span>
  </div>
</template>

<script>
  import { route } from 'common/route';
  export default {
    name: 'location',
    computed: {
      url () {
        let url = (this.$route.fullPath).replace('/', '');
        return route[url];
      },
      param () {
        return this.$route.param
      },
      hasUrl () {
        return (this.param === '');
      }
    },
    methods: {
      go () {
        this.$router.push({name: 'begin'});
        console.log(this.url);
      },
      goNext () {
        if (this.hasUrl) {
          this.$router.push({name: 'news'});
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
