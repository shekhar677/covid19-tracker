export const state = () => ({
  isLoading: false,
  currentFetch: 'india'
})

export const getters = {
  isLoading: state => state.isLoading,
  currentFetch: state => state.currentFetch
}

export const mutations = {
  UPDATE_LOADER(state, data) {
    state.isLoading = data
  },
  UPDATE_CURRENT_FETCH(state, data) {
    state.currentFetch = data
  }
}

export const actions = {
  updateLoadingStatus({ commit }, data) {
    commit('UPDATE_LOADER', data);
  },
  updateCurrentFetch({ commit }, data) {
    commit('UPDATE_CURRENT_FETCH', data);
  }
}