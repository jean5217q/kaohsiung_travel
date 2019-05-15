<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['findItem']),
    obj(){
      return this.findItem[0]
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
}
</script>

<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>