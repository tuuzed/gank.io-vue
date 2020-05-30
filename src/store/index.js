import Vue from 'vue'
import Vuex from 'vuex'

import banner from './modules/banner'
import article from './modules/article'
import ganhuo from './modules/ganhuo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banner,
    article,
    ganhuo
  }
})
