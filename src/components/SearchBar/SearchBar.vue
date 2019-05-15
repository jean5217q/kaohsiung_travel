<script>
// import { eventBus } from '@/main.js'
import { mapMutations} from 'vuex'
export default {
  data(){
    return {
      searchInput: ''
    }
  },
  methods: {
    ...mapMutations(['getInput','initData','initInput']),
    //點擊送出時，先確認是否有輸入值，將值傳導vuex篩選陣列，數值初始化，跳轉頁面，清空
    searchHandler(){ 
      if(this.searchInput=='') return
      this.getInput(this.searchInput)
      // eventBus.$emit('initPage',1)
      this.initData()
      this.$router.push({path: '/search',query: {keyword: this.searchInput}})
      this.searchInput=""
    },
    //點擊logo回到首頁，數值要初始化
    init(){
      this.initData()
      this.initInput()
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>

<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>