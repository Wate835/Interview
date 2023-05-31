export default {
  setUsers (state, payload) {
    state.usersData = payload
  },
  pushUserToData (state, payload) {
    state.usersData.unshift(payload) 
  },

}
