import { createStore } from 'vuex'

export default createStore({
  state: {
    test: false
  },
  mutations: {
    SET_TEST (state, value: boolean) {
      state.test = value
    }
  },
  getters: {
    test: state => state.test
  }
})
