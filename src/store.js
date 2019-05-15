import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //api接回原始資料
    totalData: null,
    // input接回輸入
    input: '',
    //select綁定
    zone: null,
    //checkbox綁定
    ticketInfo: [],
    //一頁幾個
    itemPrePage: 5,
    //當前頁面
    curPage: 1,
    //項目id
    id: '',
  },
  getters: {
    // 渲染到畫面的陣列（切割）
    renderArray(state, getters) {
      if (state.totalData === null) return null
      const start = (state.curPage - 1) * state.itemPrePage
      const end = state.curPage * state.itemPrePage
      return getters.filterControl.slice(start, end)
    },
    // 總共有幾頁
    totalPages(state, getters) {
      if (state.totalData === null) return
      return Math.ceil(getters.filterControl.length / state.itemPrePage)
    },
    filterControl(state) {
      if (state.totalData === null) return
      let data = state.totalData
      if (state.input !== '') {
        data = data.filter(obj => {
          let flag = false
          const testFiled = ['Add', 'Description']
          testFiled.forEach(el => {
            if (obj[el].indexOf(state.input) != -1) {
              flag = true
            }
          })
          return flag
        })
      }
      if (state.zone !== null) {
        data = data.filter(obj => {
          return obj['Zone'].indexOf(state.zone) != -1
        })
      }
      if (state.ticketInfo !== '') {
        data = data.filter(obj => {
          return obj['Ticketinfo'].indexOf(state.ticketInfo) != -1
        })
      }
      return data
    },
    findItem(state) {
      return state.totalData.filter(obj => {
        return state.id == obj['_id']
      })
    },
    hasItem(state) {
      if (state.input !== '') {
        let check = []
        const testFiled = ['Add', 'Description']
        state.totalData.forEach(obj => {
          testFiled.forEach(el => {
            check.push(obj[el].indexOf(state.input))
          })
        })
        return check.some(el => {
          return el >= 0
        })
      }
    }
  },
  mutations: {
    getInput(state, input) {
      state.input = input
    },
    getZone(state, zone) {
      state.zone = zone
    },
    getTicketInfo(state, info) {
      state.ticketInfo = info
    },
    // 接回當前頁碼
    getCurrentPage(state, page) {
      state.curPage = page
    },
    // 儲存API接回來的原始陣列
    updateData(state, value) {
      state.totalData = value
    },
    getID(state, id) {
      state.id = id
    },
    initData(state) {
      state.zone = null
      state.ticketInfo = []
      state.curPage = 1
    },
    initInput(state) {
      state.input = ''
    }
  },
  actions: {
    getData(content) {
      axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
        .then(res => {
          content.commit('updateData', res.data.result.records)

        })
    }
  }
})