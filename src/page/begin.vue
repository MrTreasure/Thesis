<template>
  <div class="begin">
    <div class="swiper-wrapper">
      <my-swiper></my-swiper>
    </div>
    <div class="content-wrapper">
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
      <news :news="urlList[0]"></news>
    </div>
  </div>
</template>

<script>
  import mySwiper from 'components/mySwiper';
  import news from 'components/news';
  export default {
    name: 'begin',
    data () {
      return {
        urlList: [
          {
            name: '学院新闻',
            url: 'http://localhost:8080/data/newsAll',
            path: 'newsAll'
          }
        ]
      }
    },
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
