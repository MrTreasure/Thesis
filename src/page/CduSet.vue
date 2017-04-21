<template>
  <div class="cdu-set">
    <location :navs="navs"></location>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'cdu-set',
    data () {
      return {
        navs: [
          {
            name: '学院概况',
            click: false
          },
          {
            name: '机构设置',
            click: false
          }
        ],
        content: '',
        url: 'http://localhost:8080/data/info?name=set'
      }
    },
    created () {
      this.getData();
      document.title = '机构设置';
    },
    components: {
      location
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
  .cdu-set{
    width: 80%;
    margin: 0 auto;
    background: #F4F4F4;
  }
</style>
