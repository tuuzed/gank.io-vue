import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    banners: []
  }),
  mutations: {
    updateBanners(state, newBanners) {
      state.banners = newBanners
    }
  }
})
