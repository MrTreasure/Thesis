<template>
  <div class="my-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><div class="img-wrapper"><img src="~assets/img/img1.jpg" alt="" width="100%" height="100%"></div></swiper-slide>
      <swiper-slide><div class="img-wrapper"><img src="~assets/img/img2.jpg" alt="" width="100%" height="100%"></div></swiper-slide>
      <swiper-slide><div class="img-wrapper"><img src="~assets/img/img3.jpg" alt="" width="100%" height="100%"></div></swiper-slide>
      <!-- Option controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'my-swiper',
  data () {
    return {
      swiperOption: {
        autoPlay: 2000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        loop: true,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
  .my-swiper{
    width: 100%;
    .img-wrapper{
      width: 100%;
      height: 400px;
    }
  }
</style>
