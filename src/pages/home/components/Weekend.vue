<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom"
          v-for="item in recommendList"
          :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://ossweb-img.qq.com/upload/adw/image/201907/1564457219626314150.jpg',
          title: '猿飞日斩剧情关卡上线',
          desc: '学员们可使用猿飞日斩[秽土转生]体验全新S忍系列剧情。'
        }, {
          id: '0002',
          imgUrl: 'http://ossweb-img.qq.com/upload/adw/image/201910/1571107197862129726new.jpg',
          title: '猿飞日斩剧情关卡上线',
          desc: '学员们可使用猿飞日斩[秽土转生]体验全新S忍系列剧情。'
        }, {
          id: '0003',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/zlkdatasys/images/image/20181008/ab5628507d5660868c3e23862c68e6bd.jpg',
          title: '猿飞日斩剧情关卡上线',
          desc: '学员们可使用猿飞日斩[秽土转生]体验全新S忍系列剧情。'
        }]
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~@/assets/sass/mixins'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 40.23%
  .item-img
    width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      @include ellipse
    .item-desc
      line-height: .4rem
      color: #ccc
      font-size: .26rem
      @include ellipse
</style>
