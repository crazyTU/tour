<template>
    <div class="icons">
      <swiper
        :options="swiperOption">
        <swiper-slide
          v-for="(page, index) in pages"
          :key="index">
          <div class="icon"
               v-for="icon in page"
               :key="icon.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="icon.imgUrl"/>
            </div>
            <p class="icon-desc">{{icon.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeIcons.vue',
    data () {
      return {
        swiperOption: {
          loop: false
        },
        iconList: [{
          id: '0001',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill1_on.png',
          desc: '火龙炎弹'
        }, {
          id: '0002',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill2.png',
          desc: '土龙弹'
        }, {
          id: '0003',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill3.png',
          desc: '轰雷'
        }, {
          id: '0004',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill4.png',
          desc: '水龙弹'
        }, {
          id: '0005',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill5.png',
          desc: '金刚牢壁'
        }, {
          id: '0006',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill6.png',
          desc: '气旋'
        }, {
          id: '0007',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/skill7.png',
          desc: '大连弹'
        }, {
          id: '0008',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/s2_skill1_on.png',
          desc: '棍术'
        }, {
          id: '0009',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/s2_skill2.png',
          desc: '面粉'
        }]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~@/assets/sass/varibles'
  @import '~@/assets/sass/mixins'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    overflow: hidden
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      @include ellipse
</style>
