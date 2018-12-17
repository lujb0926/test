<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="bannerImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="container">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      this._getDetailInfo()
    },
    _getDetailInfo () {
      const URL = '/api/detail.json'
      axios({
        methods: 'GET',
        url: URL,
        params: {
          id: this.$route.params.id
        }
      })
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.bannerImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        })
    }
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      bannerImgs: [],
      list: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.container{
  height: 30rem;
}
</style>
