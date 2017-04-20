<template>
  <div class="introduction">
    <location :navs="navs"></location>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'introduction',
    data () {
      return {
        navs: [
          {
            name: '学院概况',
            click: false
          },
          {
            name: '学院简介',
            click: false
          }
        ],
        url: 'http://localhost:8080/data/info?name=introduction',
        content: ``
      }
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        ajax.get(this.url)
        .then(res => {
          this.content = res;
        });
      }
    },
    components: {
      location
    }
  }
</script>

<style lang="scss">
  .introduction{
    background: #F4F4F4;
    width: 80%;
    margin: 0 auto;
    .content{
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
</style>

