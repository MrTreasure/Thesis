<template>
  <div class="general">
    <location :navs="navs"></location>
    <div class="content" v-html="content">
    </div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'general',
    data () {
      return {
        name: '',
        navs: [
          {
            name: '',
            click: false
          }
        ],
        url: '',
        content: ''
      }
    },
    components: {
      location
    },
    created () {
      this.getRoute();
      this.getData();
    },
    methods: {
      getRoute () {
        // let route = this.$route;
      },
      getData () {
        ajax.get(this.url)
        .then(res => {
          this.content = res;
        });
      }
    }
  }
</script>

<style lang="scss">
</style>
