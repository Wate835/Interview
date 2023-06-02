export default {
  loadUsers (context) {
    context.state.isLoading = true
    context.state.isLoadingFailed = false
    try {
      const data = JSON.parse(localStorage.getItem('users'))
      if (data){
        context.commit('setUsers', data)
      }
    } catch (err) {
      console.log(err);
      context.state.isLoadingFailed = true
      context.state.isLoading = false
    } finally {
      context.state.isLoading = false
    }
  },
  saveData(context) {
    try {
      localStorage.setItem('users', JSON.stringify(context.state.usersData))
    } catch (err) {
      console.log(err);
    }
  }
}
