<template>
  <div class="city-header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
.city-header{
  position: relative;
  height: $header-height
  line-height: $header-height
  background: $bg-color
  text-align: center;
  font-size: .32rem;
  color: #fff;
  .header-back{
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
