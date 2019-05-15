<script>
import { eventBus } from '@/main.js'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data(){
    return{
      // 一頁顯示幾個頁碼
      PaginationPrePage: 5,
    }
  },
  computed: {
    ...mapState(['curPage']),
    ...mapGetters(['totalPages','renderArray']),
    curpage: {
      get(){
        return this.curPage
      },
      set(val){
        this.getCurrentPage(val)
      }
    },
    pagination(){
      let totals = this.totalPages
      let p = this.PaginationPrePage
      let cur = this.curpage

      if(totals == 1) {
        cur = 1
        return 1
      }
      else if(totals < p && totals > 1) {

        let arr = []
        for(let i=1 ;i<=totals ; i++){
          arr.push(i)
        }
        return arr
      }
      else if(totals>=p){

        let arr = []
        let center = Math.floor(p/2)
        if(cur<=center){
          arr = []
          for(let i=1 ; i<=p;i++){
            arr.push(i)
          }
        }
        else if(cur>=1+center && cur<=totals-center){
          arr = []
          for(let i = cur-center ; i<=cur+center;i++){
            arr.push(i)
          }
        }
        else if(cur>=totals-center+1){
          arr = []
          for(let i = totals-p+1 ; i<=totals ; i++){
            arr.push(i)
          }
        }
        return arr
      }
    },

  },
  methods: {
    ...mapMutations(['getCurrentPage']),
    pageHandler(page){
      this.curpage = this.curpage+page
      if(this.curpage < 1) this.curpage = 1
      else if(this.curpage > this.totalPages) {
        this.curpage = this.totalPages
      }
    },
    currentPageHandler(page){
      this.curpage = page
    },
  },
  created(){
    //回到第一頁
    eventBus.$on('initPage',(data)=>{
      this.curpage = data
    })
  }
}
</script>

<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>