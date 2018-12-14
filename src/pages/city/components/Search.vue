<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名称或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
.search{
  height: .72rem;
  padding: 0 .1rem;
  background: $bg-color;
  .search-input{
    width: 100%;
    height: .62rem;
    line-height: .62rem;
    text-align: center;
    border-box()
    padding: 0 .1rem;
    color: #666;
    border-radius(.06rem)
    border: 0;
    outline: none;
  }
}
</style>
