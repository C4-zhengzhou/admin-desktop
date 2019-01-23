const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  user: state => state.user.user,
  avatar: state => state.user.user.avatar,
  userName: state => state.user.user.userName,
  isLogin: state => !!state.user.user._id,
  roles: state => state.user.user.roles,
  category: state => state.info.category,
  commdity: state => state.info.commdity,
  location: state => state.info.location,
  origin: state => state.info.origin
}
export default getters
