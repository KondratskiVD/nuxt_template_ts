import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
  fetchCleaningsBase ({ dispatch }, { uuid, params }) {
    return new Promise((resolve, reject) => {
      dispatch('ui/toggleRefresh', true, { root: true })
      this.$axios.get(`address/${uuid}/orders-base`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() => {
          dispatch('ui/toggleRefresh', false, { root: true })
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
