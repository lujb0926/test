<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/commons/styles/index.styl'
.item-title{
  line-height: .8rem;
  padding: 0 .2rem;
  font-size: .32rem;
  border-bottom: 1px solid #ccc;
  .item-title-icon{
    position: relative;
    top: .08rem;
    left: .08rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
}
.item-children{
  padding: 0 .2rem;
}
</style>
