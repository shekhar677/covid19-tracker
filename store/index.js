export const state = () => ({
  isLoading: false
})

export const getters = {
  isLoading: state => state.isLoading
}

export const mutations = {
  UPDATE_LOADER(state, data) {
    state.isLoading = data
  }
}

export const actions = {
  updateLoadingStatus({ commit }, data) {
    commit('UPDATE_LOADER', data);
  }
}