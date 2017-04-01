<template>
  <div class="cdu-news">
    <location></location>
    <div class="content">

    </div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'cdu-news',
    data () {
      return {
        url: 'http://localhost:8080/data/newsAll',
        newsList: []
      }
    },
    components: {
      location
    },
    created () {
      document.title = '学院新闻';
      this.getData();
    },
    methods: {
      getData () {
        ajax.get(this.url)
        .then(data => {
          this.newsList = Object.assign([], data);
        });
      }
    }
  }
</script>

<style lang="scss">
  .cdu-news{
    width: 80%;
    margin: 0 auto;
  }
</style>

