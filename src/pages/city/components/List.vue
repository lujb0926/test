<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
.list{
  font-size: .26rem;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .title{
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    border-bottom: 1px solid #ccc;
  }
  .button-list{
    padding: .1rem;
    padding-right: .6rem;
    overflow: hidden;
    .button-wrapper{
      float: left;
      width: 33.33%;
      .button{
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius(.06rem)
      }
    }
  }
  .item-list{
    .item{
      line-height: .76rem;
      padding-left: .2rem;
      border-bottom: .02rem solid #ccc;
    }
  }
}
</style>
