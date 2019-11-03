<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon icon-fanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon icon-jiantou"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
      city: String
    }
  }
</script>

<style lang="sass" scoped>
  @import '~@/assets/sass/varibles'
  .header
    display: flex
    justify-content: space-between
    align-items: center
    height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      color: #ccc
    .header-right
      width: 1.24rem
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
