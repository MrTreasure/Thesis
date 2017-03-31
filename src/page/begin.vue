<template>
  <div class="begin">
    <div class="swiper-wrapper">
      <my-swiper></my-swiper>
    </div>
    <div class="content-wrapper">
      <news></news>
      <news></news>
      <news></news>
      <news></news>
      <news></news>
      <news></news>
      <news></news>
      <news></news>
    </div>
  </div>
</template>

<script>
  import mySwiper from 'components/mySwiper.vue';
  import news from 'components/news.vue';
  export default {
    name: 'begin',
    components: {
      mySwiper,
      news
    }
  }
</script>

<style lang="scss">
.begin{
  width: 80%;
  margin: 0 auto;
  .content-wrapper{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
