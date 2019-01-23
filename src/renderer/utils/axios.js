import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'

const service = axios.create({
  // baseURL: 'http://39.106.200.26:9000/',
  baseURL: 'http://127.0.0.1:9000/',
  timeout: 15000
})

service.interceptors.request.use(
  config => {
    if (localStorage.token) {
      config.headers['x-rm-token'] = localStorage.token
    }
    config.headers['X-POWERED-BY'] = 'likequincy@outlook.com'
    return config
  },
  error => {
    console.log('request error:')
    console.log(err)
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    if (response.data.err != 0) {
      Message({
        message: response.data.msg,
        type: 'error',
        duration: 5 * 1000
      })
      console.log(
        `%cerror %c>>>%c>>>%c>>>%c>>>%c>>>%c>>> code ${response.data.err}`,
        'color: #e74c3c',
        'color: #e67e22',
        'color: #f1c40f',
        'color: #2ecc71',
        'color: #1abc9c',
        'color: #3498db',
        'color: #9b59b6'
      )
      console.log(response.data.msg)
      return Promise.reject(response.data)
    } else {
      if (response.data.page) {
        console.log(
          `%csuccess %c>>>%c>>>%c>>>%c>>>%c>>>%c>>> page ${
            response.data.page.page
          } ,size ${response.data.page.size} ,total ${
            response.data.page.total
          }`,
          'color: #2ecc71',
          'color: #e67e22',
          'color: #f1c40f',
          'color: #2ecc71',
          'color: #1abc9c',
          'color: #3498db',
          'color: #9b59b6'
        )
        console.log(response.data.list)
        return Promise.resolve({
          list: response.data.list,
          page: response.data.page
        })
      } else {
        console.log(
          '%csuccess %c>>>%c>>>%c>>>%c>>>%c>>>%c>>>',
          'color: #2ecc71',
          'color: #e67e22',
          'color: #f1c40f',
          'color: #2ecc71',
          'color: #1abc9c',
          'color: #3498db',
          'color: #9b59b6'
        )
        console.log(response.data.data)
        return Promise.resolve(response.data.data)
      }
    }
  },
  error => {
    console.log(
      '%cerror %c>>>%c>>>%c>>>%c>>>%c>>>%c>>>',
      'color: #e74c3c',
      'color: #e67e22',
      'color: #f1c40f',
      'color: #2ecc71',
      'color: #1abc9c',
      'color: #3498db',
      'color: #9b59b6'
    )
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
