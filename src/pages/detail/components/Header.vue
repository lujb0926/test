<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="isShowAbs">
      <div class="iconfont header-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
      v-show="!isShowAbs"
      :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      详情页
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowAbs = false
      } else {
        this.isShowAbs = true
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/commons/styles/index.styl'
.header-abs{
  position: absolute;
  top: .2rem;
  left: .2rem;
  width: .8rem;
  height: .8rem;
  text-align: center;
  line-height: .8rem;
  background: $color-background-black-o8;
  border-radius(.4rem);
  .header-abs-icon{
    color: #fff;
    font-size: .4rem;
  }
}
.header-fixed{
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height
  line-height: $header-height
  background: $bg-color
  text-align: center;
  font-size: .32rem;
  color: #fff;
  .header-fixed-back{
    position: absolute;
    top: 0;
    left: 0;
    width: $header-height;
    text-align: center;
    color: #fff;
    font-size: .4rem;
  }
}
</style>
