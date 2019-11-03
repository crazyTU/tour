<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
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
