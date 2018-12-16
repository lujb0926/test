<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名称或拼音"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item nodata-item" v-show="!list.length" > 没有符合的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(val => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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
.search-content{
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item{
    line-height: .62rem;
    background: #fff;
    border-bottom();
    color: #666;
    padding-left: .2rem;
    &.nodata-item{
      text-align: center;
    }
  }
}
</style>
