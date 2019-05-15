<script>
import {mapMutations, mapState} from 'vuex'
export default {
  data(){
    return{
      zoneArr: ["三民區","內門區","美濃區","大樹區","小港區",
                "六龜區","仁武區","左營區","田寮區","永安區",
                "甲仙區","鼓山區","杉林區","那瑪夏","岡山區",
                "前鎮區","新興區","苓雅區","茂林區","茄萣區",
                "梓官區","旗津區","桃源區","楠梓區","前金區","鳳山區"],
      ticketInfoo: ['免費參觀','新台幣50元'],
      //小螢幕側邊篩選欄
      show: false
    }
  },
  computed: {
    ...mapState(['zone','ticketInfo','input']),
    //改變store值要取值get與給值set
    ZONE: {
      get(){
        return this.zone
      },
      set(val){
        this.getZone(val)
      }
    },
    TICKET:{
      get(){
        return this.ticketInfo
      },
      set(val){
        this.getTicketInfo(val)
      }
    }
  },
  methods: {
    ...mapMutations(['getZone','getTicketInfo','getCurrentPage'])
  },
  watch: {
    ZONE(){
      //變更篩選 回到第一頁
      //如果有勾選且不在首頁，跳到search
      //在首頁篩選網址不變
      this.getCurrentPage(1)
      if(this.zone!=null&&this.$route.name!="HomePage"){
        this.$router.push({path: '/search',query: {keyword: this.input,area: this.zone,type: this.ticketInfo}})
      }
    },
    TICKET(){
      this.getCurrentPage(1)
      if(this.ticketInfo.length!=0&&this.$route.name!="HomePage"){
        this.$router.push({path: '/search',query: {keyword: this.input,area: this.zone,type: this.ticketInfo}})
      } 
    }
  }
}
</script>

<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>