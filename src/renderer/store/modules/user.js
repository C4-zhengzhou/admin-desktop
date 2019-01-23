import http from '@/utils/axios'

export default {
  state: {
    user: {}
  },
  mutations: {
    set_user: (state, user) => {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
      if (user.token) {
        localStorage.setItem('token', user.token)
      }
    },
    clear_user(state) {
      state.user = {}
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('set_user', {
          phone: payload.phone,
          token: 'test-token'
        })
        resolve(res)
        // http
        //   .post('/user/loginByPhone', payload)
        //   .then(res => {
        //     commit('set_user', res)
        //     resolve(res)
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get('/user/current')
          .then(res => {
            commit('set_user', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('clear_user')
        resolve()
      })
    }
  }
}
