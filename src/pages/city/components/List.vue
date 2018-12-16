<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button current-city">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
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
    hot: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  watch: {
    letter () {
      const ele = this.$refs[this.letter][0]
      this.scroll.scrollToElement(ele)
    }
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
        &.current-city{
          border-color: $bg-color;
        }
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
