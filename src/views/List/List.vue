<script>
import FilterBar from '@/components/FilterBar/FilterBar.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import ListPanel from '@/components/ListPanel/ListPanel.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    FilterBar,
    Pagination,
    ListPanel
  },
  computed: {
    ...mapGetters(['renderArray','hasItem','filterControl'])
  }
}
</script>

<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>
