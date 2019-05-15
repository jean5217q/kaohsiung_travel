<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    SearchBar
  },
  methods: {
    ...mapActions(['getData'])
  },
  mounted(){
    this.getData()
  }
}
</script>

<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>



