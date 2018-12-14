<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
.icons >>> .swiper-container
  height: 0;
  padding-bottom: 50%;
.icons{
  margin-top: .1rem;
  .icon{
    font-size: .25rem;
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      box-sizing: border-box;
      padding: .1rem;
      .icon-img-content{
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-desc{
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      color: $dark-text-color;
      no-wrap()
    }
  }
}
</style>
