<template>
  <div class="cdu-news">
    <location></location>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
  import location from 'components/location';
  export default {
    name: 'cdu-news',
    data () {
      return {

      }
    },
    components: {
      location
    },
    created () {
      document.title = '学院新闻';
    }
  }
</script>

<style lang="scss">
  .cdu-news{
    width: 80%;
    margin: 0 auto;
  }
</style>

