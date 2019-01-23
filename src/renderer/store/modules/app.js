function getSideBarStatus() {
  return localStorage.sidebarStatus == 'true' ? true : false
}

export default {
  state: {
    sidebar: {
      opened: getSideBarStatus(),
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: {
    toggleSideBar: state => {
      if (state.sidebar.opened) {
        localStorage.setItem('sidebarStatus', false)
      } else {
        localStorage.setItem('sidebarStatus', true)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    closeSideBar: (state, payload) => {
      localStorage.setItem('sidebarStatus', false)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = payload.withoutAnimation
    },
    toggleDevice: (state, payload) => {
      state.device = payload
    }
  },
  actions: {}
}
