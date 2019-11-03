<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom"
          v-for="item in recommendList"
          :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/pros3.png',
          title: '猿飞日斩剧情关卡上线',
          desc: '学员们可使用猿飞日斩[秽土转生]体验全新S忍系列剧情。'
        }, {
          id: '0002',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/pros3.png',
          title: '猿飞日斩剧情关卡上线',
          desc: '学员们可使用猿飞日斩[秽土转生]体验全新S忍系列剧情。'
        }, {
          id: '0003',
          imgUrl: 'http://game.gtimg.cn/images/hyrz/cp/a20190826edition/pros3.png',
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        @include ellipse
      .item-desc
        line-height: .4rem
        color: #ccc
        @include ellipse
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
