<template>
  <div>
    <div class="banner" @click="handleGalleryOpen">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <public-gallery @galleryClose="handleGalleryClose" v-if="isShowGallery" :bannerImgs="bannerImgs"></public-gallery>
  </div>
</template>

<script>
import PublicGallery from '../../../public/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    PublicGallery
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      isShowGallery: false
    }
  },
  methods: {
    handleGalleryOpen () {
      this.isShowGallery = true
    },
    handleGalleryClose () {
      this.isShowGallery = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/commons/styles/index.styl'
.banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    font-size: .32rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title{
      flex: 1;
      padding: 0 .2rem;
      no-wrap()
    }
    .banner-number{
      height: .32rem;
      line-height: .32rem;
      margin-top: .14rem;
      padding: 0 .4rem;
      background: rgba(0, 0, 0, .8)
      border-radius(.2rem)
      font-size: .24rem;
      .banner-icon{
        font-size: .24rem;
      }
    }
  }
}
</style>
