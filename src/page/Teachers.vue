<template>
  <div class="teachers">
    <location :navs="navs"></location>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'teachers',
    data () {
      return {
        navs: [
          {
            name: '师资队伍',
            path: 'CduNews',
            click: false
          },
          {
            name: '教授介绍',
            click: false
          }
        ],
        url: 'http://localhost:8080/data/info?name=teachers',
        content: ``
      }
    },
    components: {
      location
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        ajax.get(this.url)
        .then(res => {
          this.content = res
        });
      }
    }
  }
</script>

<style lang="scss">
  .teachers{
    width: 80%;
    margin: 0 auto;
    background: #F5F5F5;
    .content{
      padding: 2rem;
    }
  }
</style>
