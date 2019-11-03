<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '0001',
          imgUrl: 'http://ossweb-img.qq.com/upload/adw/image/201909/1567733531685441171.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://ossweb-img.qq.com/upload/adw/image/201909/1567736085713691984.jpg'
        }
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 40.27%
    background: #fff
    .swiper-img
      width: 100%
</style>
