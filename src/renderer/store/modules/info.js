import http from '@/utils/axios'

export default {
  state: {
    category: [],
    commdity: [],
    location: [],
    origin: []
  },
  mutations: {
    set_category(state, payload) {
      state.category = payload
    },
    set_commdity(state, payload) {
      state.commdity = payload
    },
    set_location(state, payload) {
      state.location = payload
    },
    set_origin(state, payload) {
      state.origin = payload
    }
  },
  actions: {
    get_category({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get('/category')
          .then(res => {
            commit('set_category', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    get_commdity({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get('/commdity')
          .then(res => {
            commit('set_commdity', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    get_location({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get('/location')
          .then(res => {
            commit('set_location', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    get_origin({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get('/origin')
          .then(res => {
            commit('set_origin', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
