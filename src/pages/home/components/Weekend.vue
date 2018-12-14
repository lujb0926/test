<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
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
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
  .weekend-title{
    line-height: .8rem;
    text-indent: .2rem;
    background: #eee;
    font-size: .32rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.44%;
    .item-img{
      width: 100%;
    }
  }
  .item-info{
    padding: .1rem;
    .item-title{
      margin-top: .02rem;
      no-wrap()
      line-height: .54rem;
      font-size: .3rem;
    }
    .item-desc{
      no-wrap()
      margin-top: .02rem;
      font-size: .28rem;
      line-height: .4rem;
      color: #ccc;
    }
  }
</style>
