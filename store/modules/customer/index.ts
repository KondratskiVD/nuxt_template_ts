import { GetterTree, ActionTree, MutationTree } from 'vuex'
import moment from 'moment'

export const state = () => ({
  requestingFullProfile: false,
  fullProfile: {},
  fullProfileLastFetch: moment().subtract(1, 'months').toDate()
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  fullProfile: (state: RootState) => state.fullProfile
}

export const mutations: MutationTree<RootState> = {
  SET_FULL_PROFILE: (state, fullProfile: object) => {
    state.fullProfile = fullProfile
    state.fullProfileLastFetch = new Date()
  }
}

export const actions: ActionTree<RootState, RootState> = {
  fetchFullProfile ({ commit, state, dispatch }, isForce = false) {
    return new Promise((resolve, reject) => {
      if (!state.requestingFullProfile && Math.abs(moment().diff(state.fullProfileLastFetch, 'seconds')) > (isForce ? 30 : 600)) {
        dispatch('ui/toggleRefresh', true, { root: true })
        state.requestingFullProfile = true
        this.$axios.get('profile-full')
          .then((response) => {
            commit('SET_FULL_PROFILE', response.data.data)
            resolve(response)
          })
          .catch(error => reject(error))
          .finally(() => {
            dispatch('ui/toggleRefresh', false, { root: true })
            state.requestingFullProfile = false
          })
      }
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
