import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('loginUser') || 'null') || {}
  },
  mutations: {
    SET_USERINFO(state, userdata) {
      state.user = userdata
      localStorage.setItem('loginUser', JSON.stringify(userdata))
    }
  }
})
