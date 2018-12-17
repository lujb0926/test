<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper>
        <swiper-slide v-for="(item, index) in bannerImgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicGallery',
  props: {
    bannerImgs: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 3000
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('galleryClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container{
  z-index: 99;
  position: fixed;
  top: 0;
  right:0;
  bottom: 0;
  left: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 80%;
    .gallery-img{
      width: 100%;
    }
  }
}
</style>
