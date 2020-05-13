import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toggle:false
  },
  mutations: {
    setToggle(state,val){
        this.state.toggle= val;
    }
  },
  actions: {
  },
  modules: {
  }
})
