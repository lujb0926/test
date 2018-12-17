<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <router-link
        class="item"
        v-for="item in list"
        :key="item.id"
        tag="li"
        :to="'detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
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
  .recommend-title{
    line-height: .8rem;
    text-indent: .2rem;
    background: #eee;
    margin-top: .2rem;
    font-size: .32rem;
  }
  .item{
    height: 1.9rem;
    display: flex;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title{
        margin-top: .08rem;
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
      .item-button{
        line-height: .44rem;
        margin-top: .16rem;
        padding: 0 .2rem;
        background-color: #ff9300;
        border-radius(.09rem)
        color: #fff;
        border: 0;
      }
    }
  }
</style>
