<template>
<div class="list">
  <div class="item" v-for="(item, key) in cities" :key="key">{{key}}</div>
</div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
.list{
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item{
      text-align: center;
    line-height: .4rem;
    color: $bg-color;
  }
}
</style>
