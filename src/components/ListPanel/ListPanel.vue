<script>
  import { mapGetters, mapMutations, mapState } from "vuex";
  export default {
    computed: {
      ...mapState(["input"]),
      ...mapGetters(["renderArray", "filterControl"]),
      //顯示詳細搜尋小標
      searchInfo() {
        if (this.input !== "") return true;
        else return false;
      },
      //顯示列表 或沒有符合篩選條件
      searchResult() {
        if (this.renderArray === null) return;
        else {
          if (this.renderArray.length == 0) return false;
          else return true;
        }
      },
      hasData() {
        if (this.renderArray === null) return false;
        else return true;
      }
    },
    methods: {
      ...mapMutations(["getID"]),
      clickId(el) {
        const btn = el.target.closest(".list-panel");
        let ID = btn.id;
        this.getID(ID);
        this.$router.push({ name: "Attraction", params: { id: ID } });
      }
    }
  };
</script>
<template lang="pug" src ="./template.pug"></template>
<style lang="sass" src="./style.sass"></style>