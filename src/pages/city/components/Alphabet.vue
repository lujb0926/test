<template>
<div class="list">
  <div class="item"
    v-for="item in letters"
    :key="item"
    :ref="item"
    @touchstart="handleLetterStart"
    @touchmove="handleLetterMove"
    @touchend="handleLetterEnd"
    @click="handleLetterClick"
    >{{item}}</div>
</div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  data () {
    return {
      isScroll: false,
      startY: '',
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleLetterStart () {
      this.isScroll = true
    },
    handleLetterMove (e) {
      if (this.isScroll) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleLetterEnd () {
      this.isScroll = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/commons/styles/index.styl'
.list{
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item{
      text-align: center;
    line-height: .4rem;
    color: $bg-color;
  }
}
</style>
